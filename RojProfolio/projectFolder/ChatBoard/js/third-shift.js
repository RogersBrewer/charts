
   

            //  **************************************
            //  * third Shift  Time Loss Panel One *
            //  **************************************


function addItemThirdOne(event) {
    var lossTime = document.getElementById("loss-time-third-one").value;
    var reasonLossTime = document.getElementById("reason-loss-time-third-one").value;

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
    var dateAndTime = document.getElementById('date-time-third-one')
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
        "loss-time-third-one",
        "reason-loss-time-third-one"
    ];
// ***** Clear up the form fields *****

    for (var i = 0; i < fieldIds.length; i++) {
        document.getElementById(fieldIds[i]).value = '';
    }

// ***** Finally add the new record (new row) to the end of the table

        document.getElementById("list-third-one").appendChild(newRow);
}

// ***** Adding Comment To Panel One *****

function commentPanelThirdOne (){
    var item = document.getElementById("comment-input-third-one").value;
    var text = document.createTextNode(item);
    var li = document.createElement("li");
        li.appendChild(text);
        document.getElementById("comment-list-third-one").appendChild(li);
}


                // *************************************
                //  *  third Shift  Scrap  Panel Two *
                // *************************************


function addItemThirdTwo(event) {
    var scrap = document.getElementById("scrap-third-shift").value;
    var reasonScrapLoss = document.getElementById("reason-scrap-third-shift").value;

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
    var dateAndTime = document.getElementById('date-time-third-shift-two')
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
        "scrap-third-shift",
        "reason-scrap-third-shift"
    ];

// ***** Clear up the form fields *****

    for (var i = 0; i < fieldIds.length; i++) {
        document.getElementById(fieldIds[i]).value = '';
    }

// ***** Finally add the new record (new row) to the end of the table *****

        document.getElementById("list-third-shift-two").appendChild(newRow);
}

// ***** Adding comment to Panel Two *****

function commentPanelThirdTwo (){
    var item = document.getElementById("comment-input-third-two").value;
    var text = document.createTextNode(item);
    var li = document.createElement("li");
        li.appendChild(text);
        document.getElementById("todo-list-third-two").appendChild(li);
}


              // ***************************************************
              //  * third Shift  Employee Recognition Panel Three *
              // ***************************************************

function addItemthirdThree(event) {
    var fromWho = document.getElementById("from-who-third-three").value;
    var employeeName = document.getElementById("employee-name-third-three").value;

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
    var dateAndTime = document.getElementById('date-time-third-three')
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
        "from-who-third-three",
        "employee-name-third-three"
    ];
// ***** Clear up the form fields *****

    for (var i = 0; i < fieldIds.length; i++) {
        document.getElementById(fieldIds[i]).value = '';
}

// ***** Finally add the new record (new row) to the end of the table *****
        document.getElementById("list-third-shift-three").appendChild(newRow);


}

// ***** Adding comment to Panel Three *****

function commentPanelThirdThree (){
    var item = document.getElementById("comment-input-third-three").value;
    var text = document.createTextNode(item);
    var li = document.createElement("li");
        li.appendChild(text);
        document.getElementById("todo-list-third-three").appendChild(li);
}

