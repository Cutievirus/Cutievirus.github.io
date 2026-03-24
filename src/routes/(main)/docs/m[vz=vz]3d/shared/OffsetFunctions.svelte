<script lang="ts">
    import Anchor from "$lib/components/Anchor.svelte";
import Code from "$lib/components/Code.svelte";
    export let subject = "character";
    export let premium:boolean|'?' = '?';
</script>

<Anchor h2 id="offset">Offset Functions</Anchor>
<p>
    There are three offset functions, xoff, yoff, and zoff, which add an offset to the position in the respective dimension. There is also an offset function which can be used to set all three at once.
</p>
<Code>xoff(<samp title="number">n</samp>)
yoff(<samp title="number">n</samp>)
zoff(<samp title="number">n</samp>)
offset(<samp title="number">x</samp>,<samp title="number">y</samp>,<samp title="number">z</samp>)</Code>


<Anchor h2 id="doff">Dynamic Offset</Anchor>
<p>
    The DOff Function controls the {subject}'s "Dynamic Offset". Dynamic offset is the amount the {subject} will be offset towards the camera.
    This is usually used for the sprite shape, {#if subject === "tile"}
        but other dynamic shapes can be given a dynamic offset as well, such as the board shape{#if premium}&nbsp;or the model or mesh shapes{/if}.
    {:else}
        but any shape can be given a dynamic offset with this function.
    {/if}
    The default dynamic offset for sprites is settable in the plugin parameters through the "Sprite Dynamic Offset" parameter.
</p>
<p>
    If the value provided to this function includes the letter "p", the dynamic offset will be adjusted according to the camera's pitch.
    The offset will be zero when the camera pitch is parallel to the ground, and will be the full offset when the camera is looking straight down.
</p>

Examples:
<Code>doff(0), doff(.45), doff(.45p)</Code>