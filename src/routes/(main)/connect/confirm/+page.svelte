<script lang="ts">
	import { onMount } from 'svelte';
	import { getPending, resolvePending, type PendingDescription } from '$lib/backend';
	import Button from '$lib/components/Button.svelte';
	import Img from '$lib/components/Img.svelte';
	import MessageWindow from '$lib/components/MessageWindow.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import BrandIcon from '../BrandIcon.svelte';

	let pending: PendingDescription | null = null;
	let error = '';
	let busy = false;

	const token = () => new URLSearchParams(location.search).get('pending');

	onMount(async () => {
		const t = token();
		if (!t) {
			error = 'Nothing to confirm.';
			return;
		}
		try {
			pending = await getPending(t);
		} catch (e) {
			error = e instanceof Error ? e.message : 'This confirmation has expired.';
		}
	});

	/** 'Cutievirus(patreon)' — the source keeps same-named accounts unambiguous. */
	function connLabel(p: PendingDescription) {
		const name = p.connection.display_name ?? p.connection.username ?? p.connection.remote_id;
		return `${name}(${p.connection.source === 'itchio' ? 'itch.io' : 'patreon'})`;
	}

	function question(p: PendingDescription) {
		const conn = connLabel(p);
		switch (p.action) {
			case 'create':
				return `Create new account for ${conn}?`;
			case 'connect':
				return `Connect ${conn} to ${p.account?.display_name}?`;
			case 'move':
				return `${conn} is connected to ${p.source_account?.display_name}. Move it to ${p.account?.display_name}?`;
			case 'merge':
				return `${conn} is the primary connection for ${p.source_account?.display_name}. Merge ${p.source_account?.display_name} into ${p.account?.display_name}?`;
			case 'login':
				return `${conn} is already connected to your account.`;
		}
	}

	const confirmLabels: Record<PendingDescription['action'], string> = {
		create: 'Create account',
		connect: 'Connect',
		move: 'Move connection',
		merge: 'Merge accounts',
		login: 'Continue'
	};

	async function confirm() {
		const t = token();
		if (!t) return;
		busy = true;
		error = '';
		try {
			const res = await resolvePending(t, 'confirm');
			if (res.redirect) location.href = res.redirect;
			else location.href = '/connect';
		} catch (e) {
			error = e instanceof Error ? e.message : 'That action failed.';
			busy = false;
		}
	}

	async function cancel() {
		const t = token();
		if (!t) {
			location.href = '/connect';
			return;
		}
		busy = true;
		try {
			await resolvePending(t, 'cancel');
		} catch {
			// already gone; nothing to cancel
		}
		location.href = '/connect';
	}
</script>

<MessageWindow shrink>
	<PageTitle title="Confirm" />

	{#if error}
		<p class="error">{error}</p>
		<p><a href="/connect">Back to Connect</a></p>
	{:else if !pending}
		<p>Loading…</p>
	{:else}
		<p>
			<BrandIcon source={pending.connection.source} size={16} style="vertical-align:middle;" />
			{#if pending.connection.avatar_url}
				<Img src={pending.connection.avatar_url} width={16} height={16} radius={1} alt="" />
			{/if}
			{question(pending)}
		</p>
		{#if pending.action === 'create'}
			<p>This connection becomes the new account's primary connection.</p>
		{:else if pending.action === 'merge'}
			<p>
				Its other connections move too — starmium and download keys follow
				their connections, as always.
			</p>
		{/if}
		<Button block action={confirm} disabled={busy}>{confirmLabels[pending.action]}</Button>
		<Button block action={cancel} disabled={busy}>Cancel</Button>
	{/if}
</MessageWindow>

<style lang="scss">
	@import '../brand-colors';

	.error {
		color: $error-text-color;
	}
</style>
