<script lang="ts">
    export let reverse = false;
</script>

<style lang="scss">
    div{
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-start;
    }
    div.reverse{
        flex-direction: row-reverse;
    }
    @media(max-width:$breakpoint-mobile){
        div{
            flex-wrap: wrap;
        }
    
    }
</style>

<div class:reverse={reverse}>
    <slot/>
</div>