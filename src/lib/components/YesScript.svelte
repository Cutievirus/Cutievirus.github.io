<script lang="ts">
    import { onMount } from "svelte";

    export let invisible = false;
    export let element:string="span";
    export let hide = false;

    let disply=invisible;
    let visible=false;
    onMount(()=>{
        disply=true;
        visible=true;
    });
</script>

{#if invisible}
    <svelte:element this={element} class={visible&&!hide?'visible':'invisible'}>
        <slot/>
    </svelte:element>
{:else if disply}
    <slot/>
{/if}

<style lang="scss">
    .invisible,.visible{
        transition: opacity 0.5s ease-in-out;
    }
    .invisible{
        visibility: hidden;
        pointer-events: none;
        opacity: 0;
    }
    .visible{
        visibility: visible;
        opacity: 1;
    }
</style>