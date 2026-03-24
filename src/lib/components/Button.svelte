<script lang="ts">
    import type { MouseEventHandler } from 'svelte/elements';
    import { handleMove } from './componentBehaviors';

    export let block:boolean = false;
    export let inline:boolean = !block;
	export let small:boolean = false;

	export let action:MouseEventHandler<HTMLButtonElement>|undefined=undefined;

    export let button:HTMLButtonElement|undefined = undefined;

	export let href:string|undefined = undefined;

    let element = inline ? 'span' : 'div';

    let props:typeof $$props;
    $:{
        props={...$$props};
        delete props.block;
        delete props.inline;
        delete props.button;
		delete props.small;
    }
</script>

<svelte:element this={element}>
	{#if href}
		<a {href} class:button={true} on:mousemove={handleMove} {...props} data-radius=1 class:small={small}>
			<slot/>
		</a>
	{:else}
		<button on:mousemove={handleMove} on:click={action} {...props} data-radius=1 bind:this={button} class:small={small}>
			<slot/>
		</button>
	{/if}
</svelte:element>

<style lang="scss">
	//@import '../buttonStyles.scss';
	
	button, a.button{
		display: block;
		position: relative;
		margin: scale(2px) scale(6px);
		padding: scale(6px);
		@include font12();
		font-weight: bold;
		background-color: color-mix(in srgb, var(--message-window-bg),white 10%);
		border: scale(1px) solid #fff6;
		color: inherit;
		text-shadow: inherit;
		cursor: pointer;
		background-clip:border-box;
		-webkit-background-clip: border-box;
		background-image:none;
		text-align: center;
		box-sizing: border-box;

		&:after{
			content: '';
			display: block;
			position: absolute;
			width: 100%; height: 100%; top: 0; left: 0;
			background-image: radial-gradient(circle at var(--x,50%) var(--y,50%), white, transparent);
			opacity: 0;
			transition: opacity 0.5s ease-in-out;
		}
		&:hover:after{
			opacity: .25;
		}
		&.small{
			@include font10();
			font-weight: normal;
			padding: scale(2px) scale(4px);
			margin: scale(1px) scale(2px);
		}
		div &{
			width: calc(100% - scale(32px));
			margin: scale(12px) scale(16px);
		}
	}
    
    span,div{
		filter:drop-shadow(0 scale(2px) 0 black);
		padding-top: scale(1px);
        position:relative;

        &:has(button:active), &:has(a.button:active){
            filter:drop-shadow(0 scale(1px) 0 black);
            padding-top: scale(2px);
            margin-bottom:scale(-1px);
        }
    }

	span{
        display:inline-block;
	}
</style>
