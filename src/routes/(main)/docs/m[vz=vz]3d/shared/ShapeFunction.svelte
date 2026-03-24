<script>
    import Anchor from "$lib/components/Anchor.svelte";

    export let subject = "character";
</script>


<Anchor h2 id="shape">Shape Function</Anchor>
<p>
    The shape function will set the shape of the {subject}. The shape determines how the {subject}'s mesh will be built and how it will behave.
</p>
<dl>
    <dt>flat</dt>
    <dd>
        {#if subject === "tile"}
            The default shape. Flat tiles normally appear as a flat plane, but when given height will have walls that use the side texture.
        {:else}
            A plane that lies flat on the ground.
        {/if}
    </dd>
    <dt>cross</dt>
    <dd>An intersection of two verical planes.</dd>
    <dt>xcross</dt>
    <dd>Same as cross, but angled at 45deg. Essentially a shorthand for <code>shape(cross),rot(45)</code></dd>
    <dt>8cross</dt>
    <dd>A combination of cross and xcross.</dd>
    <dt>sprite</dt>
    <dd>
        <p>A special shape that will always face the camera.</p>
        <p>Takes a second parameter for <a href="#doff">dynamic offset</a>.</p>
    </dd>
    <dt>billboard</dt>
    <dd>
        Formerly known as the "tree" shape, also named "board" and "cardboard".
        <br>A billboard will rotate to match the camera's yaw, but not its pitch.
    </dd>
    {#if subject === "tile"}
    <dt>fence</dt>
    <dd>
        A shape that will connect to other nearby tiles to create a fence.
        A second parameter can be provided to set whether it should have fence posts (true by default).
        <br>Examples: <code>shape(fence), shape(fence,false)</code>
    </dd>
    {/if}
    <dt>wall</dt>
    <dd>
        The wall shape is a flat plane that stands straight up instead of lying on the ground.
        It's intended for creating wall decorations by using it alongside the <a href="#rot">rot function</a> and <a href="#offset">offset functions</a>.
    </dd>
    {#if subject === "tile"}
    <dt>slope</dt>
    <dd>
        A shape for creating slopes that let the player walk up or down to different elevations. Can be used as ramps or stairs, sloped roofs, or hills.
        Takes a second parameter which is the slope's height.
        <br>Examples: <code>shape(slope), shape(slope,2)</code>
        <br>For more information and functionality, see the <a href="#slope">slope function</a>.
    </dd>
    {/if}
</dl>
