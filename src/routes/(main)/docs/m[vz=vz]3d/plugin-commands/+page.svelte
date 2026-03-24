<script lang="ts">
    import Anchor from "$lib/components/Anchor.svelte";
    import Code from "$lib/components/Code.svelte";
    import Link from '$lib/components/Link.svelte';
    import PageTitle from "$lib/components/PageTitle.svelte";
    import Version from "$lib/components/Version.svelte";

    export let data;
    const premium = data.premium;
    let prefix:string;
    $:prefix=data.pluginName==="mv3d"?"mv3d ":"";

</script>
<PageTitle title="Plugin Commands"/>

    {#if data.pluginName==="mz3d"}
<p>
    RPG Maker MZ adds a new UI for plugin commands. MV3D-style plugin commands can still be used using the "Legacy Command" plugin command.
    With a few exceptions, the commands are largely the same as in MV3D. The main difference is that the <code>mv3d</code> prefix is omitted.
    <br>Most of the information on this page assumes you are using the legacy command format.
</p>
    {/if}

<p>Some commands (like lamp and flashlight) act on a character. By default the target character will be the current event. You can define your own target by providing a target string. A target string is the "@" character followed by an identifier.
    {#if data.pluginName==="mv3d"}
        The target string should be placed directly after the "mv3d" prefix as the second word in the command.
    {:else}
        The target string should be provided as the first word in the command.
    {/if}
</p>
Example:
<Code>{prefix}@target rest of the command</Code>
<p>Valid targets:</p>
<ul>
    <li>@p or @player - targets $gamePlayer</li>
    <li>@e0, @s, or target string omitted - targets the current event</li>
    <li>@e1, @e2, @e3, @e25 etc - targets event with specified id</li>
    <li>@f0, @f1, @f2 - targets first, second, third follower, etc.</li>
    <li>@v0, @v1, @v2 - targets boat, ship, airship</li>
</ul>


<p>
    Many commands can take a time parameter at the end. The time parameter is in seconds. If omitted, the time parameter defaults to 1 second.
</p>

<p>
    Some numeric parameters can be prefixed with + to be set relative to the current value.
</p>
Example:
<Code>{prefix}camera yaw +45</Code>

<Anchor h2 id="camera">Camera Commands</Anchor>

<p>
    The Camera Pitch, Yaw, and Roll commands rotate the camera around the camera target.
    <br>The Camera Dist command sets the distance from the camera target.
    <br>The Camera Height command sets a height offset from the camera target.
    <br>The Camera Zoom command alters the FOV to zoom in or out.
    <br>The Camera Pan command offsets the x and y position from the camera target.
</p>

<p>
    The following camera commands can have the word "camera" omitted and still work as a command.
</p>

<Code>{prefix}<span title="optional word">camera</span> pitch <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}<span title="optional word">camera</span> yaw <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}<span title="optional word">camera</span> roll <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}<span title="optional word">camera</span> dist <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}<span title="optional word">camera</span> height <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}<span title="optional word">camera</span> zoom <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}<span title="optional word">camera</span> pan <samp title="number">x</samp> <samp title="number">y</samp> <samp title="time">t</samp></Code>

<p>
    The Camera Target command sets the camera target to a character. The camera will move with the camera target.
</p>
<Code>{prefix}camera target <samp title="target string">@t</samp> <samp title="time">t</samp></Code>


<p>
    The Camera Track command sets the camera to track a character, automatically rotating the camera to face the character.
    Typically you will want to use this in conjunction with the Camera Target command to move the camera away from the player, then track the player.
    <br>There are additional "Track Pitch" and "Track Yaw" commands which track only the pitch and yaw respectively.
</p>

<Code>{prefix}camera track <samp title="target string">@t</samp> <samp title="time">t</samp>
{prefix}camera track pitch <samp title="target string">@t</samp> <samp title="time">t</samp>
{prefix}camera track yaw <samp title="target string">@t</samp> <samp title="time">t</samp>
{prefix}camera track off</Code>

<p>
    The Camera Mode command sets the camera mode between perspective, orthographic, and 2D. Only the first letter is required, so "p", "o", and "2" are possible values.
    (2D mode is a false 2D projection, and is different from <a href="#disable">disabling the 3D rendering</a>.)
