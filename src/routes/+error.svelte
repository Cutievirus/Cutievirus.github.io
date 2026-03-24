<script>
	import { page } from '$app/stores';
	import MessageWindow from '$lib/components/MessageWindow.svelte';
	import { onMount } from 'svelte';
	import Layout from "./(main)/Layout.svelte";
    import Sidebar from './(main)/Sidebar.svelte';
    import ColumnLayout from '$lib/components/layout/ColumnLayout.svelte';

	let canGoBack=false;

	onMount(() => {
		canGoBack=history.length>1;
	});
	
	function goBack(){
		//goto(previousPage);
		history.back();
	}
</script>

<svelte:head>
    <title>{$page.status} {$page.error?.message}</title>
</svelte:head>

<Layout>
	<ColumnLayout>
		<MessageWindow>
			<h1> {$page.status} </h1>
			
			<p> {$page.error?.message} </p>
			{#if canGoBack}
			<p>
				Try going <a href="javscript:goBack();" on:click|preventDefault={goBack}>🡠back</a>
			</p>
			{/if}
		</MessageWindow>
		<Sidebar/>
	</ColumnLayout>
</Layout>

<style lang="scss">
	h1{
		font-size:3em;
	}
	h1,h1+p{
		text-align:center;
	}
	
	h1,p{
		margin: scale(6px) scale(12px);
	}
</style>