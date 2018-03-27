 // Get the values that were typed in the name and description fields
    function addItemTwo(event) {

    tday = new Array("Sun","Mon","Tue","Wed","Thur","Fri","Sat");
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

        
    
    var date =  document.getElementById("date-two").innerHTML = ""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";  
    var lossTime = document.getElementById("loss-time-two").value;
    var reasonLossTime = document.getElementById("reason-loss-time-two").value;
    var actionTaken = document.getElementById("action-taken-two").value;
    var waste = document.getElementById("waste-two").value;
    var numberLbs = document.getElementById("number-lbs-two").value;
    var employeeName = document.getElementById("employee-name-two").value;
    
  
    // For debugging purposes to see what we typed in the input fields
    console.log("You typed: ",  date   );

    // Create a new table row on the fly
    var newRow = document.createElement("tr");
    

    // Add table cells to the new table row
    var fields = [
        date, 
        lossTime + ' Min ',  
        reasonLossTime,
        actionTaken,
        waste,
        numberLbs + " lbs ",
        employeeName,
    ];

    console.log(lossTime)
    for(var index = 0; index < fields.length; index++) {
        newRow.innerHTML += "<td>" + fields[index] + "</td>";
        
    }
    var fieldIds = [
        "date-two", 
        "loss-time-two",
        "reason-loss-time-two", 
        "action-taken-two",
        "waste-two",
        "number-lbs-two",
        "employee-name-two", 
    ];

    // Clear up the form fields
    for (var index = 0; index < fieldIds.length; index++) {
        document.getElementById(fieldIds[index]).value = '';

        
    }

    
    // Finally add the new record (new row) to the end of the table
    document.getElementById("list-two").appendChild(newRow);


    // clear a single row when being created
     var button = document.createElement('button');
     var btnText = document.createTextNode('-');
     button.setAttribute('class', "clrBtn");
     button.setAttribute('title', 'CLEAR INPUT')
     //button.setAttribute('onClick', 'clearButton();');
     button.appendChild(btnText);
     newRow.appendChild(button);


     var newButton = document.querySelectorAll(".clrBtn");
     

     for(var i = 0; i < newButton.length; i++) {
        newButton[i].addEventListener('click', clearButtonTwo);
        
        
     }

     
     

     function clearButtonTwo () {
        var pass_entered;
        var password="clr";

     while (pass_entered!=password) {
    pass_entered=prompt('Please enter the password:','');
    }
       newRow.innerHTML = ""; 
     }
     
    
 };