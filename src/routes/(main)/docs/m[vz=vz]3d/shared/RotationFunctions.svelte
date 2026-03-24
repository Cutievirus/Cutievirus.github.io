<script>
    import Anchor from "$lib/components/Anchor.svelte";
    import Code from "$lib/components/Code.svelte";
    export let subject = "character";
</script>

<Anchor h2 id="rot">Rotation Functions</Anchor>
<p>
    There are four rotation functions, yaw, pitch, roll, and rot.
</p>
<p>
    Rot is the simple rotation function, and is usually only used on its own, but when used with the others it is applied last.
</p>
<p>
    Yaw rotates the {subject} around the z axis, effectively turning it left and right.
</p>
<p>
    Pitch rotates the {subject} around the x axis, effectively turning it up and down.
</p>
<p>
    Roll rotates the {subject} around the y axis, effectively tilting it side to side.
</p>
<Code>yaw(<samp title="number">n</samp>)
pitch(<samp title="number">n</samp>)
roll(<samp title="number">n</samp>)
rot(<samp title="number">n</samp>)</Code>