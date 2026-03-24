<script lang="ts">
    export let grow = false;
    export let wrap = false;
    export let flex = '';
    export let style = '';
</script>

<style lang="scss">
    .row{
        display:flex;
    }
    .row.grow{
        flex-grow:1;
    }
    .row.wrap{
        flex-wrap:wrap;
    }
</style>
<div class="row" class:grow={grow} class:wrap={wrap} style="{flex?`flex:${flex};`:''}{style}"><slot/></div>