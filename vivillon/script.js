var img_url = "/themes/cutievirus/assets/page/vivillon/img/";
// get elements
var colorPicker = document.getElementById("colorPicker");
var colorText = document.getElementById("colorText");
var colorTable = document.getElementById("colorTable");
var generatorDiv = document.getElementById("generators");
var wrapper = document.getElementById("wrapper");
var autoGenerate = document.getElementById("autoGenerate");
var controlsDiv = document.getElementById("controls");
// populate table
var colorMap = [];
colorMap.width=9;
colorMap.height=14;
var x,y;
for(y=0;y<colorMap.height;++y){
	colorMap[y]=[];
	var tr = document.createElement("tr");
	colorTable.appendChild(tr);
	for(x=0;x<colorMap.width;++x){
		td = document.createElement("td");
		colorMap[y][x]=td;
		if(y>0&&x===0 || y>7&&x===1){
			td.classList.add("inactive");
		}else{
			td.style.backgroundColor="#ffffff";
			td.setAttribute("data-color","#ffffff");
			td.setAttribute("data-x",x);
			td.setAttribute("data-y",y);
			td.x=x;
			td.y=y;
			td.classList.add("active");
			td.addEventListener("click",draw_click);
			td.addEventListener("mousemove",draw_move);
		}
		tr.appendChild(td);
	}
}
//loading images
var generators={};
imageLoader={
	base:function(){
		var generator = generators[this.getAttribute("data-name")];
		generator.base=getPixels(this);
		//generator.context.drawImage(this,0,0);
		//generator.context.putImageData(generator.base,0,0);
		check_fully_loaded(generator);
	},
	wings:function(){
		var generator = generators[this.getAttribute("data-name")];
		generator.wings=getPixels(this);
		check_fully_loaded(generator);
	},
	overlay:function(){
		var generator = generators[this.getAttribute("data-name")];
		generator.overlay=getPixels(this);
		check_fully_loaded(generator);
	}
};
function check_fully_loaded(generator){
	if(generator.base&&generator.wings&&generator.overlay){
		generator.loaded=true;
		generator.button.disabled=false;
		generator.save_button.disabled=false;
		generate.call(generator);
	}
}
function loadImage(name,url,callback){
	var img = document.createElement("img");
	img.addEventListener("load",callback);
	img.setAttribute("data-name",name);
	img.src=url;
}
function getPixels(img){
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	var context = canvas.getContext("2d");
	context.drawImage(img,0,0);
	return context.getImageData(0,0,canvas.width,canvas.height);
}
loadImage("colorMap",img_url+"colorMap.png",function(){
	colorMap.template=getPixels(this);
	createGenerator(80,80,"front");
	createGenerator(80,80,"back");
	createGenerator(80,80,"back2");
});
// create generators
function createGenerator(x,y,name){
	var generator = document.createElement("div");
	generator.className="generator";
	/*
	var heading = document.createElement("h2");
	heading.className="heading";
	heading.appendChild(document.createTextNode(name));
	generator.appendChild(heading);
	*/
	// create canvas
	var canvas = document.createElement("canvas");
	canvas.width = x;
	canvas.height = y;
	generator.appendChild(canvas);
	generators[name]={
		canvas:canvas,
		context:canvas.getContext('2d')
	};
	// generate button
	var button = document.createElement("button");
	button.disabled=true;
	button.appendChild(document.createTextNode("Generate"));
	generator.appendChild(button);
	generators[name].button=button;
	button.addEventListener("click",generate.bind(generators[name]));
	// save button
	var save_button = document.createElement("button");
	save_button.disabled=true;
	save_button.appendChild(document.createTextNode("Save"));
	generator.appendChild(save_button);
	generators[name].save_button=save_button;
	save_button.addEventListener("click",save_canvas.bind(canvas,"vivillon_"+name+".png"));
	//save_button.addEventListener("click");
	// append generator
	generatorDiv.appendChild(generator);
	// load images
	loadImage(name,img_url+name+"_base.png",imageLoader.base);
	loadImage(name,img_url+name+"_wings.png",imageLoader.wings);
	loadImage(name,img_url+name+"_overlay.png",imageLoader.overlay);
}
function generate(){
	if(!this.loaded){ return; }
	this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
	this.context.putImageData(this.base,0,0);
	var colors={};
	for(var j=0; j<colorMap.template.data.length;j+=4){
		var cell = colorMap[Math.floor(j/4/colorMap.width)][j/4%colorMap.width];
		var cell_color = cell.getAttribute("data-color");
		if(cell_color==null){ continue; }
		var to_color;
		if(colors[cell_color]){
			to_color=colors[cell_color];
		}else{
			to_color = {
				r:parseInt(cell_color.substr(1,2),16),
				g:parseInt(cell_color.substr(3,2),16),
				b:parseInt(cell_color.substr(5,2),16),
				cache:{255:cell_color}
			};
			colors[cell_color]=to_color;
		}

		for(var i=0; i<this.wings.data.length;i+=4){
			if(colorMap.template.data[j]===this.wings.data[i]
			&&colorMap.template.data[j+1]===this.wings.data[i+1]
			&&colorMap.template.data[j+2]===this.wings.data[i+2]){
				if(to_color.cache[this.overlay.data[i]]){
					this.context.fillStyle=to_color.cache[this.overlay.data[i]];
				}else{
					var overlay = Math.pow(this.overlay.data[i],2)/65025;
					this.context.fillStyle="rgb("+
						Math.round(Math.sqrt(Math.pow(to_color.r,2)*overlay))+","+
						Math.round(Math.sqrt(Math.pow(to_color.g,2)*overlay))+","+
						Math.round(Math.sqrt(Math.pow(to_color.b,2)*overlay))+
					")";
					to_color.cache[this.overlay.data[i]]=this.context.fillStyle;
				}
				this.context.fillRect(i/4%this.wings.width,Math.floor(i/4/this.wings.width),1,1);
			}
			
		}
	}
}
function generate_all(){
	for (var name in generators){
		generate.call(generators[name]);
	}
}
function save_canvas(filename){ // bind me!
	this.toBlob(function(blob){
		saveAs(blob,filename);
	});
}
//presets
var preset_canvas=document.createElement("canvas");
preset_canvas.width=colorMap.width;
preset_canvas.height=colorMap.height;
var preset_context=preset_canvas.getContext("2d");
var preset_save_button=document.getElementById("preset_save");
var preset_load_button=document.getElementById("preset_load");
var preset_load_file=document.getElementById("preset_load_file");
preset_save_button.addEventListener("click",function(){
	//fill preset
	for (var y=0; y<colorMap.height; ++y)
	for (var x=0; x<colorMap.width; ++x){
		var cell = colorMap[y][x];
		var color = cell.getAttribute("data-color");
		if(color==null){ color="#000000"; }
		preset_context.fillStyle=color;
		preset_context.fillRect(x,y,1,1);
	}
	//open save dialog
	save_canvas.call(preset_canvas,"vivillon_preset.png");
});
preset_load_button.addEventListener("click",function(){
	preset_load_file.click();
});
preset_load_file.addEventListener("change",function(){
	if (!this.files){return;}
	var fr = new FileReader();
	fr.onload= preset_file_loaded;
	fr.readAsDataURL(this.files[0]);
});
function preset_file_loaded(e){
	preset_img.src=this.result;
}
var preset_img = document.createElement("img");
preset_img.addEventListener("load",function(){
	preset_context.drawImage(preset_img,0,0);
	var data = preset_context.getImageData(0,0,preset_canvas.width,preset_canvas.height).data;
	// load preset
	for (var y=0; y<colorMap.height; ++y)
	for (var x=0; x<colorMap.width; ++x){
		var cell = colorMap[y][x];
		if(!cell.getAttribute("data-color")){ continue; }
		var i = 4*(x+y*colorMap.width);
		var color = "#"+hexpad(data[i],2)+hexpad(data[i+1],2)+hexpad(data[i+2],2);
		cell.style.backgroundColor=color;
		cell.setAttribute("data-color",color);
	}
	generate_all();
});
preset_img.addEventListener("error",function(){
	alert("Error loading preset image!");
});

