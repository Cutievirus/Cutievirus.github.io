<script>
    import Anchor from "$lib/components/Anchor.svelte";
    import MessageWindow from "$lib/components/MessageWindow.svelte";
    import StickyBar from "$lib/components/StickyBar.svelte";
    import DocNav from "./docs/DocNav.svelte";

</script>
<StickyBar>
    <MessageWindow>
        <Anchor h2>Documentation</Anchor>
        <DocNav/>
    </MessageWindow>
</StickyBar>