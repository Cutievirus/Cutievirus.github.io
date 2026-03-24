<script>
    import Code from "$lib/components/Code.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";

    export let data;
</script>

<PageTitle title="Map Texture"/>

<p>
    The map texture mode can be used to achieve a technique similar to parallax mapping, where a texture is used for the entire map, and tiles are mapped to it according to their x y z coordinates.
</p>
<img src="https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:kj5nhnx6q5am7qjfvuefbydw/bafkreib4kr5o75rkyidzerc73e7255sxumesmm7cwmeeh5dudggdmc4nd4@jpeg" alt="">

<p>
    Usage Example:
</p>
<Code>
    top(image.png,-47,-54|tile:map)
</Code>
<p>
    <code>image.png</code> will be loaded from the {data.pluginName.toUpperCase()} folder.
</p>
<p>
    <code>-47</code> and <code>-54</code> are the offset for the texture. This means tile 0,0 will be mapped to -47,-54 on the texture, or in other words, 0,0 on the texture will be tile 47,54.
</p>
<p>
    <code>tile:map</code> activates the "map" tiling mode, which is what enables the map texture feature.
</p>