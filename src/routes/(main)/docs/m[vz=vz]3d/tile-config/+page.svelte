<script>
    import Anchor from "$lib/components/Anchor.svelte";
    import Button from "$lib/components/Button.svelte";
    import Code from "$lib/components/Code.svelte";
    import Link from "$lib/components/Link.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Version from "$lib/components/Version.svelte";
    import GlowAlphaFunctions from "../shared/GlowAlphaFunctions.svelte";
    import OffsetFunctions from "../shared/OffsetFunctions.svelte";
    import ParameterList from "../shared/ParameterList.svelte";
    import RotationFunctions from "../shared/RotationFunctions.svelte";
    import ShapeFunction from "../shared/ShapeFunction.svelte";

    export let data;
    let premium = data.premium;
</script>

    
<PageTitle title="Tile Configuration"/>

<Anchor h2 id="textures">Texture Functions</Anchor>
<p>
    A tile can be configured to have different textures for the top, bottom, and sides.
    <br>A special inside texture will be used if the tile has <a href="#depth">depth</a> configured.
    <br>Different texutres can also be used for the north, south, east, and west sides.
    <br>If unset, the inside texture will be the same as the side texture, and the side and bottom textures will be the same as the top texture.
</p>
<p>
    Each texture can be set with the respective <code>top()</code>, <code>side()</code>, <code>bottom()</code>, <code>inside()</code>, <code>north()</code>, <code>south()</code>, <code>east()</code>, and <code>west()</code> function.
    <code>Texture()</code> can be used to set both the top and side texture. at the same time.
</p>

<p>A texture is defined using the following list of parameters:</p>
<ParameterList>
img,x,y,w,h|alpha|glow,glowintensity|anim:animx,animy
</ParameterList>

<p>
    The img parameter should be either a tileset image name (A1-5, B, C, D, E) or a custom image name. Custom images are loaded form the img/{data.pluginName.toUpperCase()} folder.
    Filenames should include the file extension.
    If the image path starts with a slash, it will be loaded relative to the project root folder instead. Example: <code>texture(/img/tilesets/Inside_B.png)</code>
</p>