</p>
<Code>{prefix}camera mode <samp title="PERSPECTIVE or ORTHOGRAPHIC or 2D">p/o/2d</samp></Code>

<Anchor h2 id="light">Light Commands</Anchor>

<p>
    The Light command (and its alias the Ambient command) sets the ambient light color.
{#if data.premium}
    When combined with a sunlight source, the ambient light will appear to be the color in shadowed areas.
{/if}
</p>

<p>The color parameter can be a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color">hex color</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color">named color</a>, or any other valid <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">css color</a>.</p>

<Code>{prefix}light <samp>color</samp> <samp title="time">t</samp>
{prefix}ambient <samp>color</samp> <samp title="time">t</samp></Code>

<p>The Lamp commands set up a point light on the target event and changes properties of that light.</p>

<Code>{prefix}<samp title="target string">@t</samp> lamp color <samp>color</samp> <samp title="time">t</samp>
{prefix}<samp title="target string">@t</samp> lamp intensity <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}<samp title="target string">@t</samp> lamp dist <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}<samp title="target string">@t</samp> lamp <samp>color</samp> <samp title="number">intensity</samp> <samp title="number">dist</samp> <samp title="time">t</samp></Code>

<p>
    The Flashlight commands set up a spot light on the target event and changes properties of that light.
    In addition to the same properties as the lamp, the flashlight has angle, pitch, and yaw properties.
    Angle is the angle of the light cone in degrees, and pitch and yaw are the direction the light is pointing.
</p>

<Code>{prefix}<samp title="target string">@t</samp> flashlight color <samp>color</samp> <samp title="time">t</samp>
{prefix}<samp title="target string">@t</samp> flashlight intensity <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}<samp title="target string">@t</samp> flashlight dist <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}<samp title="target string">@t</samp> flashlight angle <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}<samp title="target string">@t</samp> flashlight pitch <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}<samp title="target string">@t</samp> flashlight yaw <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}<samp title="target string">@t</samp> flashlight <samp>color</samp> <samp title="number">intensity</samp> <samp title="number">dist</samp> <samp title="number">angle</samp> <samp title="time">t</samp></Code>

<Version block {premium}>
    <p>
        The Sun commands set up a directional light to act as a sunlight source and changes properties of that light. The sun will create dynamic shadows.
    </p>
    
<Code>{prefix}sun color <samp>color</samp> <samp title="time">t</samp>
{prefix}sun yaw <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}sun pitch <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}sun angle <samp title="number">yaw</samp> <samp title="number">pitch</samp> <samp title="time">t</samp></Code>
    
</Version>

<Anchor h2 id="animation">Animation Command</Anchor>

<p>
    The Animation command plays an animation at the target event.
</p>

