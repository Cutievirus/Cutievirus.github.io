<script lang="ts">
    import Anchor from "$lib/components/Anchor.svelte";
    import Img from "$lib/components/Img.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";
    export let data;
</script>

<PageTitle title="LUT Textures"/>

<p>
    "LUT" is an abbreviation for "Look Up Table". LUT textures are used to map from one color to another.
</p>
<p>
    You can use LUT textures to fine-tune and adjust the colors in your game, or you can use them to create some cool effects.
</p>
<p>When defining a texture, you can specify the <code>lut</code> parameter to use a LUT texture.</p>
<p>
    Example: <code>texture(lut:lut-inverted)</code>
</p>
<p>
    This will load the <code>lut-inverted.png</code> image from the {data.pluginName.toUpperCase()} folder. The file extension is optional and will default to png.
</p>
<Anchor h2 id="example-luts">Example LUT Textures</Anchor>
<p>
    Default LUT <small>(no filter)</small>
    <br><Img src="/img/lut/lut.png" alt="Default LUT" width=256 height=16 />
</p>
<p>
    Inverted LUT
    <br><Img src="/img/lut/lut-inverted.png" alt="Inverted LUT" width=256 height=16 />
</p>
<p>
    Posterized LUT
    <br><Img src="/img/lut/lut-posterized.png" alt="Posterized LUT" width=256 height=16 />
</p>
<p>
    High Contrast LUT
    <br><Img src="/img/lut/lut-highcontrast.png" alt="High Contrast LUT" width=256 height=16 />
</p>
<p>
    Also see Babylon's documentation on <a href="https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/usePostProcesses/#color-correction" target="_blank">Color Correction</a>. 
</p>