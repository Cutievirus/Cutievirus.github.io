<script lang="ts">
    import Accordion from "$lib/components/Accordion.svelte";
    import Link from '$lib/components/Link.svelte';

    const rewrite_pages = {
        "#getting-started": "Getting Started",
        "map-texture": "Map Texture",
        "vertex-offsets": "Vertex Offsets",
        "lut": "LUT Textures",
        "connected-maps": "Connected Maps",
    }

    const mv3d_pages = {
        "#getting-started": "Getting Started",
        "plugin-commands": "Plugin Commands",
        "tile-config": "Tile Configuration Functions",
        "event-config": "Event Configuration Functions",
        "map-config": "Map Configuration Functions",
        "modeling": "Modeling",
    }

</script>

<Accordion open id="mz3d-rewrite">
    <svelte:fragment slot=summary>
        MZ3D-Rewrite
    </svelte:fragment>
    <ul>
        {#each Object.entries(rewrite_pages) as [p,name]}
            <li><Link href="/docs/mz3d-rewrite/{p}">{name}</Link></li>
        {/each}
    </ul>
</Accordion>

{#each Object.entries({mv3d:"MV3D",mz3d:"MZ3D"}) as [plugin,PLUGIN]}
    <Accordion open id={plugin}>
        <svelte:fragment slot=summary>
            {PLUGIN}
        </svelte:fragment>
        <ul>
            {#each Object.entries(mv3d_pages) as [p,name]}
                <li><Link href="/docs/{plugin}/{p}">{name}</Link></li>
            {/each}
        </ul>
    </Accordion>
{/each}