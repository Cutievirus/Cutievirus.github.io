<script lang="ts">
    import Wrapper from "./Wrapper.svelte";

    export let condition:boolean=true;
    export let times:number|`${number}`=1;

    export let element:string="div";
    export let component:ConstructorOfATypedSvelteComponent|undefined=undefined;

    let props=Object.fromEntries(Object.entries($$props).filter(([k,v])=>k[0]!=="$"&&k!=="condition"&&k!=="times"&&k!=="element"&&k!=="component"));
    
    export let id:string[]|string|undefined=undefined;

</script>
{#if condition && +times>0}
    {@const _id=(id instanceof Array) ? props.id[+times-1] : id}
    <Wrapper {element} times={+times-1} {...props}>
        {#if component}
            <svelte:component this={component} {...props} id={_id}>
                <slot/>
            </svelte:component>
        {:else}
            <svelte:element this={element} {...props} id={_id}>
                <slot/>
            </svelte:element>
        {/if}
    </Wrapper>
{:else}
    <slot/>
{/if}