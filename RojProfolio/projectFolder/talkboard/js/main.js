
// let inputBody = document.querySelector('#add-input');

// let input = document.createElement('input');

// inputBody.appendChild(input);

tday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock(){
var d = new Date();
var nday = d.getDay(),nmonth = d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
if(nyear<1000) nyear += 1900;
var nhour=d.getHours(),nmin = d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap =" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}

 





// let inputBody = document.querySelector('#add-input');
// let inputDate = new Date();


// function addInput() {
// 	let li = document.createElement('LI');
//     let input = document.createElement('INPUT');
    
//     input.setAttribute("type", "text");
//     input.setAttribute("size", 75);
//     input.setAttribute("placeholder", "WRITE COMMENT");

//     //inputBody.appendChild(document.createTextNode(inputDate));
//     li.appendChild(input);
//     inputBody.appendChild(li);
   
    
// }

function clearInput() {
    inputBody.innerHTML = '';

    //get OL element
    //set OL element = ""
}