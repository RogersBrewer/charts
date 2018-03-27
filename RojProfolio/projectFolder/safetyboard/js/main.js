// short-cut keep from writing document.getElementById
function _(id) {
	return document.getElementById(id)
}

var safeBody = _('safe-days');

function safeDays() {
	var safeDay = parseInt(prompt('ADD A SAFE DAY'));
	
	console.log(safeDay)

	safeBody.innerHTML = safeDay;
}


// Navigator Panel
function toggleNavPanel(x){
    var panel = document.getElementById(x), navarrow = document.getElementById("navarrow"), maxH="300px";
    if(panel.style.height == maxH){
        panel.style.height = "0px";
        navarrow.innerHTML = "&#9662;";
    } else {
        panel.style.height = maxH;
        navarrow.innerHTML = "&#9652;";
    }
}
// adding your saying in array

var wss_i = 0;
var wss_array = [];
var firstSaying = document.getElementById('wss').innerHTML = 'Please Enter A Saying';
	wss_array.push(firstSaying);


// putting your saying into an array
function yourSaying() {
		let newSaying = prompt('Enter Your Saying');
		let sayingValue = newSaying;
	// if the prompt box is empty
	    while(sayingValue == ""){
			sayingValue = prompt('Enter A Saying');
		}
	//  the first index in the array get remove when the user put in a saying
		if(wss_array.length > 0 && wss_array[0] == 'Please Enter A Saying'){
			wss_array.shift();
		}
	//  push the first saying into the array
		wss_array.push(sayingValue);

	function deleteSaying() {
		var say = prompt('what do you want to delete');
		var newsay = say.split(" ,")   
      		wss_array.remove(newsay);
     		console.log(newsay)
	}  

}

function deleteSaying() {
	var say = prompt('what do you want to delete');
	var newsay = say.split(" ,")   
      	wss_array.remove(newsay);
     	console.log(newsay)
	
}

function wssNext(){
	wss_i++;
	wss_elem.style.opacity = 0;
	if(wss_i > (wss_array.length - 1)){
		wss_i = 0;
	}
		setTimeout('wssSlide()',1000);
}
function wssSlide(){
	  wss_elem.innerHTML = wss_array[wss_i];
	  wss_elem.style.opacity = 1;
	  setTimeout('wssNext()',2000);
}

wss_elem = document.getElementById("wss"); 
wssSlide();


var imagesArray = [

  'img/banners.png',
  'img/red-hanging-sign.jpg',
  'img/road-sign.jpeg',
  'img/Saying-Board.png',
  'img/signal.png',
  'img/simple-black-border.png',
  'img/stop-sign2.png',
  'img/warning-signs.png' ];


  


  
 
//  var signBody = _("sign-body");

// function getSign() {
// 	var signName = _("sign");
//     var userInputSign = signName.options[signName.selectedIndex].value;

//     if(userInputSign == 'BA') {
//     	signBody = _("sign-body").innerHTML = imgArray[0].src; 
//     } else if (userInputsign == 'RH') {
// 		signBody = _("sign-body").innerHTML = fre;
// 	} else if (userInputsign == 'RO') {
// 		signBody = _("sign-body").innerHTML = fil;
// 	} else if (userInputsign == 'SB') {
// 		langBody = _("sign-body").innerHTML = span;
// 	} else if (userInputsign == 'BB') {
// 		signBody = _("sign-body").innerHTML = fre;
// 	} else if (userInputsign == 'SS') {
// 		signBody = _("sign-body").innerHTML = fil;
// 	} else if (userInputsign == 'WS') {
// 		langBody = _("sign-body").innerHTML = span;
// 	} 
		


	

   
     
// }


// var allSigns = document.querySelectorAll(".signs")
// var i;
// for (i = 0; i < allSigns.length; i++) {
//     allSigns[i].addEventListener('click',signs , false);
// }



// var bodyImg = _('div');

// // function signs () {

	// function banners() {
	// 	var img = _('ban-signs');
 // img.setAttribute('id', '');
 // bodyImg.appendChild(img);
	
// alert('hi')
		
	 
// 	}

//}
// function redHangingSign() {
// 	var img = document.querySelectorAll(".signs")[1]
//  img.setAttribute('class', 'say_board');
//  bodyImg.appendChild(img);
	
// }

// function roadSign() {
// 	var img = document.querySelectorAll(".signs")[2]
//  img.setAttribute('class', 'say_board');
//  bodyImg.appendChild(img);
	
// }

// function sayingBoard() {
// 	var img = document.querySelectorAll(".signs")[3]
//  img.setAttribute('class', 'say_board');
//  bodyImg.appendChild(img);
	
// }

// function signal() {
// 	var img = document.querySelectorAll(".signs")[4]
//  img.setAttribute('class', 'say_board');
//  bodyImg.appendChild(img);
	
// }

// function simpleBlackBorder() {
// 	var img = document.querySelectorAll(".signs")[5]
//  img.setAttribute('class', 'say_board');
//  bodyImg.appendChild(img);
	
// }

// function stopSign() {
// 	var img = document.querySelectorAll(".signs")[6]
//  img.setAttribute('class', 'say_board');
//  bodyImg.appendChild(img);
	
// }

// function warningSigns() {
// 	var img = document.querySelectorAll(".signs")[7]
//  img.setAttribute('class', 'say_board');
//  bodyImg.appendChild(img);
	
// }

// function deleteSigns(div) {
// 	var className = div.getAttribute("class");
//   if(className=="say_board") {
//     div.className = "";
//   }
//   else{
//     div.className = "say_board";
//   }

// }