<p>
    {#if data.pluginName==="mz3d"}
        Due to the new animation system in RPG Maker MZ, the animation command is slightly different in MZ3D.
        In addition to the depth and scale parameters supported by MV3D, MZ3D also supports the rot and height parameters.
    {:else}
        Additional parameters can also be provided at the end of the command.
    {/if}
</p>
<ul>
    <li>Depth controls whether the animation should have depth enabled. If false, animations are drawn over everything else.</li>
    <li>Scale is a scaling factor for the animation.</li>
    {#if data.pluginName==="mz3d"}
    <li>Rot is the rotation of the animation in degrees.</li>
    <li>Height is a height offset for the animation's position.</li>
    {/if}
</ul>
    {#if data.pluginName==="mz3d"}
<Code>{prefix}<samp title="target string">@t</samp> animation <samp title="number">id</samp>
{prefix}<samp title="target string">@t</samp> animation <samp title="number">id</samp> depth <samp>true/false</samp> scale <samp title="number">n</samp> rot <samp title="number (degrees)">n</samp> height <samp title="number">n</samp></Code>
    {:else}
<Code>{prefix}<samp title="target string">@t</samp> animation <samp title="number">id</samp>
{prefix}<samp title="target string">@t</samp> animation <samp title="number">id</samp> depth <samp>true/false</samp> scale <samp title="number">n</samp></Code>
    {/if}

<Anchor h2 id="fog">Fog Command</Anchor>
<p>
    The fog command changes the fog color and density for the map.
    It has a near distance and a far distance, which are the distances from the camera where the fog starts and ends.
    {#if data.premium} To control the alpha fog, see the <a href="#set">Set Command</a>.{/if}
</p>

<Code>{prefix}fog color <samp>color</samp> <samp title="time">t</samp>
{prefix}fog near <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}fog far <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}fog dist <samp title="number">near</samp> <samp title="number">far</samp> <samp title="time">t</samp>
{prefix}fog <samp>color</samp> <samp title="number">near</samp> <samp title="number">far</samp> <samp title="time">t</samp></Code>

<Anchor h2 id="resolution-scale">Resolution Scale Command</Anchor>
<p>
    The Resolution Scale command changes the size of the 3D canvas relative to the game canvas. This can be used to create a pixellated effect. The scale should be between 0 and 1.
</p>
<Code>{prefix}resolution scale <samp title="number">n</samp> <samp title="time">t</samp></Code>

<Anchor h2 id="configure">Configure Command</Anchor>
<p>
    The configure command can change the configurations of a character. You should provide a list of configuration functions as the parameter.
    For more information the configuration functions you can use, see <Link href="event-config">Event Configuration Functions</Link>.
</p>

<Code>{prefix}<samp title="target string">@t</samp> configure <samp title="list of configuration functions">functions</samp> <samp title="time">t</samp></Code>

<Version block {premium}>
<Anchor h2 id="skybox&skyball">Skybox and Skyball Commands</Anchor>
<Anchor h3 id="skybox">Skybox Command</Anchor>
<p>
    The Skybox command will set up a cube-shaped mesh to represent the sky. The skybox takes six textures, one for each face.
</p>
<p>
    A layer parameter can be provided after to set up multiple skyboxes. The layer parameter is always optional and defaults to 0.
    Higher layers will be drawn over lower layers.
</p>
<p>
    The time parameter will fade the skybox in or out, but cannot fade between different textures. To fade between textures you need to use multiple skybox layers.
</p>
<p>
    If an image is provided without a side name, it will be used as the default image and will be used for any sides without an image.
    <br>Texutres are pulled from the img/parallaxes folder.
    <br>The word "clear" can be used to mean a blank texture.
</p>
<p>
    The autorotate parameters can be used to make the skybox rotate automatically.
</p>
<Code><span title="clear all skyboxes">{prefix}skybox clear</span>
<span title="clear skybox on specified layer">{prefix}skybox clear <samp>layer</samp></span>
{prefix}skybox <samp title="optional (default 0) skybox layer">layer</samp> alpha <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}skybox <samp title="optional (default 0) skybox layer">layer</samp> <samp>img</samp> <samp title="time">t</samp>
{prefix}skybox <samp title="optional (default 0) skybox layer">layer</samp> <samp>img</samp> top <samp>img</samp> bottom <samp>img</samp> <samp title="time">t</samp>
{prefix}skybox <samp title="optional (default 0) skybox layer">layer</samp> north <samp>img</samp> south <samp>img</samp> east <samp>img</samp> west <samp>img</samp> top <samp>img</samp> bottom <samp>img</samp> <samp title="time">t</samp>
{prefix}skybox <samp title="optional (default 0) skybox layer">layer</samp> autorotate yaw <samp title="number">n</samp>
{prefix}skybox <samp title="optional (default 0) skybox layer">layer</samp> autorotate pitch <samp title="number">n</samp>
{prefix}skybox <samp title="optional (default 0) skybox layer">layer</samp> autorotate roll <samp title="number">n</samp>
{prefix}skybox <samp title="optional (default 0) skybox layer">layer</samp> autorotate <samp title="number">yaw</samp> <samp title="number">pitch</samp> <samp title="number">roll</samp></Code>

<Anchor h3 id="skyball">Skyball Command</Anchor>
<p>
    The Skyball command will set up a sphere-shaped mesh to represent the sky. The skyball takes only one texture which is wrapped around the sphere.
    <br>Like skyboxes, skyballs can also be layered. Skyballs are always drawn in front of skyboxes.
    <br>Also like skyboxes, skyballs can be automatically rotated with the autorotate parameters.
</p>
<p>
    Skyballs have an additional "repeat" parameter which can make the texture repeat a certain number of times around the sphere.
</p>
<Code><span title="clear all skyballs">{prefix}skyball clear</span>
<span title="clear skyball on specified layer">{prefix}skyball clear <samp>layer</samp></span>
{prefix}skyball <samp title="optional (default 0) skyball layer">layer</samp> alpha <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}skyball <samp title="optional (default 0) skyball layer">layer</samp> <samp>img</samp> <samp title="time">t</samp>
{prefix}skyball <samp title="optional (default 0) skyball layer">layer</samp> <samp>img</samp> repeat <samp title="number">n</samp> <samp title="time">t</samp>
{prefix}skyball <samp title="optional (default 0) skyball layer">layer</samp> autorotate yaw <samp title="number">n</samp>
{prefix}skyball <samp title="optional (default 0) skyball layer">layer</samp> autorotate pitch <samp title="number">n</samp>
{prefix}skyball <samp title="optional (default 0) skyball layer">layer</samp> autorotate roll <samp title="number">n</samp>
{prefix}skyball <samp title="optional (default 0) skyball layer">layer</samp> <samp>img</samp> repeat <samp title="number">n</samp> autorotate <samp title="number">yaw</samp> <samp title="number">pitch</samp> <samp title="number">roll</samp> <samp title="time">t</samp></Code>

