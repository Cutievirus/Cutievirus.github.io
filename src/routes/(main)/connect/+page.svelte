<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase';
	import {
		connectProvider,
		getMe,
		removeConnection,
		signOut,
		type ConnectionSummary,
		type Me
	} from '$lib/backend';
	import Anchor from '$lib/components/Anchor.svelte';
	import Button from '$lib/components/Button.svelte';
	import Img from '$lib/components/Img.svelte';
	import MessageWindow from '$lib/components/MessageWindow.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import BrandIcon from './BrandIcon.svelte';
	import ConnectButtons from './ConnectButtons.svelte';

	let session: Awaited<ReturnType<typeof supabase.auth.getSession>>['data']['session'] = null;
	let me: Me | null = null;
	let error = '';
	let busy = false;
	let confirmRemoveKey = '';

	const iconSize = 16;

	onMount(async () => {
		const { data } = await supabase.auth.getSession();
		session = data.session;
		supabase.auth.onAuthStateChange((_event, s) => {
			session = s;
			if (s) loadMe();
			else me = null;
		});
		if (session) loadMe();
		const errorParam = new URLSearchParams(location.search).get('error');
		if (errorParam) {
			// known codes get the friendly line; anything else is a specific
			// reason passed through from a flow, so show it verbatim
			const codes = ['itchio_failed', 'patreon_failed', 'bad_state', 'missing_code'];
			error = codes.includes(errorParam)
				? 'That connection failed. Please try again.'
				: `That connection failed: ${errorParam}`;
		}
	});

	async function loadMe() {
		try {
			me = await getMe();
		} catch {
			me = null;
		}
	}

	async function connect(source: 'patreon' | 'itchio') {
		busy = true;
		error = '';
		try {
			await connectProvider(source);
		} catch {
			error = 'Could not start the connection.';
			busy = false;
		}
	}

	async function remove(connection: ConnectionSummary) {
		if (confirmRemoveKey !== connection.key) {
			confirmRemoveKey = connection.key;
			return;
		}
		confirmRemoveKey = '';
		busy = true;
		error = '';
		try {
			await removeConnection(connection.source, connection.remote_id);
			await loadMe();
		} catch {
			error = 'Could not remove that connection.';
		}
		busy = false;
	}

	function expired(connection: ConnectionSummary) {
		return connection.expires_at != null && new Date(connection.expires_at).getTime() < Date.now();
	}

	function starmium(balance: number) {
		return (balance / 100).toFixed(2);
	}

	/** 'Cutievirus(patreon)' — the source keeps same-named accounts unambiguous. */
	function label(connection: ConnectionSummary) {
		const name = connection.display_name ?? connection.username ?? connection.remote_id;
		return `${name}(${connection.source === 'itchio' ? 'itch.io' : 'patreon'})`;
	}

	function tier(connection: ConnectionSummary) {
		if (!me || connection.source !== 'patreon') return null;
		const m = me.memberships.find((x) => x.patreon_user_id === connection.remote_id);
		return m && m.patron_status === 'active_patron' ? m.tier_title : null;
	}
</script>

<MessageWindow shrink>
	<PageTitle title="Connect" />

	{#if error}
		<p class="error">{error}</p>
	{/if}

	<ConnectButtons onconnect={connect} disabled={busy} />

	{#if me && me.connections.length}
		<Anchor h2>Connected Services</Anchor>
		<ul>
			{#each me.connections as connection}
				<li>
					<BrandIcon source={connection.source} size={iconSize} style="vertical-align:middle;" />
					{#if connection.avatar_url}
						<Img src={connection.avatar_url} width={iconSize} height={iconSize} radius={1} alt="" />
					{/if}
					{label(connection)}
					{#if connection.is_primary}<span class="primary">(primary)</span>{/if}
					{#if expired(connection)}<span class="expired">(expired)</span>{/if}
					{#if tier(connection)}<span>— {tier(connection)}</span>{/if}
					<span class="conn-starmium">☆{starmium(connection.starmium.available)}</span>
					{#if !connection.is_primary}
						<button
							class="remove"
							disabled={busy}
							onclick={() => remove(connection)}
						>{confirmRemoveKey === connection.key ? 'Remove?' : 'Remove'}</button>
					{/if}
				</li>
			{/each}
		</ul>
		<p>☆{starmium(me.starmium)}</p>
	{/if}

	{#if me && me.redemptions.length}
		<Anchor h2>Your Download Keys</Anchor>
		<ul>
			{#each me.redemptions as redemption}
				<li>
					{redemption.products?.title ?? redemption.product_name}:
					<a href={redemption.download_key}>{redemption.download_key}</a>
				</li>
			{/each}
		</ul>
	{/if}

	{#if session}
		<Button block action={async () => { await signOut(); session = null; me = null; }}>
			Sign out
		</Button>
	{/if}
</MessageWindow>

<style lang="scss">
	@import 'brand-colors';

	.error {
		color: $error-text-color;
	}

	.expired {
		color: $error-text-color;
	}

	.primary {
		opacity: 0.7;
	}

	.conn-starmium {
		float: right;
	}

	.remove {
		float: right;
		margin-left: scale(4px);
	}

	ul {
		padding: 0;
		li {
			margin-top: scale(1px);
			list-style: none;
			&:nth-child(odd) {
				background-color: #fff2;
			}
		}
	}
</style>
