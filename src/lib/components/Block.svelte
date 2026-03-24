<script lang="ts">
    export let block = false;
    export let inline = false;
    export let small = false;

    let element:string;
    $:element = block ? "div" : inline ? "span" : "div";

</script>

<style lang="scss">

.drop-shadow{
    filter:drop-shadow(0 scale(1px) 0 black);
}
.block{
    padding: scale(4px);
    background-color: color-mix(in lab,var(--message-window-bg),white 20%);
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
    background-attachment: var(--message-window-bg-attach,initial);
}

.block[data-mode=inline]{
    display:inline-block;
}
.block[data-mode=block]{
    margin: scale(8px) scale(4px);
}

.block.small{
    @include font10;
}
.block::after{
    content: "";
    display: table;
    clear: both;
}

</style>

<svelte:element this={element} class="drop-shadow">
    <svelte:element this={element} class="block" class:small={small}
    data-mode={block?"block":inline?"inline":"block"} data-radius=5>
        <slot />
    </svelte:element>
</svelte:element>