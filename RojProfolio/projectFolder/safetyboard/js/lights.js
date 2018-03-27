

var colorLights = document.getElementById('color-lights')
var text = ['Accident Free','Near Miss','Accident']
var tracker = 1;


function greenLight() {
colorLights.style.backgroundColor = 'green';
colorLights.textContent = text[0]
tracker++
}

function yellowLight() {
colorLights.style.backgroundColor = 'yellow';
colorLights.textContent = text[1]
}

function redLight() {
colorLights.style.backgroundColor = 'red';
colorLights.textContent = text[2]
}

