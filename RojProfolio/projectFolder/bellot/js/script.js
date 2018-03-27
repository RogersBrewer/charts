// info for pulic toilets




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

var myDate = new Date(); 

 var greeting = document.getElementById("dayGreeting") 
/* hour is before noon */
if ( myDate.getHours() < 12 )  
{ 
   var para = document.createElement("p")
   var t = document.createTextNode("Good Morning!")
   para.appendChild(t)
   document.getElementById("dayGreeting").appendChild(para)

     
} 
else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 ) 
{ 
   var para = document.createElement("p")
   var t = document.createTextNode("Good Afternoon!")
   para.appendChild(t)
   document.getElementById("dayGreeting").appendChild(para)

} 
else  /* the hour is after 5pm, so it is between 6pm and midnight */
if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ) 
{ 
   var para = document.createElement("p")
   var t = document.createTextNode("Good Evening!")
   para.appendChild(t)
   document.getElementById("dayGreeting").appendChild(para)
    
} 
else  /* the hour is not between 0 and 24, so something is wrong */
{ 
    document.write("I'm not sure what time it is!"); 
}

// var yourName = prompt("What Your Name")
// if (yourName != null) {
//         document.getElementById("urName").innerHTML = yourName
        
//     }

// document.getElementById("") 
  

  

function publicToilets () {
	alert("PUBLIC TOILETS\n \nMany common community areas, particularly those close to the shoreline, are without toilets, resulting in water contamination from human waste. In 2008, Bellot Idovia funded and facilitated the building of 3 public toilets in the town of Lavalle on La Toti. Similar projects in surrounding towns are in the planning stage. We will also be collaborating with S.O.I.L. to build sustainable composting toilets in the near future.");

};

// info for building Health Care Infrastructure

function buildingHealthCareInfrastructure()  {
	alert("BUILDING HEALTH CARE INFRASTRUCTURE:\n \nSince 2007, Bellot Idovia has been coordinating with local nurses and doctors to upgrade the community clinic and make health care more accessible. Over the past few years, we have repainted the clinic, put in new windows and doors, installed a generator, and brought 3 separate shipments of sorely needed medications.");
};

// info for la Pwopt Bel

function laPwoptBel() {
	alert("LA PWOPTE BEL:\n\nIn 2008, we organized, supplied, and facilitated a twice-weekly community clean-up crew called La Pwopte Bel. Focusing on the coastal areas, this large group of young residents continues to clean and maintain La Toti, while spreading the message that “Cleanliness is Beautiful.” We are expanding this program town by town around the island.");
};

// info for sustainable Energy

function sustainableEnergy() {
	alert("SUSTAINABLE ENERGY:\n\nIn November of 2009, we helped the people of La Toti install solar panels on the community clinic and public toilets. Solar expert Bruce Gardiner went to La Toti with BIF members and showed local residents how to install and maintain solar panels, beginning the local development of renewable power.");
};
	
 