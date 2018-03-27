


 


// Section  #1

// var firstShiftPanelOne = document.querySelector('#first-shift-panel-one');

function addItem(event) {
var lossTime = document.getElementById("loss-time").value;
var reasonLossTime = document.getElementById("reason-loss-time").value;

// tday = new Array("Sun","Mon","Tues","Wed","Thurs","Fri","Sat");
    tmonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

    
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

var date = ""+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
var dateAndTime = document.getElementById('date-time')
var title = document.createElement('title')
title.appendChild(document.createTextNode(date))



// Create a new table row on the fly
var newRow = document.createElement("tr");

newRow.setAttribute('title', date)






var fields = [
        lossTime + "  mins",  
        reasonLossTime

]; 



for (var i = 0; i < fields.length; i++) {
    newRow.innerHTML += "<td>"   +   fields[i]   +   "</td>";
     
}   

var fieldIds = [
        "loss-time",
        "reason-loss-time"
];
    // Clear up the form fields
for (var i = 0; i < fieldIds.length; i++) {
    document.getElementById(fieldIds[i]).value = '';
}

// Finally add the new record (new row) to the end of the table
    document.getElementById("list").appendChild(newRow);


}

function todoList (){
    var item = document.getElementById("todo-input").value;
    var text = document.createTextNode(item);
    var li = document.createElement("li");
    li.appendChild(text);
    document.getElementById("todo-list").appendChild(li);
}

// Section  #2

// var firstShiftPanelOne = document.querySelector('#first-shift-panel-one');

function scrapOne(event) {
var scrap = document.getElementById("scrap-shift-one").value;
var reasonScrapLoss = document.getElementById("reason-scrap-loss-one").value;

// tday = new Array("Sun","Mon","Tues","Wed","Thurs","Fri","Sat");
    tmonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

    
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

var date = ""+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
var dateAndTime = document.getElementById('date-time')
var title = document.createElement('title')
title.appendChild(document.createTextNode(date))



// Create a new table row on the fly
var newRow = document.createElement("tr");

newRow.setAttribute('title', date)






var fields = [
        scrap + "  lbs",  
        reasonScrapLoss

]; 



for (var i = 0; i < fields.length; i++) {
    newRow.innerHTML += "<td>"   +   fields[i]   +   "</td>";
     
}   

var fieldIds = [
        "scrap-shift-one",
        "reason-scrap-loss-one"
];
    // Clear up the form fields
for (var i = 0; i < fieldIds.length; i++) {
    document.getElementById(fieldIds[i]).value = '';
}

// Finally add the new record (new row) to the end of the table
    document.getElementById("list-first-shift-one").appendChild(newRow);


}

function commentPanelOneTwo (){
    var item = document.getElementById("todo-input-one-two").value;
    var text = document.createTextNode(item);
    var li = document.createElement("li");
    li.appendChild(text);
    document.getElementById("comment-list-one-two").appendChild(li);
}



// Section  #3 employee recognition


function addItemThree(event) {
var fromWho = document.getElementById("from-who").value;
var employeeName = document.getElementById("employee-name").value;

// tday = new Array("Sun","Mon","Tues","Wed","Thurs","Fri","Sat");
    tmonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

    
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

var date = ""+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
var dateAndTime = document.getElementById('date-time')
var title = document.createElement('title')
title.appendChild(document.createTextNode(date))



// Create a new table row on the fly
var newRow = document.createElement("tr");

newRow.setAttribute('title', date)






var fields = [
        fromWho,  
        employeeName

]; 



for (var i = 0; i < fields.length; i++) {
    newRow.innerHTML += "<td>"   +   fields[i]   +   "</td>";
     
}   

var fieldIds = [
        "from-who",
        "employee-name"
];
    // Clear up the form fields
for (var i = 0; i < fieldIds.length; i++) {
    document.getElementById(fieldIds[i]).value = '';
}

// Finally add the new record (new row) to the end of the table
    document.getElementById("list-first-shift-three").appendChild(newRow);


}

function commentPanelOneThree (){
    var item = document.getElementById("todo-input-one-three").value;
    var text = document.createTextNode(item);
    var li = document.createElement("li");
    li.appendChild(text);
    document.getElementById("todo-list-one-three").appendChild(li);
}



 


    // function dateAndTime() {

    // }