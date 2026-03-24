<script lang="ts">
    import Menu from "./Menu.svelte";
    export let value:string;
    export let direction:'up'|'down'='down';
    export let align:'left'|'right'|'center'='center';
</script>
<Menu {direction} {align}>
    <span slot="open" data-radius=1>
        {value}
    </span>
    <slot/>
</Menu>

<style lang="scss">
    span{
		@include fontmonospace();
		background-color: #0006;
		border: scale(1px) solid white;
        padding: 0 scale(2px);
    }
</style>