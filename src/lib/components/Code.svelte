<script lang="ts">
    export let code:HTMLElement|undefined=undefined;
</script>

<style lang="scss">
code{
    @include fontmonospace;
    background: linear-gradient(#0006,#0008);
    padding: scale(8px);
    display:block;
    border: scale(1px) solid white;
}

pre{
    white-space: pre-wrap;
}
</style>

<pre><code bind:this={code} data-radius=1><slot/></code></pre>