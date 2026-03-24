<script lang="ts">
    import Color from "color";
    import Clearfix from "./Clearfix.svelte";

	export let shrink:boolean=false;
	export let sticky:boolean=false;
	export let wide:boolean=false;

	//export let bg = "hsl(240,50%,50%)";
	export let bg = "hsl(240,30%,30%)";
	let bgColor:Color, hue:string, smallColor:string;
	$:{
		bgColor=Color(bg);
		bgColor=bgColor.lightness(Math.max(20,Math.min(80,bgColor.lightness())));
		bg=bgColor.string();
		hue = bgColor.hue()-20+"deg";
		smallColor = bgColor.lightness(bgColor.lightness()+(100-bgColor.lightness())/2).string();
	}

	let innerHeight:number;
	let clientHeight:number;
</script>

<style lang="scss">
	:global(.main-layout[data-theme*="2k3"]){
		.message-window{
			border:scale(2px) double white;
		}
		.message-window::before{
			border-image-source: url("/img/border.png");
			border-image-slice: 8;
			border-image-width: scale(8px);
			border-image-outset: scale(4px);
			border-image-repeat: round;
		}
	}
	:global(.main-layout:not([data-theme*="2k3"])){
		.message-window{
			border-radius: scale(5px);
			box-sizing: border-box;
			margin: scale(2px);
			padding: scale(6px);
			border: 1px solid #fff6;
			box-shadow: 0 scale(5px) scale(10px) #0006;
		}
		/*
		.message-window::before{
			border-radius: scale(5px);
			border:scale(2px) ridge #fcc;
			box-sizing: border-box;
			box-shadow: inset scale(1px) scale(1px) 0 0 #000, scale(1px) scale(1px) 0 0 #000;
		 }
		*/
	}

	$maxWidth:calc(100vw - scale(8px));
	.message-window{
		//display: inline-block;
		image-rendering: pixelated;
		margin:scale(2px);
		padding:scale(2px);
		position:relative;
		background-color: var(--message-window-bg,hsl(320,50%,50%));
		background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
		background-attachment: var(--message-window-bg-attach,initial);
		max-width: min($maxWidth, scale(416px));

		flex-shrink: 0;
		flex-grow: 100;
		flex-basis: scale(200px);
		text-align:left;
	}
	.message-window.wide{
		max-width: $maxWidth;
	}
	.message-window::before{
		content:"";
		width:100%;
		height:100%;
		position:absolute;
		top:0;
		left:0;
		pointer-events: none;

		filter:hue-rotate(var(--message-window-hue,0deg));
	}
	.message-window-content{
		overflow: hidden;
	}
	* :global(small), * :global(time){
		color:var(--message-window-small-color,lightslategray);
	}
	.message-window.shrink{
		display: inline-block;
		flex-grow: 0;
		flex-shrink: 1;
		flex-basis: content;
	}
	.message-window.sticky{
		position: sticky;
		top: scale(4px);
	}
	.message-window.sticky .message-window-content{
		max-height:$maxWidth;
		overflow-y:auto;
	}
</style>
<svelte:window bind:innerHeight/>
<div class="message-window" class:shrink={shrink} class:sticky={sticky} class:wide={wide} style="--message-window-bg:{bg};--message-window-hue:{hue};--message-window-small-color:{smallColor}"
bind:clientHeight style:--message-window-bg-attach={innerHeight<clientHeight?"fixed":"initial"}>
	<div class="message-window-content">
		<slot/>
	</div>
	<Clearfix/>
</div>