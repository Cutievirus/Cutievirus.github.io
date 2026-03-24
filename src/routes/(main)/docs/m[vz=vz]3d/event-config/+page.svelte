<script>
    import Anchor from "$lib/components/Anchor.svelte";
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

<PageTitle title="Event Configuration"/>

<Anchor h2 id="texture">Texture Function</Anchor>

<p>The texture function will replace the texture for the event. For more information about texture functions, see <Link href="tile-config#textures">Texture Functions</Link>.</p>

<Anchor h2 id="elevation">Elevation Function</Anchor>

<p>Sets the elevation for the character. Characters with non-zero elevation will fly above the ground with the specified height.</p>
<Code>elevation(<samp title="number">n</samp>)</Code>

<Anchor h2 id="z">Z Function</Anchor>
<p>
    Sets the character's z position to the specified value. Their z position will be locked at this value.
    Good for events that need to be at a specific height and don't need to move, such as wall decorations.
</p>
<Code>z(<samp title="number">n</samp>)</Code>

<ShapeFunction subject="character"/>

<RotationFunctions subject="character"/>

<OffsetFunctions subject="character" {premium}/>

<Anchor h2 id="pos">Pos Function</Anchor>
<p>
    Changes the character's starting position to the specified x, y, and z values.
    Note that this currently does nothing when set with the <Link href="plugin-commands#configure">Configure Command</Link>,
    and only applies the position when the event is first created or when changes event pages.
</p>
<Code>pos(<samp title="number">x</samp>,<samp title="number">y</samp>,<samp title="number">z</samp>)</Code>
<p>
    If you only need to change the starting z position, use: <code>pos(z:<samp title="number">n</samp>)</code>
</p>

<Anchor h2 id="scale">Scale Function</Anchor>
<p>
    Scales the character by the specified amount. The scale is a multiplier, so a scale of 1 will be the normal size, 2 will be twice as large, and 0.5 will be half as large.
</p>
<p>
    Takes up to three arguments: x, y, and z. 
    <br>If only one argument is provided, the character will be scaled uniformly in all dimensions.
    <br>If two arguments are provided, 3D shapes will have their x and y dimensions scaled by the first argument, and their z dimension scaled by the second argument,
    while 2D shapes will simply be scaled by the two dimensions they possess (either x and y or x and z).
</p>
<Code>scale(<samp title="number">x</samp>,<samp title="number">y</samp>,<samp title="number">z</samp>)</Code>

<Anchor h2 id="bush">Bush Function</Anchor>
<p>
    Whether the character should have the bush alpha texture applied to it when standing on a bush tile.
</p>
<Code>bush(<samp>true/false</samp>)</Code>

<Anchor h2 id="shadow">Shadow Function</Anchor>
<p>
    Controls shadow settings for the character.
