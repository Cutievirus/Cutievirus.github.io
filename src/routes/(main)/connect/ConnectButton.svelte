<script lang="ts">
	export let source: 'patreon' | 'itchio';
	export let action: (() => void) | undefined = undefined;
	export let disabled = false;
</script>

<button type="button" class="connect-wrapper {source}" on:click={action} {disabled}>
	{#if source === 'itchio'}
		<svg inline-src="brands/itchio/wordmark" class="connect itchio" data-radius=1 role="img" aria-label="Connect itch.io"><title>Connect itch.io</title></svg>
	{:else if source === 'patreon'}
		<svg inline-src="brands/patreon/wordmark" class="connect patreon" data-radius=1 role="img" aria-label="Connect Patreon"><title>Connect Patreon</title></svg>
	{/if}
</button>

<style lang="scss">
	@import 'brand-colors';

	.connect-wrapper {
		width: scale(120px);
		margin: scale(2px);
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
		&:disabled {
			cursor: wait;
			opacity: 0.7;
		}
	}

	.connect {
		width: scale(120px);
		height: scale(60px);
		max-height: 11em;
		box-sizing: border-box;
		margin: 0;
		display: block;
	}
	.connect.patreon {
		background-color: $brand-patreon-black;
		color: $brand-patreon-white;
	}
	.connect.itchio {
		background-color: $brand-itchio-itchy-carnation;
		color: white;
		padding: scale(12px);
	}
</style>
