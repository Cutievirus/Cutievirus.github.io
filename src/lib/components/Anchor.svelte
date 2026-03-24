<script lang="ts">
    import Wrapper from "./Wrapper.svelte";

    export let id:string|undefined=undefined;
    export let href:string|undefined=id?`#${id}`:undefined;

    export let h1:boolean|undefined=undefined;
    export let h2:boolean|undefined=undefined;
    export let h3:boolean|undefined=undefined;
    export let h4:boolean|undefined=undefined;
    export let h5:boolean|undefined=undefined;
    export let h6:boolean|undefined=undefined;

    let tag:string, aliasWrapper:string;
    $:tag = h1 ? "h1" : h2 ? "h2" : h3 ? "h3" : h4 ? "h4" : h5 ? "h5" : h6 ? "h6" : "b";
    $:aliasWrapper = tag==="b"||!tag ? "span" : "div";

    export let alias:string="";
    let aliases:string[];
    $:aliases = alias.split(" ").filter(a=>a);

</script>

<style lang="scss">
    :global([data-theme*="2k3"]){
        h1::after{
            border-bottom: scale(3px) double currentcolor;
        }
        h2::after{
            border-bottom: scale(1px) solid currentcolor;
        }
        h3::after{
            border-bottom: scale(1px) dashed currentcolor;
        }
    }

    h1::after{
        content:"";
        display:block;
        border-bottom: 3px double #fff6;
        @include drop-shadow;
    }
    h2::after{
        content:"";
        display:block;
        border-bottom: 1px solid #fff6;
        @include drop-shadow;
    }
    h3::after{
        content:"";
        display:block;
        border-bottom: 1px dashed #fff6;
        @include drop-shadow;
    }

    a[href^="#"]::before{
        content:"# ";
    }
</style>

<Wrapper times={aliases.length} element={aliasWrapper} id={aliases}>
{#if tag}
    <svelte:element this={tag} {id}>
        {#if href}
            <a {href}><slot /></a>
        {:else}
            <slot />
        {/if}
    </svelte:element>
{:else}
    <a {id} {href}><slot /></a>
{/if}
</Wrapper>
