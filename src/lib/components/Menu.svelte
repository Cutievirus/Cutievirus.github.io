<script lang="ts">
    import MessageWindow from "./MessageWindow.svelte";

    export let direction:'up'|'down'='down';
    export let align:'left'|'right'|'center'='center';

</script>
<div class="menu-wrapper" tabindex="0" role="menu">
    <div class="menu-button"><slot name="open"/></div>
    <menu data-direction={direction} data-align={align}>
        <MessageWindow>
            <slot/>
        </MessageWindow>
    </menu>
</div>

<style lang="scss">
    menu[data-direction="up"]{
        bottom: 100%;
        transform-origin: bottom center;
    }
    menu[data-direction="down"]{
        top: 100%;
        transform-origin: top center;
    }
    menu[data-align="right"]{
        right: 0;
    }
    menu[data-align="left"]{
        left: 0;
    }
    menu[data-align="center"]{
        left: 50%;
        translate: -50% 0;
    }
    .menu-wrapper>menu{
        transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
        transform: scaleY(0);
        opacity: 0;
        pointer-events: auto;
        position: absolute;
        width:max-content;
        border: 1px solid transparent;
        border-radius: 3px;
        z-index: 1;
    }
    menu{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .menu-wrapper{
        display: inline-block;
        position:relative;
        user-select: none;
        &:focus-within{
            pointer-events: none;
            &>menu{
                //transition: transform 0.2s $ease-out-elastic, opacity 0.1s ease-in-out;
                transform: scaleY(1);
                opacity: 1;
            }
        }
    }
    .menu-button{
        cursor:pointer;
    }
</style>