function hexpad(num,digits){
	return (new Array(digits+1).join(0)+num.toString(16)).substr(-digits);
}

// input and drawing
document.addEventListener("keydown",check_modifier);
document.addEventListener("keyup",check_modifier);
var bodyClassIndex=Array.prototype.indexOf.bind(document.body.classList);
function check_modifier(e){
	if(bodyClassIndex("control")>=0){
		if(!e.ctrlKey){ document.body.classList.remove("control"); }
	}else{
		if(e.ctrlKey){ document.body.classList.add("control"); }
	}
	if(bodyClassIndex("shift")>=0){
		if(!e.shiftKey){ document.body.classList.remove("shift"); }
	}else{
		if(e.shiftKey){ document.body.classList.add("shift"); }
	}
}

function draw_click(e){
	e.preventDefault();
	if(e.shiftKey){
		bucket_fill(+this.getAttribute("data-x"),+this.getAttribute("data-y"),this.getAttribute("data-color"));
		if(autoGenerate.checked){ generate_all(); }
	}else if(e.ctrlKey){
		colorPicker.value=this.getAttribute("data-color");
		colorPicker_change();
	}else{
		if(this.getAttribute("data-color"===colorPicker.value)){ return; }
		this.style.backgroundColor=colorPicker.value;
		this.setAttribute("data-color",colorPicker.value);
		if(autoGenerate.checked){ generate_all(); }
	}
}
function draw_move(e){
	check_modifier(e);
	e.preventDefault();
	if(!e.buttons || e.ctrlKey || e.shiftKey){ return; }
	if(this.getAttribute("data-color"===colorPicker.value)){ return; }

	this.style.backgroundColor=colorPicker.value;
	this.setAttribute("data-color",colorPicker.value);
	if(autoGenerate.checked){ generate_all(); }
}
function bucket_fill(x,y,from_color){
	if(from_color===colorPicker.value || !colorMap[y]){ return; }
	var cell = colorMap[y][x];
	if(!cell){ return; }
	var color = cell.getAttribute("data-color");
	if(color!==from_color){ return; }
	cell.style.backgroundColor=colorPicker.value;
	cell.setAttribute("data-color",colorPicker.value);
	bucket_fill(x+1,y,from_color);
	bucket_fill(x,y+1,from_color);
	bucket_fill(x-1,y,from_color);
	bucket_fill(x,y-1,from_color);
}

// color validation
function colorPicker_change(){
	var color = validate_color(colorPicker.value.slice(1));
	if(color){
		colorText.value=color;
	}else{
		colorPicker.value="#ffffff";
		colorText.value="ffffff";
	}
	colorText.style.backgroundColor="";
}
function colorText_change(){
	var color = validate_color(colorText.value);
	if(color && colorText.value.length===6){
		colorText.style.backgroundColor="";
		colorPicker.value="#"+color;
	}else{
		colorText.style.backgroundColor="#ff7777";
	}
}
function validate_color(string){
	var color = parseInt(string,16);
	if(isNaN(color)){ return false; }
	return hexpad(color,6);
}
colorPicker.addEventListener("change",colorPicker_change);
colorText.addEventListener("input",colorText_change);
colorPicker_change();