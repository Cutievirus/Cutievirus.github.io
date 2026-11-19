<script lang="ts">
	import { onMount } from 'svelte';
	import { linkItchio } from '$lib/backend';

	let status = 'Finishing your itch.io connection…';

	onMount(async () => {
		try {
			// itch.io returns its token in the URL fragment, never sent to a
			// server; check the query string too, in case that ever changes
			const hash = new URLSearchParams(location.hash.slice(1));
			const query = new URLSearchParams(location.search);
			const access_token = hash.get('access_token') ?? query.get('access_token');
			const state = hash.get('state') ?? query.get('state');
			// scrub the token from the address bar before doing anything else
			history.replaceState(null, '', location.pathname);
			if (!access_token || !state) throw new Error('missing token or state from itch.io');
			const result = await linkItchio(access_token, state);
			if (result.login) {
				// signing in to the account this itch.io connection belongs to
				location.href = result.login;
			} else if (result.pending) {
				// creating / connecting / moving / merging needs a confirmation
				location.href = `/connect/confirm?pending=${result.pending}`;
			} else {
				location.href = '/connect';
			}
		} catch (e) {
			// carry the real reason back so the connect page can show it
			const detail = e instanceof Error ? e.message : 'itch.io connection failed';
			location.href = `/connect?error=${encodeURIComponent(detail)}`;
		}
	});
</script>

<svelte:head>
	<title>Connecting itch.io — Cutievirus</title>
</svelte:head>

<p>{status}</p>
