<script lang="ts">
    import { page } from "$app/stores";
    import Anchor from "./Anchor.svelte";

    export let category:string|undefined=undefined;
    export let title:string;
    let pageTitle = title;
    let pageCategory = '';
    $: {
        pageCategory = category!==undefined?category:$page.data.category;
        pageTitle = pageCategory?`${title} - ${pageCategory}`:title;
    }
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<Anchor h1>{pageTitle}</Anchor>