<script lang="ts">
    export let grow = false;
    export let wrap = false;
    export let flex = '';
    export let style = '';
</script>

<style lang="scss">
    .col{
        display:flex;
        flex-direction:column;
    }
    .col.grow{
        flex-grow:1;
    }
    .col.wrap{
        flex-wrap:wrap;
    }
</style>
<div class="col" class:grow={grow} class:wrap={wrap} style="{flex?`flex:${flex};`:''}{style}"><slot/></div>