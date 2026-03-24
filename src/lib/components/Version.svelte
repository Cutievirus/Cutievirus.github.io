<script lang="ts">

    export let v:string|undefined=undefined;
    export let premium:boolean|'?'|undefined=undefined;
    export let bug=false;
    export let display = premium !== false && matchVersion(v);
    export let block = false;
    export let inline = false;
    export let small = false;

    let element:string;
    $:element = block ? "div" : inline ? "span" : "div";

    function matchVersion(v:string|undefined){
        return true;
    }

</script>

<style lang="scss">
.version-number{
    padding: 0 scale(4px);
}

.drop-shadow{
    //filter:drop-shadow(0 scale(1px) 0 black) drop-shadow(0 scale(-1px) 0 white);
    filter:drop-shadow(0 scale(1px) 0 black);
}
.premium,.basic{
    //--version-highlight-background: linear-gradient(rgba(252, 232, 145,.5),rgba(223, 157, 59,.5));
    //--version-highlight-background: linear-gradient(#afa57c,#a28153);
    //--version-highlight-background: linear-gradient(#f3db8b,#9c6126);

    //--version-highlight-background-color: #64b697;
    //--version-highlight-background: linear-gradient(#64b697,#63269c);

    --version-highlight-color: color-mix(in lab,var(--message-window-bg),white 20%);
	--version-highlight-background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
    
}
.bug{
    --version-highlight-color: color-mix(in lab,var(--message-window-bg),#f39e7c 50%);
    --version-highlight-background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
    //--version-highlight-color: darkred;
}
$wrap:"&.premium,&.bug,&.basic";

.v{
    #{$wrap}{
        background-color: var(--version-highlight-color);
        background-image: var(--version-highlight-background);
        //border-radius: 1em;
        background-attachment: var(--message-window-bg-attach,initial);
    }
    padding: scale(4px);
}
.v[data-mode=block],.v[data-mode=normal]{
    #{$wrap}{
        margin: scale(8px) scale(4px) scale(2px);
    }
}
.premium::before{
    @include drop-shadow;
    display:inline-block;
}

.v{
    &.premium::before{
        content: "✨ ";
    }
    &.bug::before{
        content: "🪲 ";
    }

}
.v[data-mode=block]{

    &.premium::before{
        content: "✨ Premium Feature ✨";
    }
    &.bug::before{
        content: "🪲 Bug 🪲";
    }
    padding: scale(4px);
}
:global([data-theme*="2k3"]){
    .premium::before{
        // TODO: After I add colored icons, I can remove the text gradients
        color:transparent;
        background-image: linear-gradient(gold,white,gold,orange);
        background-clip: text;
    }
    .v[data-mode=block]{
        &.premium::before{
            background-image: linear-gradient(90deg, transparent scale(16px), white scale(16px), white scale(116px), transparent scale(116px)), linear-gradient(gold,white,gold,orange);
        }
    }
}


.v[data-mode=normal] :global(p:first-child){
    display:inline;
}
.v[data-mode=normal] :global(p:last-child){
    margin-bottom: 0;
}

.v[data-mode=inline]{
    display:inline-block;
}

.v.small{
    @include font10;
}

</style>

{#if display}
    <svelte:element this={element} class="drop-shadow">
        <svelte:element this={element} class="v" class:premium={premium==='?'} class:bug={bug} class:basic={premium===undefined&&!bug} class:small={small}
        data-mode={block?"block":inline?"inline":"normal"} data-radius=5 data-version={v}>
            {#if v}<small class="version-number">v{v}</small>{/if}
            {#if block}<br>{/if}
            <slot />
        </svelte:element>
    </svelte:element>
{:else}
    <slot name="hidden" />
{/if}