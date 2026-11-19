<script lang="ts">
	import ConnectButton from './ConnectButton.svelte';

	export let onconnect: ((source: 'patreon' | 'itchio') => void) | undefined = undefined;
	export let disabled = false;
</script>

<div>
	<ConnectButton source="patreon" action={() => onconnect?.('patreon')} {disabled} />
	<ConnectButton source="itchio" action={() => onconnect?.('itchio')} {disabled} />
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
