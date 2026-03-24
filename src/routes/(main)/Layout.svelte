<script lang="ts">

    import MessageWindow from '$lib/components/MessageWindow.svelte';
    import Footer from './Footer.svelte';
    import Nav from "./Nav.svelte";

</script>

<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    
</svelte:head>

<style lang="scss" global>
    @import '../style-root.scss';

    .main-layout{
        h1,h2,h3,h4,h5,h6{
            margin:scale(12px) 0;
        }

        image-rendering: pixelated;
        color:white;
        @include text-shadow();
        
        background-color: #312c2c;
        background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
        background-attachment: fixed;
        
        padding: scale(8px);
        min-height: 100%;

        @import '../style.scss';
    }
    .container{
        display:flex;
        justify-content: center;
    }

</style>

<!-- TODO: data-theme set to current theme with js -->
<div class="main-layout" data-theme=Electra>
    <Nav/>
    <div class="container">
        <slot/>
    </div>
    <Footer/>
</div>