</p>
Parameters:
<ParameterList>size,dist{#if premium}|3d{/if}</ParameterList>
<p>Size is the size of the blob shadow (a mesh positioned under the character that uses the shadow texture). You can set this to zero to disable the blob shadow.</p>
<p>Dist is the max elevation that the blob shadow will be visible. The shadow will become smaller and more faded the further it is from the character.</p>
<Version {premium}>
<p>The 3D parameter controls whether the character should cast dynamic shadows.</p>
<p><code>shadow(0)</code> will disable the blob shadow while keeping dynamic shadows, while <code>shadow(3d:false)</code> will disable only the dynamic shadows. <code>shadow(false)</code> will disable all shadows.</p>
</Version>
Examples:
<Code>shadow(true), shadow(false), shadow(0), shadow(2,4){#if premium}, shadow(3d:false){/if}</Code>

<GlowAlphaFunctions subject="character" {premium}/>

<Anchor h2 id="lamp">Lamp Function</Anchor>
<p>The Lamp function sets up a point light on the character and changes the properties of that light.</p>
<p>Parameters:</p>
<ParameterList>color,intensity,range{#if premium}|shadow{/if}</ParameterList>
<p>
    Color is the color of the light, intensity is the brightness of the light, and range is the distance the light will reach.
    <Version {premium}>
        Shadow controls whether the light will create dynamic shadows.
    </Version>
</p>
Examples:
<Code>lamp(white,1,5){#if premium}
lamp(white,1,5|shadow:true){/if}</Code>

<p>
    The LampOffset function sets the position of the lamp relative to the character.
</p>
<Code>lampoffset(<samp title="number">x</samp>, <samp title="number">y</samp>, <samp title="number">z</samp>)</Code>
Example: <code>lampoffset(z:1.5)</code>

<Anchor h2 id="flashlight">Flashlight Function</Anchor>
<p>The Flashlight function sets up a spotlight on the character and changes the properties of that light.</p>
<p>Parameters:</p>
<ParameterList>color,intensity,range,angle|dir:yaw,pitch{#if premium}|shadow{/if}</ParameterList>
<p>Angle is the angle of the light cone.</p>
<p>
    Yaw and Pitch are the direction the light is pointing. If absent the light will face the same direction as the character.
    <br>Yaw can be a relative value by prefixing it with +.
</p>
<Version {premium}>
    <p>Shadow controls whether the light will create dynamic shadows.</p>
</Version>
Examples:
<Code>flashlight(white,1,5,45)
flashlight(white,1,5,45|pitch:12)
flashlight(white,1,5,45|+90,0){#if premium}
flashlight(white,1,5,45|shadow:true){/if}</Code>

<p>There are also FlashlightYaw and FlashlightPitch functions that set just the yaw and pitch values.</p>
<Code>flashlightyaw(+90), flashlightpitch(12)</Code>

<p>
    The FlashlightOffset function sets the position of the lamp relative to the character.
</p>
<Code>flashlightoffset(<samp title="number">x</samp>, <samp title="number">y</samp>, <samp title="number">z</samp>)</Code>
Example: <code>flashlightoffset(z:1.5)</code>

<p>
    The LightOffset function sets the lamp offset and flashlight offset at the same time.
</p>
<Code>lightoffset(<samp title="number">x</samp>, <samp title="number">y</samp>, <samp title="number">z</samp>)</Code>

<Anchor h2 id="dirfix">DirFix Function</Anchor>
<p>
    If set to true, the dirfix function will prevent the character sprite's from changing direction based on the camera angle.
</p>

<Anchor h2 id="gravity">Gravity Function</Anchor>
<p>
    The gravity function will set the fall speed of the event.
    <br>Example: <code>gravity(10)</code>
</p>

<Anchor h2 id="platform">Platform Function</Anchor>
<p>
    Controls whether other characters can walk on top of the character.
</p>
<Code>platform(<samp>true/false</samp>)</Code>

<Anchor h2 id="collide">Collide Function</Anchor>
<p>
    Sets the character's collision height.
    <br>If set to true, automatically determines the collision height.
    <br>If set to false, it will behave the same as <code>collide(0),platform(false)</code>.
    <br>Example: <code>collide(1.5), collide(true), collide(false)</code>
</p>

<Anchor h2 id="trigger">Trigger Function</Anchor>
<p>
    Sets the range of heights the event can be triggered from.
</p>
Parameters:
<ParameterList>up,down</ParameterList>
<p>
    By default, up is the same as the collision height and down is zero.
    <br>Example: <code>trigger(2,0)</code>
</p>

<Anchor h2 id="pass">Pass Function</Anchor>
<p>
    Alters the passability of the character. This is actually a shorthand function for the <a href="#collide">collide</a> and <a href="#platform">platform</a> functions.
</p>
<p>
    <code>pass(o)</code> sets <code>platform(true)</code>, and if collide isn't set to a number it sets <code>collide(true)</code>.
    <br><code>pass(x)</code> sets <code>platform(false)</code> and <code>collide(true)</code>.
    <br><code>pass(*)</code> sets <code>platform(false)</code> and <code>collide(false)</code>.
</p>



<Version block {premium}>
    <Anchor h2 id="model">Model Function</Anchor>
    <p>Imports a 3D model for the character.</p>
    <p>For more information about importing 3D models into {data.pluginName.toUpperCase()}, see <Link href="modeling#model-import">Importing Models</Link>.</p>
    
    <Anchor h2 id="mesh">Mesh Function</Anchor>
    <p>Constructs a mesh for the character based on a mesh string.</p>
    <p>For more information about mesh strings, see <Link href="modeling#mesh">Mesh Building</Link></p>
    
</Version>

