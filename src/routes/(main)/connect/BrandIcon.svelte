<script lang="ts">
    export let source:'itchio'|'patreon'|'bluesky'|'discord';
    export let size:number|`${number}`=16;

    const props = {
        style:$$props.style
    }
</script>

<span style="--size:{size}px">
{#if source === 'itchio'}
    <svg inline-src="brands/itchio/logo" class="itchio" {...props} data-radius=1 />
{:else if source === 'patreon'}
    <svg inline-src="brands/patreon/logo" class="patreon" {...props} data-radius=1 />
{:else if source === 'bluesky'}
    <svg inline-src="brands/bluesky/logo" class="bluesky" {...props} data-radius=1 />
{:else if source === 'discord'}
    <svg inline-src="brands/discord/logo" class="discord" {...props} data-radius=1 />
{/if}
</span>

<style lang="scss">
    @import 'brand-colors';
    svg{
        width:scale(var(--size));
        height:scale(var(--size));
        box-sizing: border-box;
        padding:scale(1px);
    }
    svg.patreon{
        background-color: $brand-patreon-black;
        color:$brand-patreon-white;
    }
    svg.itchio{
        background-color: $brand-itchio-itchy-carnation;
        color: white;
    }
    svg.bluesky{
        background-color: $brand-bluesky-blue;
        color: white;
    }
    svg.discord{
        background-color: $brand-discord-blurple;
        color: white;
    }
</style>