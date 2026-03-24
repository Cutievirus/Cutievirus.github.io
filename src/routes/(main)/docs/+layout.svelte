<script>
    import { page } from "$app/stores";

    import ColumnLayout from "$lib/components/layout/ColumnLayout.svelte";
    import MessageWindow from "$lib/components/MessageWindow.svelte";
    import StickyBar from "$lib/components/StickyBar.svelte";
    import DocNav from "./DocNav.svelte";

</script>

<ColumnLayout>
    <MessageWindow>
        <slot/>
    </MessageWindow>
    <StickyBar>
        <MessageWindow>
            <DocNav/>
        </MessageWindow>
    </StickyBar>
</ColumnLayout>