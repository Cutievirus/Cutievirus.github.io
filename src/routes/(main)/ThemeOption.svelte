<script lang="ts">
    import MenuItem from "$lib/components/MenuItem.svelte";

    export let theme:string;

</script>
<MenuItem action='/change-theme'><input type="hidden" name="theme" value="{theme}"/>{theme}</MenuItem>