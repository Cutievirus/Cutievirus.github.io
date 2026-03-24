<script>
    import Anchor from "$lib/components/Anchor.svelte";
    import Code from "$lib/components/Code.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";


    export let data;

</script>
<style>
    ul{
        list-style: none;
    }
</style>

<PageTitle title="{`${data.PluginName} Documentation`}" category="" />

<Anchor h2 id="getting-started">Getting Started</Anchor>
<p>{data.pluginName.toUpperCase()} is a 3D rendering plugin for RPG Maker {data.pluginName.toUpperCase().slice(0,2)}. For the {data.pluginName==="mv3d"?"MZ":"MV"} version of this plugin, see <a href="/docs/{data.pluginName==="mv3d"?"mz3d":"mv3d"}">{data.pluginName==="mv3d"?"MZ3D":"MV3D"}</a>.
</p>
<p>
    You can download the demo project from the itch.io page.
    <a href="https://cutievirus.itch.io/{data.pluginName}">{data.pluginName.toUpperCase()} on itch.io</a>
</p>

<p>The full version of the plugin can be purchased from itch.io above, <a href="https://www.patreon.com/cutievirus">or by becoming a patron on Patreon</a>.</p>

<p>To add the plugin to a new or existing project:</p>
<ol>
    <li>Download the proper plugin zip file, not the demo project zip file.</li>
    <li>Extract the files into your project directory.
        <br>The folders are already set to put the needed files into the proper folder.
        <br><small>(the files are {data.pluginName}.js, which goes in the js/plugins folder, and some images that go in the img/{data.pluginName.toUpperCase()} folder. The included image files are “bushAlpha.png”, “shadow.png” and “errorTexture.png”)</small>
    </li>
    <li>Finally, load {data.pluginName} as a plugin in RPG Maker's Plugin Manager.</li>
</ol>

<p>Now when you run the game, the map should be rendered in 3D. Some more <a href="#advanced-setup">advanced setup</a> might be required to render things in the way you desire.</p>

<p>If it didn't work, try opening the javascript console with <kbd>F8</kbd> or <kbd>F12</kbd> to check if there's any error messages. If you're trying to add the plugin to an existing project, try with a fresh project to ensure the plugin is working properly. The problem might be caused by a conflict with another plugin.</p>

<p>If you need further assistance than what this page can provide, you can ask for help on the <a href="http://cutievirus.com/discord">Discord server</a>.</p>

<Anchor h2 id="advanced-setup">Advanced Setup</Anchor>

<p>By default, A3 and A4 tiles are configured to be rendered as walls with a height of 2 tiles. Additionally, regions 1-7 are configured to be affect set the height equal to the region number, and terrain tags 1 and 2 are configured to change the "shape" of the tile.
<br>These default configurations can be altered in the "Tile Config" section of the plugin parameters.</p> 

<p>Configuring the plugin is done using something called a "Configuration Function". For example, see "Wall Tile Settings" in the plugin parameters. The default setting should be <code>height(2)</code>. In this case, <code>height</code> is the name of the function, and <code>2</code> is the value passed into the function.</p>
<p>Configuration functions look and work similar to javascript functions, but they're a separate concept with slightly different syntax. The parameters in a configuration function can be divided into groups, and you can skip to the next group by using a vertical bar instead of a comma. Named parameters are also supported. You can skip to a specific parameter by specifying its name followed by a colon.</p>

Example:
<Code>
<span title="Set ceiling texture to A4,0,0, and ceiling height to 2">ceiling(A4,0,0|2)</span>
<span title="Set camera to yaw 0 pitch 60, dist 5, height 0.75">camera(0,60,dist:5,height:0.75)</span>
</Code>

<p>When configuring tilesets, maps, events, characters, or anything outside of the plugin parametrs, configuration functions must be placed inside a <code>&lt;{data.pluginName}></code> block inside the note box. The block is closed off with a <code>&lt;/{data.pluginName}></code> tag, similar to html syntax. You can also use the inline syntax <code>&lt;{data.pluginName}: ></code> in which case the configuration functions are placed inside the tag and you don't need a closing tag.</p>

Example:
<Code>
&lt;{data.pluginName}>
    <span title="Set camera to yaw 0, pitch 60, dist 5, height 0.75">camera(0,60,dist:5,height:0.75)</span>
&lt;/{data.pluginName}>

&lt;{data.pluginName}:<span title="Use cross shape">shape(cross)</span>,<span title="Set yaw angle to 45">yaw(45)</span>>
</Code>

<p>You can place multiple configuration functions inside a block or tag as you like. Separating them with spaces or commas is optional. The following examples are all equivalent.</p>

<Code>
&lt;{data.pluginName}:<span title="Use cross shape">shape(cross)</span>,<span title="Set yaw angle to 45">yaw(45)</span>>
&lt;{data.pluginName}:<span title="Use cross shape">shape(cross)</span> <span title="Set yaw angle to 45">yaw(45)</span>>
&lt;{data.pluginName}:<span title="Use cross shape">shape(cross)</span><span title="Set yaw angle to 45">yaw(45)</span>>
</Code>

<p>In the map note box, you can can use the special <code>&lt;{data.pluginName}-tiles></code> and <code>&lt;{data.pluginName}-regions></code> tags (and their corresponding closing tags) to change tileset and region settings specifically on that map.</p>

<p>There are three sets of configuration functions. For specific information about the configuration functions, follow one of the links below:</p>
<ul>
    <li><a href="tile-config">Tile Configuration Functions</a></li>
    <li><a href="event-config">Event Configuration Functions</a></li>
    <li><a href="map-config">Map Configuration Functions</a></li>
</ul>

<p>For information about plugin commands, see <a href="plugin-commands">Plugin Commands</a>.</p>

<Anchor h3 id="tileset-config">Tileset Configuration</Anchor>

<p>Tileset configuration uses an additional special syntax. Each line in the tileset configuration should start with a "tile identifier" which indicates which tile the configuration is for, followed by a colon.</p>
<p>Tile identifiers use the format <code>img,x,y</code> where <code>img</code> is the name of the tileset image (A1, A2, B, C, etc.), and <code>x</code> and <code>y</code> are the position of that tile on the tileset (starting at zero). For example, <code>A2,0,0</code> would be the top left A2 tile. On the outdoor tileset, this would be the grass autotile.</p>

Example:
<Code>
<span title="Top left tile from A2 tileset image">A2,0,0</span>:<span title="Set side texture to tile A4,0,5 (far left, 5 down, from A4 tileset image)">side(A4,0,5)</span>
<span title="Tile 1,0 (one from the left, top row) from the A2 tileset image">A2,1,0</span>:<span title="Set side texture to tile A4,1,5 (one from left, 5 down, from A4 tileset image)">side(A4,1,5)</span>
</Code>

<Anchor h3 id="region-config">Region Configuration</Anchor>

<p>Similar to tileset configuration, region configuration also uses a special syntax. Each line should start with the region number followed by a colon.</p>
<p>By default, region settings only affect the lowest tile layer (layer 1) but you can specify the layer it should affect by placing a comma after the region id followed by the layer id. You can also specify a range of layers.</p>

Example:
<Code>
<span title="affects region 8">8</span>:<span title="set height to 8">height(8)</span>
<span title="affects region 17">17</span>,<span title="affects layer 2">2</span>:<span title="set height to 1">height(1)</span>
<span title="affects region 18">18</span>,<span title="affects layers 1 through 4">1-4</span>:<span title="use the cross shape">shape(cross)</span>
</Code>

<p>Tile configurations set on the region will take priority over tileset configurations.</p>
