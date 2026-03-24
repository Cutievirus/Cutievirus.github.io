<script lang="ts">
    export let src:string;
    export let alt = "";
    export let width:number|`${number}`;
    export let height:number|`${number}`;
    $:{
        if(isFinite(+width))width=width+"px";
        if(isFinite(+height))height=height+"px";
    }

    
    export let radius:number|`${number}`|undefined=undefined;

    let naturalWidth = 0;
    let naturalHeight = 0;
</script>

<style lang="scss">
    img{
        width:scale(var(--width));height:scale(var(--height));
        vertical-align: bottom;
        @include drop-shadow;
    }
    :global(a) img{
        filter:none;
    }
</style>


<img {src} {alt} {width} {height} bind:naturalWidth bind:naturalHeight
class={$$props.class} style="--width:{width};--height:{height};{$$props.style}"
data-radius={radius}>

