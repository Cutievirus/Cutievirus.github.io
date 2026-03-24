<script lang="ts">
    import { onMount } from 'svelte';

    export let index:number|string;
    export let group:number|string;
    export let checked:boolean=false;

    let radio:HTMLInputElement;
    onMount(()=>{
        if(location.hash){
            const target = document.getElementById(location.hash.slice(1));
            if(target===radio){
                radio.checked=true;
            }
        }
        
    });
</script>

<style lang="scss">

label{
    float:left;
    z-index:1;
    position:relative;
    border: 1px solid black;
    background:white;
}
label:has(:checked),
:global(.tab-box):not(:has(:checked)) label:has(:target),
:global(.tab-box):not(:has(:checked)):not(:has(:target)) label:first-of-type{
    border-bottom: 1px solid white;
    &+hr+.content{
        display:block;
    }
}
label:has(:focus){
    //outline: 4px solid $accent-color;
    border-bottom: 1px solid white;
    z-index: 2;
}
input{
    position:absolute;
    display:block;
    width:100%;
    height:100%;
    opacity: 0;
}

hr{
    height: 0;
    flex-basis: 100%;
    order:1;
    border: 0;
}

.content{
    display:none;
    clear:both;
    order:2;
    border: 1px solid black;
    width: 100%;
    margin-top:-1px;
}
</style>

<label for="tab-{group}-{index}" class="tab-label">
    <input type="radio" id="tab-{group}-{index}" name="tab-{group}" {checked} bind:this={radio}>
    <slot name="label"/>
</label>
<hr>
<div class="content">
    <slot/>
</div>