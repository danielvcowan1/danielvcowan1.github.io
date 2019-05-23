// Head spinner
// Event listener on load event performs nested function
window.addEventListener("load", function(){
	var items_container = document.getElementById("items_container");
	var thumbtimer, ti=0, dir="img/";
	// JSON object with value as an array of images
	var head = { name:"Dan", pics:["dan1.jpg","dan2.jpg","dan3.jpg","dan4.jpg","dan5.jpg","dan6.jpg","dan7.jpg","dan8.jpg"]};
	// Dynamically create div > img > span elements
	var div = document.createElement("div");
	var img = document.createElement("img");
	var span = document.createElement("span");
	
	div.className = "item"; // Connect new div to css rule
	img.src = dir + head.pics[0]; // set image source attribute to render into image element
	items_container.appendChild(div); // put dynamically created div to render in html
	div.appendChild(img); // put dynamically created img into div
	div.appendChild(span); // put dynamically created span into div

	// Event listener on mouseover event on image element performs nested function
	img.addEventListener("mouseover", function(event){
		thumbtimer = setInterval(function(){
			ti++;
			if(ti == head.pics.length)
				ti = 0;
			event.target.src = dir + head.pics[ti];
			status.innerHTML = dir + head.pics[ti];
		}, 200);
	});
	// Event listener on mouseout event on image element performs nested function
	img.addEventListener("mouseout", function(event){
		clearInterval(thumbtimer);
		ti = 0;
		event.target.src = dir + head.pics[ti];
	});
});
