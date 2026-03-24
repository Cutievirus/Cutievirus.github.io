<script>
    import Anchor from "$lib/components/Anchor.svelte";
    import Code from "$lib/components/Code.svelte";
    import Link from "$lib/components/Link.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Version from "$lib/components/Version.svelte";
    import ParameterList from "../shared/ParameterList.svelte";

    export let data;
    let premium = data.premium;
</script>

<PageTitle title="Map Configuration"/>

<Anchor h2 id="light">Light Function</Anchor>
<p>
    The light function (and its alias the ambient function) sets the ambient light color for the map.
</p>

<p>The color parameter can be a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color">hex color</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color">named color</a>, or any other valid <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">css color</a>.</p>

<Code>light(<samp>color</samp>)
ambient(<samp>color</samp>)</Code>

<Version block {premium}>
    <Anchor h2 id="sun">Sun Function</Anchor>
    <p>
        The sun function sets the color and angle of the sunlight for the map.
    </p>
    Parameters:
    <ParameterList>color|yaw,pitch</ParameterList>
    Examples:
    <Code>sun(orange), sun(white|45,45)</Code>
</Version>

<Anchor h2 id="fog">Fog Function</Anchor>
<p>
    The fog function sets the color and distance of the fog for the map.
</p>
Parameters:
<ParameterList>color|near,far</ParameterList>
<p>Color is the color of the fog, and near and far are the distances where the fog starts and ends.</p>

<Anchor h2 id="camera">Camera Function</Anchor>
<p>
    The camera function sets various properties of the camera when the map is loaded.
</p>
Parameters:
<ParameterList>yaw,pitch|dist|height|mode</ParameterList>
<p>
    Yaw and pitch are the initial camera angles. Yaw is rotation side to side, and pitch is up and down.
</p>
<p>
    Dist is the distance from the camera to the character. Set this to zero for 1st person mode.
</p>
<p>
    Height is a vertical offset from the character's position that the camera look at. The purpose of this is so the character's head or body can be in the center of the screen rather than their feet.
</p>
<p>
    Mode is the initial camera mode. The options are "perspective", "orthographic", "2d". You only need to specify the first letter of the mode.
</p>
Examples:
<Code>camera(0,70|5|0.5|p)
camera(45,60|10|0|o)
camera(mode:2d)</Code>

<Anchor h2 id="ceiling">Ceiling Function</Anchor>
<p>
    The ceiling function sets up a ceiling for the map. This is intended for interior maps.
</p>
<p>
    The ceiling function is a <Link href="tile-config#textures">Texture Function</Link> with an extra parameter group inserted as the second parameter group.
</p>
Parameters:
<ParameterList>img,x,y,w,h|height,backface|alpha|glow,glowintensity|anim:animx,animy</ParameterList>
<p>
    The new parameters are height and backface. Height is the z position the ceiling will be at.
    <br>Backface is whether the ceiling mesh should be double sided or not.
</p>
Example: <code>ceiling(A4,0,0|2,false)</code>

<Anchor h2 id="edge">Edge Function</Anchor>
<p>
    The edge function controls how the edges of the map will be treated.
</p>
<p>
    <code>edge(true)</code> walls around the edge of the map will be rendered.
    <br><code>edge(false)</code> walls around the edge of the map will not be rendered.
    <br><code>edge(clamp)</code> tiles along the edge of the map will be repeated in areas outside the map.
    You can also specify a number to specify the number of tiles near the edge that will be repeated.
    For example, <code>edge(clamp,2)</code> will repeat the 2 tiles around the edge of the map.
</p>

<Anchor h2 id="base">Base Function</Anchor>
<p>
    Sets a base height for the map. The base height will be added to the height of all tiles.
</p>
<Code>base(<samp title="number">n</samp>)</Code>

<Version block {premium}>
    <Anchor h2 id="bloom">Bloom Function</Anchor>
    <p>
        Adjusts the bloom effect for the map.
    </p>
    <p>
        Most postprocessing effects are adjusted using the <Link href="plugin-commands#set">Set Command</Link>,
        but bloom settings might need to be adjusted for each map.
    </p>
    Parameters:
    <ParameterList>intensity,threshold,radius</ParameterList>

    <Anchor h2 id="skybox&skyball">Skybox and Skyball Functions</Anchor>
    <Anchor h3 id="skybox">Skybox Function</Anchor>
    <p>
        Sets up a skybox for the map.
    </p>
    Parameters:
    <ParameterList>default,top,bottom,north,west,south,east|index,alpha|autorotate:aryaw,arpitch,arroll|rotation:yaw,pitch,roll</ParameterList>
    <p>You can use the skybox function multiple times with different indexes to set up different layers.</p>

    <Anchor h3 id="skyball">Skyball Function</Anchor>
    <p>
        The skyball function sets up a skyball for the map.
    </p>
    Parameters:
    <ParameterList>texture,repeat|index,alpha|autorotate:aryaw,arpitch,arroll|rotation:yaw,pitch,roll</ParameterList>
    <p>For more info about skyboxes and skyballs, see the <Link href="plugin-commands#skybox&skyball">Skybox and Skyball Commands</Link>.</p>
</Version>

<Anchor h2 id="enable">Enable/Disable Function</Anchor>
<p>
    Enables or disables 3D rendering for the map.
</p>
<Code>enable()
disable()</Code>
