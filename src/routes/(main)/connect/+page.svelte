<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase';
	import { connectProvider, getMe, signOut, type Me } from '$lib/backend';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Button from '$lib/components/Button.svelte';
	import BrandIcon from './BrandIcon.svelte';

	let session: Awaited<ReturnType<typeof supabase.auth.getSession>>['data']['session'] = null;
	let me: Me | null = null;
	let error = '';
	let busy = false;

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

	async function connect(provider: 'patreon' | 'itchio') {
		busy = true;
		error = '';
		try {
			await connectProvider(provider);
		} catch {
			error = 'Could not start the connection.';
			busy = false;
		}
	}

	function starmium(balance: number) {
		return (balance / 100).toFixed(2);
	}
</script>

<PageTitle title="Connect" />

{#if error}
	<p class="error">{error}</p>
{/if}

{#if !session}
	<p>Connect with Patreon to sign in. Your pledge earns starmium, which you can spend on download keys.</p>
	<Button action={() => connect('patreon')} disabled={busy}>
		<BrandIcon source="patreon" size={16} /> Connect with Patreon
	</Button>
{:else}
	<p>
		Signed in as <strong>{me?.profile.display_name ?? '…'}</strong>
		{#if me}
			· {starmium(me.starmium)} starmium
			{#if me.patron?.tier}
				· {me.patron.tier} patron
			{/if}
		{/if}
	</p>
	<p>
		<Button action={() => connect('itchio')} disabled={busy}>
			<BrandIcon source="itchio" size={16} /> Connect itch.io
		</Button>
		<Button action={async () => { await signOut(); session = null; me = null; }}>
			Sign out
		</Button>
	</p>
{/if}

<style lang="scss">
	.error {
		color: #ff6b6b;
	}
</style>