</Version><Version block {premium}>
<Anchor h2 id="action">Action Command</Anchor>
<p>
    The Action command plays or stops an action (animation) on the target character with an imported gltf model.
    <br>The wait, loop, and important keywords can be provided at the end of the command to modify the behavior.
</p>
<ul>
    <li>Loop will cause the action to loop.</li>
    <li>Important will prevent the action from being interrupted by changing state.</li>
    <li>Wait will cause the interpreter to wait until the action is finished before continuing.</li>
</ul>
<Code>{prefix}<samp title="target string">@t</samp> action play <samp title="action name">name</samp>
{prefix}<samp title="target string">@t</samp> action play <samp title="action name">name</samp> wait
{prefix}<samp title="target string">@t</samp> action play <samp title="action name">name</samp> loop
{prefix}<samp title="target string">@t</samp> action play <samp title="action name">name</samp> important
{prefix}<samp title="target string">@t</samp> action play <samp title="action name">name</samp> loop important
{prefix}<samp title="target string">@t</samp> action stop <samp title="action name">name</samp></Code>

</Version>


<Anchor h2 id="set">Set Command</Anchor>
<p>Changes a setting. Some of the settings changeable using this command also appear in the plugin parameters. For those settings, the same syntax is used as in the plugin parameters.</p>
<p>Settings changed with this command are saved in the save file.</p>
    
<Code>{prefix}set <samp>setting</samp> <samp>value</samp></Code>

<p>Valid Settings:</p>
<dl>
    <dt>lockCamera</dt>
    <dd>Locks the camera in place. <samp>true</samp> or <samp>false</samp></dd>

    <dt>allowRotation</dt>
    <dd>Allows the camera to rotate side to side. <samp>true</samp> or <samp>false</samp></dd>

    <dt>allowPitch</dt>
    <dd>Allows the camera to pitch up and down. <samp>true</samp> or <samp>false</samp></dd>

    <dt>diagonalMovement</dt>
    <dd>Changes the way diagonal movement works. Can be <samp>Off</samp>, <samp>Diagonal Basic</samp>, <samp>Diagonal Basic 3D</samp>, <samp>Diagonal Smart</samp>, or <samp>Diagonal Smart 3D</samp>
    <br>3D modes mean diagonal movement only allowed when 3D mode is enabled.</dd>

    <dt>turnIncrement</dt>
    <dd>How many degrees the camera turns when turning. <samp>0</samp> to <samp>360</samp></dd>

    <dt>turnSpeed</dt>
    <dd>How fast the camera turns in degrees per second.</dd>

    <dt>instantMovement</dt>
    <dd>When true, the player moves instantly to the new position. <samp>true</samp> or <samp>false</samp>
        <Version bug inline small>Doesn't work propertly with 3D models</Version>
    </dd>

    <dt>inputCameraMouse</dt>
    <dd>When true, the camera can be controlled with the mouse. <samp>true</samp> or <samp>false</samp></dd>

    <dt>inputCameraGamepad</dt>
    <dd>When true, the camera can be controlled with a gamepad. <samp>true</samp> or <samp>false</samp></dd>

    <dt>cameraCollision</dt>
    <dd>Allows the camera to collide with objects. Can be <samp>Off</samp>, <samp>Type1</samp>, <samp>Type2</samp>, <samp>Type1 Smoothed</samp>, or <samp>Type2 Smoothed</samp>
    <br>Type2 allows objects to be between the camera and player, Type1 does not. Smoothed will smooth the camera position when colliding.</dd>

    <dt>airshipHeight</dt>
    <dd>How high the airship flies.

    <dt>allowGlide</dt>
    <dd>If true, collision detection for flying characters will only use the current elevation and not target elevation. <samp>true</samp> or <samp>false</samp></dd>

    <dt>animationDepth</dt>
    <dd>Whether animations should have depth enabled. If false, animations are drawn over everything else. <samp>true</samp> or <samp>false</samp></dd>
