
   

            //  **************************************
            //  * Second Shift  Time Loss Panel One *
            //  **************************************


function addItemSecondOne(event) {
    var lossTime = document.getElementById("loss-time-second-one").value;
    var reasonLossTime = document.getElementById("reason-loss-time-second-one").value;

// ***** adding the date and time to the title *******
    
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
    var dateAndTime = document.getElementById('date-time-second-one')
    var title = document.createElement('title')
        title.appendChild(document.createTextNode(date))

// ***** Create a new table row on the fly *****

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
        "loss-time-second-one",
        "reason-loss-time-second-one"
    ];
// ***** Clear up the form fields *****

    for (var i = 0; i < fieldIds.length; i++) {
        document.getElementById(fieldIds[i]).value = '';
    }

// ***** Finally add the new record (new row) to the end of the table

        document.getElementById("list-second-one").appendChild(newRow);
}

// ***** Adding Comment To Panel One *****

function commentPanelOne (){
    var item = document.getElementById("comment-input-second-one").value;
    var text = document.createTextNode(item);
    var li = document.createElement("li");
        li.appendChild(text);
        document.getElementById("comment-list-second-one").appendChild(li);
}


                // *************************************
                //  *  Second Shift  Scrap  Panel Two *
                // *************************************


function addItemSecondTwo(event) {
    var scrap = document.getElementById("scrap-shift-two").value;
    var reasonScrapLoss = document.getElementById("reason-scrap-loss-two").value;

// ***** adding the date and time to the title *******

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
    var dateAndTime = document.getElementById('date-time-second-two')
    var title = document.createElement('title')
        title.appendChild(document.createTextNode(date))



// ***** Create a new table row on the fly *****

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
        "scrap-shift-two",
        "reason-scrap-loss-two"
    ];

// ***** Clear up the form fields *****

    for (var i = 0; i < fieldIds.length; i++) {
        document.getElementById(fieldIds[i]).value = '';
    }

// ***** Finally add the new record (new row) to the end of the table *****

        document.getElementById("list-second-two").appendChild(newRow);
}

// ***** Adding comment to Panel Two *****

function commentPanelTwo (){
    var item = document.getElementById("comment-list-second-two").value;
    var text = document.createTextNode(item);
    var li = document.createElement("li");
        li.appendChild(text);
        document.getElementById("todo-list-second-two").appendChild(li);
}


              // ***************************************************
              //  * Second Shift  Employee Recognition Panel Three *
              // ***************************************************

function addItemSecondThree(event) {
    var fromWho = document.getElementById("from-who-second-two").value;
    var employeeName = document.getElementById("employee-name-second-two").value;

// ***** adding the date and time to the title *******

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
    var dateAndTime = document.getElementById('date-time-second-three')
    var title = document.createElement('title')
        title.appendChild(document.createTextNode(date))



// ***** Create a new table row on the fly *****
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
        "from-who-second-two",
        "employee-name-second-two"
    ];
// ***** Clear up the form fields *****

    for (var i = 0; i < fieldIds.length; i++) {
        document.getElementById(fieldIds[i]).value = '';
}

// ***** Finally add the new record (new row) to the end of the table *****
        document.getElementById("list-second-three").appendChild(newRow);


}

// ***** Adding comment to Panel Three *****

function commentPanelThree (){
    var item = document.getElementById("comment-list-second-three").value;
    var text = document.createTextNode(item);
    var li = document.createElement("li");
        li.appendChild(text);
        document.getElementById("todo-list-comment-three").appendChild(li);
}

