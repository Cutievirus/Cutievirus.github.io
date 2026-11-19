<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase';
	import { connectProvider, getMe, signOut, type ConnectionSummary, type Me } from '$lib/backend';
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
		if (new URLSearchParams(location.search).get('error'))
			error = 'That connection failed. Please try again.';
	});

	async function loadMe() {
		try {
			me = await getMe();
		} catch {
			me = null;
		}
	}

	async function connect(source: 'patreon' | 'itchio') {
		if (source === 'itchio' && !session) {
			error = 'itch.io links to an existing account — connect Patreon first.';
			return;
		}
		busy = true;
		error = '';
		try {
			await connectProvider(source);
		} catch {
			error = 'Could not start the connection.';
			busy = false;
		}
	}

	function expired(connection: ConnectionSummary) {
		return connection.expires_at != null && new Date(connection.expires_at).getTime() < Date.now();
	}

	function starmium(balance: number) {
		return (balance / 100).toFixed(2);
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
					{connection.display_name}
					{#if expired(connection)}<span class="expired">(expired)</span>{/if}
				</li>
			{/each}
		</ul>
		<p>☆{starmium(me.starmium)}</p>
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