</dl>

<Version block {premium}>
<dl>
    <dt>alphaFog</dt>
    <dd>Blends the 3D environment into the parallax background with an alpha fog effect. <samp>0</samp> to disable, <samp>1</samp> for full effect.</dd>

    <dt>glowIntensity</dt>
    <dd>Intensity of the glow effect. <samp>0</samp> or higher</dd>

    <dt>glowRadius</dt>
    <dd>Radius of the glow effect. <samp>0</samp> or higher</dd>

    <dt>glowThroughWalls</dt>
    <dd>When true, the glow effect will be visible through walls. <samp>true</samp> or <samp>false</samp></dd>

    <dt>highlight</dt>
    <dd>Controls the mode for the highlight effect. Can be <samp>Off</samp>, <samp>Inner</samp>, <samp>Outer</samp>, or <samp>On</samp></dd>

    <dt>highlightRadius</dt>
    <dd>Radius of the highlight effect. <samp>0</samp> or higher</dd>

    <dt>highlightThroughWalls</dt>
    <dd>When true, the highlight effect will be visible through walls. <samp>true</samp> or <samp>false</samp></dd>

    <dt>chromaticAberration</dt>
    <dd>Intensity of the chromatic aberration effect. <samp>0</samp> or higher</dd>

    <dt>chromaticAberrationAngle</dt>
    <dd>Angle of the chromatic aberration effect. <samp>0</samp> to <samp>360</samp></dd>

    <dt>aperture</dt>
    <dd>Larger values cause more blur away from the focus distance.</dd>

    <dt>blurStrength</dt>
    <dd>Strength of the blur effect. <samp>0</samp> or higher</dd>

    <dt>focusDistance</dt>
    <dd>Distance at which the camera is focused. <samp>center</samp> focuses on the center of the screen. <samp>mouse</samp> focuses on the mouse position. <samp>auto</samp> will set focus to camera distance, or center of screen if in 1st person. Using a number will fix the focus distance at that value.</dd>

    <dt>bloom</dt>
    <dd>Intensity of the bloom effect. <samp>0</samp> or higher</dd>

    <dt>bloomThreshold</dt>
    <dd>Threshold for the bloom effect. <samp>0</samp> to <samp>1</samp></dd>

    <dt>bloomRadius</dt>
    <dd>Radius of the bloom effect. <samp>0</samp> or higher</dd>

</dl>
</Version>

<Anchor h2 id="enable" alias="disable">Enable / Disable Command</Anchor>

<p>
    The Enable and Disable commands enable or disable the 3D rendering.
    When disabled, the 3D rendering will be hidden and the game will behave as if the plugin is not installed.
</p>
<Code>{prefix}enable
{prefix}disable</Code>

<Version block bug v="<=0.9">
    <p>It was intended that you be able to provide a fade type with the enable or disable command, but this isn't working due to a bug.</p>
<Code>{prefix}enable 0
{prefix}disable 1</Code>
    <p>Instead, you can use a script call to accomplish the same thing.</p>
    <Code>{data.pluginName}.enable(0);<br>{data.pluginName}.disable(1);</Code>
    <p>Fade mode 0 is fade to black and fade mode 1 is fade to white.</p>
</Version>

<Anchor h2 id="script">Script Call</Anchor>

<p>
    To run a plugin command using javascript, you can use <code>{data.pluginName}.command</code>.
    {#if data.pluginName==="mv3d"}You should leave out the "mv3d" prefix when running commands this way.{/if}
    You can pass the parameters as separate arguments into the function as well.
</p>
Example:
<Code>var id=1, depth=true, scale=1;
{data.pluginName}.command("@p animation", id, "depth", depth, "scale", scale);</Code>
