<script lang="ts">
    import Anchor from "$lib/components/Anchor.svelte";
    import Code from "$lib/components/Code.svelte";
    import Link from "$lib/components/Link.svelte";
    import Version from "$lib/components/Version.svelte";

    export let subject = "character";
    export let premium:boolean|'?' = '?';
</script>

<Anchor h2 id="glow">Glow Function</Anchor>
<p>
    The glow parameter will add an emissive color to make the {subject} glow.
    {#if subject==="tile"}The effect works well for lava and other things that should emit light.{/if}
    <br>It can take a number from 0 to 1 or a color. 
    <br>Examples: <code>glow(1), glow(red)</code>
</p>
{#if subject==="tile"}
<p>
    If one of the tile's textures has glow configured, the texture settings will take priority.
</p>
{/if}
<Version {premium}>
    A second parameter can be provided to control the intensity of the premium glow effect.
    <br>Examples: <code>glow(1,0), glow(red,1)</code>
</Version>



<Anchor h2 id="alpha">Alpha Function</Anchor>
<p>
    The alpha parameter can be used to make the {subject} partially transparent. Or, you can set alpha to 1 to turn on alpha blending.
    <br>Examples: <code>alpha(0.5), alpha(1)</code>
</p>
{#if subject==="tile"}
<p>
    If one of the tile's textures has alpha configured, the texture settings will take priority.
</p>
{/if}

<Version block {premium}>
    <Anchor h2 id="highlight">Highlight Function</Anchor>
    <p>
        Sets the highlight color for the {subject}. Set this to black to disable.
        <br> To change other highlight settings, use the <Link href="plugin-commands/#set">Set Command</Link>.
    </p>
    <Code>highlight(<samp>color</samp>)</Code>
</Version>