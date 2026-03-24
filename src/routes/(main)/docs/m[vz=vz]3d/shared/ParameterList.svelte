<script lang="ts">
	import Code from "$lib/components/Code.svelte";
	let code:HTMLElement;
</script>

<Code bind:code><slot/></Code>