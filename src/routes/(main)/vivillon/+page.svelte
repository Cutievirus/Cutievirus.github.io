<script>
    import MessageWindow from "$lib/components/MessageWindow.svelte";
    import { onMount } from 'svelte';

    const REDIRECT = 'https://cutievirus.itch.io/vivillon';

    onMount(() => {
        window.location.replace(REDIRECT);
    });
</script>

<svelte:head>
    <title>Vivillon Generator</title>
    <meta http-equiv="refresh" content="0; url={REDIRECT}" />
    <link rel="canonical" href={REDIRECT} />
    <meta name="robots" content="noindex" />
</svelte:head>

<MessageWindow>

    <p>Taking you to the Vivillon Generator…</p>
    <p><a href={REDIRECT}>Click here if you are not redirected</a></p>

</MessageWindow>