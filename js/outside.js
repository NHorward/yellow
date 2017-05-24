// Globale variabelen
var sensorData;
// Functie die JSON data ophaalt 
// Array van data wordt toegevoegd aan var sensorData
$(document).ready(function () {
  $.ajax({
    type: "get"
    , url: "../data/data.json"
    , dataType: "json"
    , success: function (data) {
      sensorData = data.day;
      console.log(sensorData);
      showTemperature();
      showCO2();
      showIlluminance();
      showHumidity();
      showNoise();
      showPressure();
      showWindSpeed();
      showWindDirection();
    }
  });
});

function showTemperature() {
  var lastValue = sensorData.length - 1;
  var temperature = document.getElementById("tempValue");
  var temp = document.createTextNode(sensorData[lastValue].Tenvironment + "°C");
  temperature.appendChild(temp);
  
  if(parseFloat(sensorData[lastValue].Tenvironment) > -5 || parseFloat(sensorData[lastValue].Tenvironment > 30)){
    $('#tempIcon').addClass('icon-thermometer');
  }
}

function showCO2() {
  var lastValue = sensorData.length - 1;
  var co2 = document.getElementById("co2Value");
  var co = document.createTextNode(sensorData[lastValue].CO2Living);
  
  co2.appendChild(co);
}

function showIlluminance() {
  var lastValue = sensorData.length - 1;
  var illuminance = document.getElementById("illumValue");
  var illum = document.createTextNode(sensorData[lastValue].IlluminanceLiving );
  illuminance.appendChild(illum);
}

function showHumidity() {
  var lastValue = sensorData.length - 1;
  var humidity = document.getElementById("humValue");
  var hum = document.createTextNode(sensorData[lastValue].RHLiving);
  humidity.appendChild(hum);
}

function showNoise() {
  var lastValue = sensorData.length - 1;
  var noise = document.getElementById("noiseValue");
  var noi = document.createTextNode(sensorData[lastValue].NoiseLevelLiving);
  noise.appendChild(noi);
}

function showPressure() {
  var lastValue = sensorData.length - 1;
  var pressure = document.getElementById("pressValue");
  var press = document.createTextNode(sensorData[lastValue].PressureLiving);
  pressure.appendChild(press);
}

function showWindSpeed() {
  var lastValue = sensorData.length - 1;
  var wind = document.getElementById("windSValue");
  var air = document.createTextNode(sensorData[lastValue].EnvironmentWS);
  wind.appendChild(air);
}
function showWindDirection() {
  var lastValue = sensorData.length - 1;
  var wind = document.getElementById("windDValue");
  var air = document.createTextNode(sensorData[lastValue].EnvironmentWD + "°");
  wind.appendChild(air);
}