const vue = new Vue({ 
	el:'#vue',
	data:{
		games:[],
	}
});

(async ()=>{
	const gameData = await (await fetch("games.json")).json();
	Vue.set(vue.$data,'games',gameData);
})();