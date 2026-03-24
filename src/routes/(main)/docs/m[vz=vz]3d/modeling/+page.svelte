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

<PageTitle title=Modeling/>

{#if premium !== true}
    <Version block premium="?">
        <p>
            The features on this page are only available in the premium version of the plugin.
        </p>
    </Version>
{/if}

<Anchor h2 id="model-import">Importing Models</Anchor>
<p>
    Importing 3D models is done using the "Model" configuration function.
    Models will be loaded from the models/ folder. Supported formats are .obj, .gltf, and .glb.
</p>
Parameters:
<ParameterList>filename|instance|flip||actions,bones,textures|projectionfix</ParameterList>
<p>
    When providing the file name, remember to include the file extension.
</p>
<p>
    The <Anchor id="model-instance">instance</Anchor> parameter controls whether or not to use <a href="https://doc.babylonjs.com/features/featuresDeepDive/mesh/copies/instances">instancing</a> (a more efficient way to render multiple copies of the same model).
    <br> Values are <code>true</code>, <code>false</code>, or <code>clone</code> (to use <a href="https://doc.babylonjs.com/features/featuresDeepDive/mesh/copies/clones">cloning</a> instead of instancing).
    <br> The default optimization method is settable in the plugin parameters.
</p>
<p>
    The <Anchor id="model-flip">flip</Anchor> parameter can be used to flip the model's geometry. This parameter exists for backwards compatibility with models created for an older version of {data.pluginName.toUpperCase()}.
</p>

<p>
    The <Anchor id="model-actions">actions</Anchor> parameter modifies information about the model's animations. This parameter is a nested parameter list, so it should be wrapped in <code>{'{}'}</code>.
    <br>You should provide a list of named arguments, with the name being the name of the action
    and each argument being another nested parameter list with the following parameters:
    <ParameterList>alias,speed</ParameterList>
    Alias is a new name for the action. For example, if you change the name to "walk", it will be used as the walking action.
    <br>Speed can be used to speed the animation up or slow it down. The default speed is 1.
    <br>Example: <code>{'model(char.glb,actions:{sprint:{alias:run,speed:1.4},stand:{alias:idle}})'}</code>
</p>

<p>
    The <Anchor id="model-bones">bones</Anchor> parameter is used to modify the model's bones. This parameter is a nested parameter list, so it should be wrapped in <code>{'{}'}</code>.
    <br>You should provide a list of named arguments, with the name being the name of the bone
    and each argument being another nested parameter list with the following parameters:
    <ParameterList>scale</ParameterList>
    Scale is the new scale for the bone.
    <Version bug v="<=0.9.2">Due to a bug this needs to be a non-zero value, but you can use a very small number like 0.001 instead.<br slot="hidden"></Version>
    Example: <code>{'model(char.glb,bones:{head:{scale:0.5}})'}</code>
</p>

<p>
    The <Anchor id="model-textures">textures</Anchor> parameter is used to replace the textures used in an imported model.
    This parameter is a nested parameter list, so it should be wrapped in <code>{'{}'}</code>.
    <br>Each argument is an additional nested parameter list with <Link href="tile-config#textures">texture parameters</Link>.
    <br>If the model has multiple textures, you can provide a list of texture parameter lists.
</p>
Example:
<Code>{`model(char.glb, textures:{ {./img/characters/Actor1.png,75%,50%,100%,100%} })`}</Code>

<p>
    The <Anchor id="model-projectionfix">projectionfix</Anchor> parameter sets whether the model's projection should be adjusted for the 2D <Link href="plugin-commands#camera">camera mode</Link>.
    If true, the model will avoid being stretched vertically. Objects that are part of the environment should have <code>projectionfix:false</code> and characters should have <code>projectionfix:true</code>.
</p>

<Anchor h3 id=".obj" href="#.obj">.obj</Anchor>
<p>
    When using .obj format, there should also be a .mtl file which describes the model's materials.
    <br>.obj and .mtl files are plain text, so you can open them in a text editor.
</p>
<p>
    The "mtllib" line in the .obj file points to the location of the .mtl file.
</p>
<p>
    The .mtl file will have lines that start with "map_" such as "map_Kd" and "map_Bump" which point to the texture files.
</p>
<p>
    Ensure that all file paths are relative paths. You should have no paths that start with "C:\",
    or the model won't work when loaded on someone else's computer because the files will be in different locations.
</p>
<p>For example, to load a texture from an image in the tilesets folder: <code>map_Kd ../img/tilesets/Inside_C.png</code></p>
<p>
    .obj models only support static meshes. If you need to animate the model, you should use .glb or .gltf format instead.
</p>
<Anchor h3 id=".glb" href="#.glb">.glb</Anchor>
<p>
    .glb files are self-contained and contain the model, materials, and textures all in one file.
    <br>They are the easiest to work with because there are no external files to worry about.
</p>
<Anchor h3 id=".gltf" href="#.gltf">.gltf</Anchor>
<p>
    .gltf files are the same format as .glb files, but stored as a text file instead of a binary file.
    <br>Unlike glb, it's possible for a gltf file to reference external files, so you may need to include the textures and other files it references.
    Again, you should also ensure that all file paths used in the .gltf file are relative paths.
</p>
<p>
    .glb and .gltf files support animation. To run one of the model's animations, use the <Link href="plugin-commands#action">Action Command</Link>.
</p>
<p>Actions named "idle", "walk", "run", "jump", "fall", "swim", or "swimmove" will be used as default actions depending on the character state.</p>

<Anchor h2 id="mesh">Mesh Building</Anchor>
<p>
    The "Mesh" configuration function is used to construct a mesh for the character based on a mesh string.
    Mesh strings are a special format created specifically for {data.pluginName.toUpperCase()} that contain instructions for building a mesh.
</p>

<p>
    Using mesh strings might seem a bit more complicated than importing 3D models, but it allows you to define meshes directly in plain text (such as in a texture .json file).
</p>

<p>
    A mesh string is composed by a series of mesh parts, each of which is a letter (or series of letters) which determines what type of part it is, followed by a nested parameter list.
</p>
<p>
    The following mesh part types are available:
</p>
<dl>
    <dt><Anchor id="mesh-part-c">c - cuboid</Anchor></dt>
    <dd>
        Defines a cuboid.
        <br>Parameters: <ParameterList>xsize,ysize,zsize|xoff,yoff,zoff|yaw,pitch,roll|texture:top,bottom,south,east,north,west</ParameterList>
        Example (shelf mesh): <Code>{
        data.pluginName==='mv3d'
        ?`mesh(c{1,.5,1.5|0,-.25,0||{+0,+-1,1,25px},{0},{+0,+-23px,1,71px},{B,7,11+22px,1,-70px}})`
        :`mesh(c{1,.5,1.5|0,-.25,0||{+0,+-1,1,25px},{0},{+0,+-23px,1,71px},{B,7,22+22px,1,-70px}})`}</Code>
    </dd>
    <dt><Anchor id="mesh-part-q">q - quad</Anchor></dt>
    <dd>
        Defines a quad.
        <br>Parameters: <ParameterList>xsize,ysize|xoff,yoff,zoff|yaw,pitch,roll|texture</ParameterList>
        Example (tree): <Code>{
        data.pluginName==='mv3d'
        ?`mesh(
qq{1,2|,,1|,90|{B,5,11,1,2}}
qq{1,2|,,1|90,90|{B,5,11,1,2}}
q{1,1|,,.75||{B,6,12}}
q{.8,.8|,,1.25||{B,6,12}}
)`
        :`mesh(
qq{1,2|,,1|,90|{B,5,19,1,2}}
qq{1,2|,,1|90,90|{B,5,19,1,2}}
q{1,1|,,.75||{B,6,20}}
q{1,1|,,1.25||{B,6,20}}
)`}</Code>
    </dd>
    <dt><Anchor id="mesh-part-p">p - points</Anchor></dt>
    <dd>
        Defines a mesh using point data.
        <br>Parameters: <ParameterList>positions...|indices...|uvs...|texture</ParameterList>
        Example:
        <Code>{
        data.pluginName==='mv3d'
        ?`mesh(p{0,0,0, 0,-1,.5, .866,.5,.5, -.866,.5,.5, 0,0,1|0,1,2, 0,3,1, 0,2,3, 4,3,2, 4,2,1, 4,1,3|.5,.5, .5,0, .75,.75, .25,.75, .5,.5|{A5,2,4}})`
        :`mesh(p{0,0,0, 0,-1,.5, .866,.5,.5, -.866,.5,.5, 0,0,1|0,1,2, 0,3,1, 0,2,3, 4,3,2, 4,2,1, 4,1,3|.5,.5, .5,0, .75,.75, .25,.75, .5,.5|{A5,6,8}})`
        }</Code>
        <p>I have made a <a href="/blender/mv3d_mesh.py" download>Blender Add-On</a> for converting models into mesh strings of this type.</p>
    </dd>
</dl>
<p>
    To make a double-sided shape, you can repeat the letter for the mesh part type twice ("cc", "qq", or "pp").
</p>
<p>
    You can mix different part types in the same mesh string.
</p>
Example (chair):
<Code>{`mesh(c{.75,.6,.25|0,-.075,0||{+0,+10px,48px,17px},{0},{+0,+27px,1,13px}}
c{.125,.65,.125|-.3375,-.075,.25||{+0,+4px,7px,22px},{0},{+0,+26px,7px,5px},{+7px,+31px,34px,6px},{+0,+26px,7px,5px},{+7px,+31px,34px,6px}}
c{.125,.65,.125|.3375,-.075,.25||{+41px,+4px,7px,22px},{0},{+41px,+26px,7px,5px},{+7px,+31px,34px,6px},{+41px,+26px,7px,5px},{+7px,+31px,34px,6px}}
c{.125,.125,.875|-.3375,-.3375,.375||{+0,+-45px,7px,7px},{0},{+0,+-38px,7px,42px}}
c{.125,.125,.875|.3375,-.3375,.375||{+41px,+-45px,7px,7px},{0},{+41px,+-38px,7px,42px}}
qq{.55,1|0,-.3375,.75|0,90,0|{+7px,+-45px,34px,55px}}
)`}</Code>
