<script>
    import Anchor from "$lib/components/Anchor.svelte";
    import PageTitle from "$lib/components/PageTitle.svelte";

    export let data;
</script>

<PageTitle title="{`${data.FullPluginName} Documentation`}" category="" />

<p>
    {data.pluginName.toUpperCase()}-Rewrite is a complete rewrite of <a href="/docs/{data.pluginName}">{data.pluginName.toUpperCase()}</a>, the 3D rendering plugin for RPG Maker {data.pluginName.toUpperCase().slice(0,2)}.
</p>
<p>
    For the {data.pluginName==="mv3d"?"MZ":"MV"} version of this plugin, see <a href="/docs/{data.pluginName==="mv3d"?"mz3d":"mv3d"}-rewrite">{data.pluginName==="mv3d"?"MZ3D":"MV3D"}-Rewrite</a>.
</p>

<Anchor h2 id="getting-started">Getting Started</Anchor>

<p>
    Currently, the Rewrite is only available through Patreon:
    <br>
    <a href="https://www.patreon.com/posts/136330573">MZ3D Rewrite Preview Build 3</a>
</p>

<p>If you need further assistance than what this page can provide, you can ask for help on the <a href="http://cutievirus.com/discord">Discord server</a>.</p>

<p>
    Rewrite's documentation isn't complete, but many aspects of the plugin are the same as the old version.
    <br>Consider reading <a href="/docs/{data.pluginName}">{data.pluginName} documentation</a>.
</p>