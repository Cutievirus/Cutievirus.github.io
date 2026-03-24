<script lang="ts">
    import DropDown from '$lib/components/DropDown.svelte';
    import BrandIcon from './connect/BrandIcon.svelte';

    import { page } from '$app/stores';
    import ThemeOption from './ThemeOption.svelte';

</script>
<style lang="scss" global>
    .social-links {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    footer{
        text-align: center;
    }
</style>
<footer>
    <nav class="social-links">
        <a href="https://patreon.com/cutievirus" target="_blank"><BrandIcon source="patreon"/></a>
        <a href="https://cutievirus.itch.io" target="_blank"><BrandIcon source="itchio"/></a>
        <a href="https://ella.cutievirus.com" target="_blank"><BrandIcon source="bluesky"/></a>
        <a href="https://cutievirus.com/discord" target="_blank"><BrandIcon source="discord"/></a>
    </nav>
    
    <!-- TODO: default select current theme with js -->
    <!--
    <div>
        Theme:
        <DropDown value="Electra" direction="up">
            <ThemeOption theme="Electra"/>
            <ThemeOption theme="Electra 2k3"/>
        </DropDown>
    </div>
    -->
</footer>