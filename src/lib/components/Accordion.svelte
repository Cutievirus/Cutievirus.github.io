<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from 'svelte';

    export let id:string;
    export let open:boolean=false;
    let isOpen = open;

    let details:HTMLElement,summary:HTMLElement;

    let timer = 0;
    const toggle = async (e:MouseEvent)=>{
        e.preventDefault();
        open=true;
        isOpen = !isOpen;
        await new Promise(r=>requestAnimationFrame(r));
        details.style.maxHeight = (isOpen?details:summary).scrollHeight+'px';
        if(timer) window.clearTimeout(timer);
        timer=window.setTimeout(()=>open=isOpen,400);
    }

    onMount(async ()=>{
        await document.fonts.ready;
        details.style.maxHeight = (isOpen?details:summary).scrollHeight+'px';
        //details.style.minWidth = summary.scrollWidth+'px';
    });

    function calculateHeight(){
        details.style.maxHeight = (isOpen?details:summary).scrollHeight+'px';
    }
</script>

<svelte:window on:resize={calculateHeight} />

<style lang="scss">
    details{
        transition: max-height 400ms ease-out;
        overflow: hidden;
    }

    details>summary{
        list-style-type: '';
        padding: scale(1px) 0;
        font-weight: bold;
        cursor: pointer;
        user-select: none;
        @include drop-shadow;
        position:relative;
        
    }
    details>summary::after{
        content:"";
        border-bottom: 1px double #fff6;
        display:block;
        :global([data-theme*="2k3"]) &{
            border-bottom: scale(1px) solid currentcolor;
        }
    }
    details>summary::before{
        content: "▶";
        display: inline-block;
        width: 1em;
        text-align: center;
        margin-right: 0.5em;
        transition: transform 200ms ease-out;
    }
    details:not(.browser)[open]>summary::before,
    details.browser.isOpen>summary::before{
        transform: rotate(90deg);
    }

    hr{
        margin:0;
        margin-bottom: scale(8px);
    }

    details div>:global(ul){
        list-style-type: "└ ";
    }

</style>

<details bind:this={details} {open} class:isOpen class:browser>
    <summary bind:this={summary} {id} on:click={toggle}><slot name=summary/></summary>
    
    <div>
        <slot/>
    </div>

</details>
<hr>