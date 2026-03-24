<script lang="ts">
    import Code from "$lib/components/Code.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";

</script>

<PageTitle title="Connected Maps"/>

<p>
    Maps can be connected to other maps, which will cause both maps to be rendered at the same time.
</p>
<p>
    Currently there is no seamless transition to the connected maps, however transfers to connected maps should be faster since the connected map is already loaded.
</p>

<img src="https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:kj5nhnx6q5am7qjfvuefbydw/bafkreicekilgpdq5glwwp6orwccpguo2loymusb26lstvv333kiskt2r2e@jpeg" alt="">

<p>
    Usage Example:
</p>
<Code>
    connect(Map002|0,13,0)
</Code>
<p>
    The first parameter is the map id (not the map name). It should be formatted as <code>MapXXX</code>, with the word "Map" and three digits. This should match the name of the Maps's json file in the data folder.
</p>
<p>
    The three numbered parameters are x, y, and z offsets. They determine the position of the connected map relative to the current map.
</p>

<hr>

<p>
    Connect North: the y offset should be the negative height of the connected map.
</p>
<p>
    Connect East: the x offset should be the width of the current map.
</p>
<p>
    Connect South: the y offset should be the height of the current map.
</p>
<p>
    Connect West: the x offset should be the negative width of the connected map.
</p>