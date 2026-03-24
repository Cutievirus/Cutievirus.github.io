<script lang="ts">
    import { page } from '$app/stores';

    import Img from "../../lib/components/Img.svelte";


    const theme = "Electra";
</script>
<style lang="scss">
    nav{
        text-align:center;
        margin-bottom:scale(8px)
    }
    nav a{
        color:white;
    }
    nav a+a::before,
    nav a+:global(.menu-wrapper>.menu-button::before){
        content:" - ";
    }
</style>
<header>
	<nav>
		<a href="/">
            <!-- TODO: this should update with theme -->
            {#if theme.includes("2k3")}
                <Img src="/favicon.png" width=16 height=16/>
            {:else}
                <Img src="/logo128.png" width=16 height=16/>
            {/if}
            Cutievirus
        </a>
		<!--a href="/redeem">Redeem</a-->
		<a href="/docs">Documentation</a>
	</nav>
</header>