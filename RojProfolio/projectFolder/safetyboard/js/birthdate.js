


var body = document.getElementById('birthdate-names')
var current_date = new Date();
var day_value = current_date.getDate();		
	 
 // adding the name and day using a prompt box
function addBirthDateName () {
	var	name = prompt('ENTER FIRST AND LAST NAME AND DAY' + "\n" + 'example:  ' + "John Doe");
	var day = prompt('ENTER A DAY ' + "\n" + 'example: 13');
	body.innerHTML += name + ' ' + day + "<br>"
	console.log(day_value);

	if( day == day_value) { 
		document.getElementById('happy-birthday').innerHTML = "Happy Birthday ";
		document.getElementById('happy-birthday-names').innerHTML += name + "<br>";
	} 
	
}
// getting the month
var months = new Array(12);
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

function addBirthDateMonth() {
	
	month_value = current_date.getMonth();
	var monthbody = document.getElementById('birthday-month');
	monthbody.innerHTML = months[month_value]

}





    
    
   
    







	


// getting thr month for the birthdate
// var month = [];

// function addBirthDateMonth() {
// 	month = prompt('BIRTHDAY MONTH')
// 	var body = document.getElementById('birthday-month')
// 	var text = document.createTextNode(month)
// 	body.appendChild(text)
// }

// // adding number of accident free days
// var days = [];

// function safeDays() {
// 	days = prompt('Number Of Days Being Safe')
// 	var body = document.getElementById('acdent-free')
//     body.textContent = days

// }