<p>
    The x and y parameters can be prefixed with + or - to use relative values
    <small>(in other parts of the plugin + is required to indicate relative because - means negative, but there are no negative tile coordinates so it's unambiguous here)</small>
</p>

<p>
    The alpha parameter can be used to make the texture partially transparent. Or, you can set alpha to 1 to turn on alpha blending.
    <br>Examples: <code>texture(|1), texture(alpha:0.5)</code>
</p>

<p>
    The glow parameter will add an emissive color to make the texture glow in the dark. The effect works well for lava and other things that should emit light.
    <br>Examples: <code>texture(||1), texture(glow:red)</code>
</p>
<Version {premium}>
    <p>
        A second parameter can be provided to control the intensity of the premium glow effect.
    </p>
    
    <br>Examples: <code>texture(||1,0), texture(glow:red,1)</code>
    <Version block bug>
        Due to a bug the second parameter seems to not work for tile textures... Glow intensity will always be 1.
        <br> For now, use the <a href="#glow">glow function</a> instead if you need to set the glow intensity.
    </Version>
</Version>


<p>
    anim is an alias for animx and can be used with a colon to jump to that parameter.
    <br> Animx and animy are used for defining custom animated tiles.
    The number supplied to animx and animy will be the offset used by the animation.
    The final offset will be equal to the anim offset times the current frame.
    <br>Animx has frames 0,1,2,1 (like water animations), while animy has frames 0,1,2 (like waterfall animations).
    <br>Examples: <code>texture(|||1,0), texture(anim:0,1)</code>
</p>

<Anchor h2 id="ceiling">Ceiling Function</Anchor>
<p>
    Overrides the <Link href="map-config#ceiling">ceiling config set for the map</Link> for this tile. This only works for bottom layer tiles.
</p>

<Anchor h2 id="height">Height Function</Anchor>
<p>
    The height function, as the name implies will set the height for a tile.
    Tiles will be stacked on top of tiles layered below them, so if you configure height on both an upper layer and lower layer tile,
    their heights will be effectively combined.
</p>
<Code>height(<samp title="number">n</samp>)</Code>

<Anchor h2 id="depth">Depth Function</Anchor>
<p>
    The depth function will set the depth of a tile. Depth is like a negative height,
    the tile's effective height will be its own height minus its depth. If there is a tile on a layer below the tile with depth,
    it will "cut a hole" in that tile, reducing that tile's height instead.
    <br>The primary use is to create pits, bodies of water, and other holes in the ground.
    The side texture of the tile will use the "inside" texture for the part of the height caused by the depth.
</p>
<Code>depth(<samp title="number">n</samp>)</Code>

<Anchor h2 id="fringe">Fringe Function</Anchor>
<p>
    The fringe function will add a gap between the tile and the tile below it, effectively making the tile appear to be floating.
    The player can walk under the tile if the gap is large enough.
</p>
<Code>fringe(<samp title="number">n</samp>)</Code>

<Anchor h2 id="float">Float Function</Anchor>
<p>
    The float function will set a distance above the tile that boats and ships should float above the tile.
    This is useful if you used the depth function to create a body of water and want boats to float near the top of the water instead of at the bottom.
</p>
<Code>float(<samp title="number">n</samp>)</Code>

<ShapeFunction subject="tile"/>

<RotationFunctions subject="tile"/>

<OffsetFunctions  subject="tile" {premium}/>

<Anchor h2 id="tileoffset">Tile Offset Function</Anchor>
<p>
    The tile offset function will offset the tile's actual position on the map.
    This is used by default for star tiles to move them one tile down onto the tile below them.
</p>
<Code>tileoffset(<samp title="number">x</samp>,<samp title="number">y</samp>)</Code>

<Anchor h2 id="slope">Slope Function</Anchor>
<p>
    The slope sets the tile shape to slope and configures other slope-related settings.
</p>
<p>parameter list:</p>
<ParameterList>height,direction|top,side|texrot</ParameterList>

<p>
    The height parameter is the height of the slope. The direction parameter is the direction the slope is facing.
    <br>Direction can be <code>n</code>, <code>s</code>, <code>e</code>, <code>w</code>, <code>ne</code>, <code>se</code>, <code>sw</code>, <code>nw</code>.
    <br>The diagonal directions can be appended with <code>i</code> or <code>o</code> to indicate they're an inner or outer corner, for example <code>nei</code> or <code>neo</code>.
    <br>Direction can also be set up with the shadow pen <span class="TODO">link to mapping page</span>.
    <br>Examples: <code>slope(2,e), slope(2,e), slope(2,swi)</code>
</p>

<p>
    The top and side parameters are the textures used for the top and side of the slope. If these aren't set, it will use the normal top and side textures for the tile.
    <br>The texture parameters should be wrapped with <code>{'{}'}</code> to group them into a single parameter.
    <br>Example: <code>{'slope(2,top:{A4,0,0},side:{A4,0,1})'}</code>
</p>

<p>
    The texrot parameter is whether the texture should be rotated to match the slope's direction. For regular tiles this is true by default, but for autotiles it's false.
    <br>Example: <code>slope(2||false), slope(2,texrot:true)</code>
</p>

<Anchor h2 id="pass">Pass Function</Anchor>
<p>
    The pass function can be used to alter the passability of a tile. Possible values are <code>pass(o)</code> meaning you can walk on the tile, <code>pass(x)</code> meaning you cannot walk on the tile, and <code>pass(*)</code> meaning you can walk through the tile.
</p>

<Anchor h2 id="width">Width Function</Anchor>
<p>
    The width function can be used to set the width of a tile. This can be useful for creating pillars that are thicker or thinner than a normal tile.
</p>
<Code>width(<samp title="number">n</samp>)</Code>


<Anchor h2 id="slant">Slant Function</Anchor>
<p>
    The slant function can be used to give the walls of the tile a slight angle instead of being perfectly vertical.
    The exact angle will vary depending on the height of the tile, because the value provided is the extra vertical distance the bottom of the tile will occupy.
</p>
<Code>width(<samp title="number">n</samp>)</Code>

<Version block {premium}>
    <Anchor h2 id="shadow">Shadow Function</Anchor>
    <p>Whether the tile should cast shadows, true by default.</p>
    <Code>shadow(<samp>true/false</samp>)</Code>
</Version>


<GlowAlphaFunctions subject="tile" {premium}/>

<!-- ambient function left undocumented as it is kind of non-useful and might not be re-implemented in the rewrite -->

<Version block {premium}>

<Anchor h2 id="model">Model Function</Anchor>
<p>Imports a 3D model for the tile.</p>
<p>For more information about importing 3D models into {data.pluginName.toUpperCase()}, see <Link href="modeling#model-import">Importing Models</Link>.</p>

<Anchor h2 id="mesh">Mesh Function</Anchor>
<p>Constructs a mesh for the tile based on a mesh string.</p>
<p>For more information about mesh strings, see <Link href="modeling#mesh">Mesh Building</Link></p>

<p>When using model or mesh, you should use the <Link href="event-config#scale">Scale Function</Link> to set the size instead of <a href="#width">width</a> and <a href="#height">height</a>.</p>
</Version>
