
//var timeLoss = document.querySelectorAll(".timeloss").addEventListener('change', addTimeLoss);

// var btn = document.getElementById('total-minutes-button');
// btn.onclick = addTimeLoss;

//  function _(id) {
// 	return document.getElementById(id);
// }




//  function draw() {

//  	var n = _("num").value;
//  	var graphValue = n.split(',');

// 	var canvas = _('myCanvas');
// 	var ctx = canvas.getContext('2d');

// 	// var scores = [];
// 	// var waste = prompt('enter amout');
// 	//scores.push(waste);
// 	var width = 40;
// 	var currX = 50;
// 	var base = 200;

// 	 ctx.fillStyle = 'green';
// 	 {10,20,30,40,50}
// 	 for (var i = 0; i < graphValue.length; i++) {
// 	 	var h =  graphValue[i];
// 	 	ctx.fillRect(currX, canvas.height - h, width, h);
// 	 	currX += width + 10;
// 	 }
// };
  
//  function reset(){
//  	var canvas = _('myCanvas');
//  	var ctx = canvas.getContext('2d');
//  	ctx.clearRect(0,0,canvas.width, canvas.height);
//  }  





// function _div(id) {
// 	return document.getElementById(id);
// }



// var sampleData = [8,100,50];

// function drawBarChart(dataset, idOfContainer) {
// 	var chartContainer = _div(idOfContainer);

// 	if(typeof(dataset) != "object") {
// 		return;
// 	}


// 	var widthOfContainer = chartContainer.scrollWidth

// 	var heightOfContainer = chartContainer.scrollHeight;

// 	var widthOfBar = parseInt(widthOfContainer / dataset.length) - 2;

// 	for(var i = 0; i < dataset.length; i++) {
// 		var divElement = document.createElement("div");
// 		divElement.setAttribute("class", "div2");

// 		divElement.style.marginLeft = parseInt(i * 2 + i * widthOfBar) + "px";
// 		divElement.style.height = parseInt(dataset[i]) + "px";
// 		divElement.style.width = parseInt(widthOfBar) + "px";
// 		divElement.style.top = (heightOfContainer - parseInt(dataset[i]) - 1) + "px";
// 		chartContainer.appendChild(divElement);
// 	}


// 	return false

// }



// drawBarChart(sampleData, "div1");



































