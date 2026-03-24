<script lang="ts">
    import ColumnLayout from "$lib/components/layout/ColumnLayout.svelte";
    import Img from "$lib/components/Img.svelte";
    import MessageWindow from "$lib/components/MessageWindow.svelte";
    import Sidebar from "./Sidebar.svelte";

</script>

<svelte:head>
    <title>Cutievirus</title>
</svelte:head>

<ColumnLayout>
    <MessageWindow>
        <Img src="/img/ella2k3.png" width=72 height=72 alt="" data-radius=2 style="float:right"/>
        <p>Hi! My name is Cutievirus Ella. I make RPG Maker plugins and also some other stuff.</p>
        <p>My website is a bit of a mess right now (as always). Most of the features are offline. But at least the site is up! haha.</p>
        <p>If you're looking for <a href="/docs">documentation</a>, check the navigation on the right. 👉</p>
    </MessageWindow>
    <Sidebar/>
</ColumnLayout>