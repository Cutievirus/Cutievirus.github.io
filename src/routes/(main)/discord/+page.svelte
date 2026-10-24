<script>
    import MessageWindow from "$lib/components/MessageWindow.svelte";
    import { onMount } from 'svelte';

    const INVITE = 'https://discord.gg/DxCuHQBWsD';

    onMount(() => {
        window.location.replace(INVITE);
    });
</script>

<svelte:head>
    <title>Cutievirus Discord</title>
    <meta http-equiv="refresh" content="0; url={INVITE}" />
    <link rel="canonical" href={INVITE} />
    <meta name="robots" content="noindex" />
</svelte:head>

<MessageWindow>

    <p>Taking you to the Cutievirus Discord…</p>
    <p><a href={INVITE}>Click here if you are not redirected</a></p>

</MessageWindow>