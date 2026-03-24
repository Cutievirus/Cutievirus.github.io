<script lang="ts">
    export let link:string|undefined = undefined;
    export let action:string|undefined = undefined;

</script>

<li>
    {#if link}
        <a href="{link}"><slot/></a>
    {:else if action}
        <form {action} method="POST">
            <button class="text-gradient"><slot/></button>
        </form>
    {:else}
        <slot/>
    {/if}
</li>

<style lang="scss">
    button{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    a, button{
        padding: 0 scale(4px);
        display: block;
        text-align: left;
        width: 100%;
        @include font12();
        font-weight: bold;
    }
</style>