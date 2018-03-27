
	// create all the element, in a for loop
for (var i = 0; i < 108; i++) {
	var body = document.getElementById('bodyDiv')
	var div = document.createElement('div')
    var input = document.createElement('input')
    input.setAttribute('onchange','userInput()')
    
    div.className = 'box'

	div.appendChild(input)	
	body.appendChild(div)

	//  id on all the input using the for loop 
	document.getElementsByTagName("input")[i].id = "input" + i 
	//  ids on all the div with the class box using the for loop
	 document.getElementsByClassName('box')[i].id = 'boxes' + i	
	 
	
};


// numders in-side the input box, using a placeholder for each word
document.getElementById('input0' ).placeholder =  "1" 
document.getElementById('input27' ).placeholder = "2"
document.getElementById('input86' ).placeholder = "3"
document.getElementById('input26' ).placeholder = "4"
document.getElementById('input63' ).placeholder = "5"
document.getElementById('input46' ).placeholder = "6"
document.getElementById('input6'  ).placeholder = "7"
document.getElementById('input11' ).placeholder = "8"
document.getElementById('input61' ).placeholder = "9"	

function userInput () {
// getting all the input value when the user input letter and put it into a var	 1.
                  // down answers
var input0  = document.getElementById('input0')
var input12 = document.getElementById('input12')
var input24 = document.getElementById('input24')
var input36 = document.getElementById('input36')
var input48 = document.getElementById('input48')
// getting all the input value when the user input letter and put it into a var	 2.
var input27 = document.getElementById('input27')
var input39 = document.getElementById('input39')
var input51 = document.getElementById('input51')
var input63 = document.getElementById('input63')
var input75 = document.getElementById('input75')
var input87 = document.getElementById('input87')
// getting all the input value when the user input letter and put it into a var	 6.
var input46 = document.getElementById('input46')
var input58 = document.getElementById('input58')
var input70 = document.getElementById('input70')
var input82 = document.getElementById('input82')
// getting all the input value when the user input letter and put it into a var	 8.
var input11 = document.getElementById('input11')
var input23 = document.getElementById('input23')
var input35 = document.getElementById('input35')
// getting all the input value when the user input letter and put it into a var	 9.
var input61 = document.getElementById('input61')
var input73 = document.getElementById('input73')
		// input value for each box putting it into a var for down words
var wordOneDown = input0.value + input12.value + input24.value + input36.value + input48.value // word one down (array)
var wordTwoDown = input27.value + input39.value + input51.value + input63.value + input75.value + input87.value // word two down (number)
var wordSixDown = input46.value + input58.value + input70.value + input82.value  // word six down (else)
var wordEightDown = input11.value + input23.value + input35.value // word eight down (css)
var wordNineDown = input61.value + input73.value  // word nine down (if)
				// across answers
// getting all the input value when the user input letter and put it into a var	 1.				
var input0 = document.getElementById('input0')
var input1 = document.getElementById('input1')
var input2 = document.getElementById('input2')
var input3 = document.getElementById('input3')
var input4 = document.getElementById('input4')
// getting all the input value when the user input letter and put it into a var	 3.
var input86 = document.getElementById('input86')
var input87 = document.getElementById('input87')
var input88 = document.getElementById('input88')
var input89 = document.getElementById('input89')
var input90 = document.getElementById('input90')
var input91 = document.getElementById('input91')
var input92 = document.getElementById('input92')
var input93 = document.getElementById('input93')

// getting all the input value when the user input letter and put it into a var	 4.
var input26 = document.getElementById('input26')
var input27 = document.getElementById('input27')
var input28 = document.getElementById('input28')
var input29 = document.getElementById('input29')
var input30 = document.getElementById('input30')

// getting all the input value when the user input letter and put it into a var	 5.
var input63 = document.getElementById('input63')
var input64 = document.getElementById('input64')
var input65 = document.getElementById('input65')
var input66 = document.getElementById('input66')
var input67 = document.getElementById('input67')
var input68 = document.getElementById('input68')
var input69 = document.getElementById('input69')
var input70 = document.getElementById('input70')
// getting all the input value when the user input letter and put it into a var	 7.
var input6 = document.getElementById('input6')
var input7 = document.getElementById('input7')
var input8 = document.getElementById('input8')
var input9 = document.getElementById('input9')
	

		// input value for each box putting it into a var for acroos words
var wordOneAcross = input0.value + input1.value + input2.value + input3.value + input4.value // word one acroos (alert)
var wordThreeAcross = input86.value + input87.value + input88.value + input89.value + input90.value + input91.value + input92.value + input93.value// word three across (frontend)
var wordFourAcross = input26.value + input27.value + input28.value + input29.value + input30.value // word four acroos (index)
var wordFiveAcross = input63.value + input64.value + input65.value + input66.value + input67.value + input68.value + input69.value + input70.value// word three across (booleans)
var wordSevenAcross = input6.value + input7.value + input8.value + input9.value // word Seven acroos (html)

// array with the answers, using one letter per index #

var arr1 = [ 'a', 'l', 'e', 'r', 't', 0, 'h', 't', 'm', 'l', 0, 'c' ]
var arr2 = [ 'r', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 's' ]
var arr3 = [ 'r', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 's' ]
var arr4 = [ 'a', 0, 'i', 'n', 'd', 'e', 'x', 0, 0, 0, 0, 0 ]
var arr5 = [ 'y', 0, 0, 'u', 0, 0, 0, 0, 0, 0, 'e', 0 ]
var arr6 = [ 0, 0, 0, 'm', 0, 0, 0, 0, 0, 0, 'l', 0 ]
var arr7 = [ 0, 0, 0, 'b', 'o', 'o', 'l', 'e', 'a', 'n', 's', 0 ]
var arr8 = [ 'i', 0, 0, 'e', 0, 0, 0, 0, 0, 0, 'e', 0 ]
var arr9 = [ 'f', 0, 'f', 'r', 'o', 'n', 't', 'e', 'n', 'd', 0, 0 ] 
		// add index  for each word, for the down words 
var downOne = arr1[0] + arr2[0] + arr3[0] + arr4[0] + arr5[0]
var downTwo = arr4[3] + arr5[3] + arr6[3] + arr7[3] + arr8[3] + arr9[3]
var downSix = arr5[10] + arr6[10] + arr7[10] + arr8[10]
var downEight = arr1[11] + arr2[11] + arr3[11]
var downNine = arr8[0] + arr9[0] 
		// add index  for each word, for the across words 
var acrossOne = arr1[0] + arr1[1] + arr1[2] + arr1[3] + arr1[4]
var acrossThree = arr9[2] + arr9[3] + arr9[4] + arr9[5] + arr9[6] + arr9[7] + arr9[8] + arr9[9]
var acrossFour = arr4[2] + arr4[3] + arr4[4] + arr4[5] + arr4[6]
var acrossFive = arr7[3] + arr7[4] + arr7[5] + arr7[6] + arr7[7] + arr7[8] + arr7[9] + arr7[10]
var acrossSeven = arr1[6] + arr1[7] + arr1[8] + arr1[9]

if (downOne == wordOneDown ) {
		input0.className =  'sucess'
		input12.className = 'sucess'
		input24.className = 'sucess'
		input36.className = 'sucess'
		input48.className = 'sucess'		
	} else if (downOne != wordOneDown ){
		input0.className =  'fail'
		input12.className = 'fail'
		input24.className = 'fail'
		input36.className = 'fail'
		input48.className = 'fail'
	}

if (downTwo == wordTwoDown) {
		input27.className = 'sucess'
		input39.className = 'sucess'
		input51.className = 'sucess'
		input63.className = 'sucess'
		input75.className = 'sucess'
		input87.className = 'sucess'
	} else if (downTwo != wordTwoDown) {
		input27.className = 'fail'
		input39.className = 'fail'
		input51.className = 'fail'
		input63.className = 'fail'
		input75.className = 'fail'
		input87.className = 'fail'
	}
if (downSix == wordSixDown) {
		input46.className = 'sucess'
		input58.className = 'sucess'
		input70.className = 'sucess'
		input82.className = 'sucess'
	} else if (downSix != wordSixDown) {
		input46.className = 'fail'
		input58.className = 'fail'
		input70.className = 'fail'
		input82.className = 'fail'
	}

if (downEight == wordEightDown) {
		input11.className = 'sucess'
		input23.className = 'sucess'
		input35.className = 'sucess'		
	} else if (downEight != wordEightDown){
		input11.className = 'fail'
		input23.className = 'fail'
		input35.className = 'fail'
	}

if (downNine == wordNineDown) {
		input61.className = 'sucess'
		input73.className = 'sucess'				
	} else if (downNine != wordNineDown){
		input61.className = 'fail'
		input73.className = 'fail'
	}

if (acrossOne == wordOneAcross) {
		input0.className = 'sucess'
		input1.className = 'sucess'
		input2.className = 'sucess'
		input3.className = 'sucess'
		input4.className = 'sucess'
	} else if (acrossOne != wordOneAcross){
		input0.className = 'fail'
		input1.className = 'fail'
		input2.className = 'fail'
		input3.className = 'fail'
		input4.className = 'fail'
	}

if (acrossThree == wordThreeAcross) {
		input86.className = 'sucess'
		input87.className = 'sucess'
		input88.className = 'sucess'
		input89.className = 'sucess'
		input90.className = 'sucess'
		input91.className = 'sucess'
		input92.className = 'sucess'
		input93.className = 'sucess'
	} else if (acrossThree != wordThreeAcross){
		input86.className = 'fail'
		input87.className = 'fail'
		input88.className = 'fail'
		input89.className = 'fail'
		input90.className = 'fail'
		input91.className = 'fail'
		input92.className = 'fail'
		input93.className = 'fail'
	}
if (acrossFour == wordFourAcross) {
		input26.className = 'sucess'
		input27.className = 'sucess'
		input28.className = 'sucess'
		input29.className = 'sucess'
		input30.className = 'sucess'
	} else if (acrossFour != wordFourAcross){
		input26.className = 'fail'
		input27.className = 'fail'
		input28.className = 'fail'
		input29.className = 'fail'
		input30.className = 'fail'
	}
if (acrossFive == wordFiveAcross) {
		input63.className = 'sucess'
		input64.className = 'sucess'
		input65.className = 'sucess'
		input66.className = 'sucess'
		input67.className = 'sucess'
		input68.className = 'sucess'
		input69.className = 'sucess'
		input70.className = 'sucess'
	} else if (acrossFive != wordFiveAcross){
		input63.className = 'fail'
		input64.className = 'fail'
		input65.className = 'fail'
		input66.className = 'fail'
		input67.className = 'fail'
		input68.className = 'fail'
		input69.className = 'fail'
		input70.className = 'fail'
	}

if (acrossSeven == wordSevenAcross) {
		input6.className = 'sucess'
		input7.className = 'sucess'
		input8.className = 'sucess'
		input9.className = 'sucess'			
    } else if (acrossSeven != wordSevenAcross){
    	input6.className = 'fail'
		input7.className = 'fail'
		input8.className = 'fail'
		input9.className = 'fail'
    }

    
if ( downOne == wordOneDown && downTwo == wordTwoDown && downSix == wordSixDown && downEight == wordEightDown && acrossOne == wordOneAcross &&
	 acrossFour == wordFourAcross && acrossFive == wordFiveAcross && acrossSeven == wordSevenAcross && acrossThree == wordThreeAcross) {
     var h1 = document.createElement('h1')
    h1.setAttribute('id','words')
     var text = document.createTextNode('CODIFY ACADEMY')
    h1.appendChild(text)
    body.appendChild(h1)
};
	 
}












