import { page } from '$app/stores';
import { beforeUpdate, onMount  } from 'svelte';
import { type Writable,get } from 'svelte/store';

export const handleMove = (event:MouseEvent)=>{
	if(!(event.target instanceof HTMLElement)) return;
	const {left,top} = event.target.getBoundingClientRect();
	event.target.style.setProperty('--x',`${event.clientX - left}px`);
	event.target.style.setProperty('--y',`${event.clientY - top}px`);
};

export const retainFocus = (selector:string,form:Writable<Record<string,unknown>>,field:string)=>{
	let element:HTMLInputElement|null, isFocused:boolean;
	beforeUpdate (() => {
		if(element) return;
		element = document.querySelector(selector);
		if(!element) return;
		isFocused = document.activeElement===element;
		switch(element.nodeName){
			case 'INPUT':
				form.set({...get(form),[field]:element.value});
				break;
		}
	});
	onMount(()=>{
		if(element&&isFocused)element.focus();
	});
};

export function isConnected(){
	// @ts-ignore
	return page.host==undefined?false:true;
}

export function keyboardClick(event:KeyboardEvent){
	if(!(event.target instanceof HTMLElement)) return;
	if(event.key==' '||event.key=='Enter'){
			event.target.click();
	}
}