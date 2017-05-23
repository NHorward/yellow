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
    }
  });
});

function showTemperature() {
  var lastValue = sensorData.length - 1;
  var temperature = document.getElementById("tempValue");
  var temp = document.createTextNode(sensorData[lastValue].Tenvironment + "°C");
  temperature.appendChild(temp);
}

function showCO2() {
  var lastValue = sensorData.length - 1;
  var co2 = document.getElementById("co2Value");
  var co = document.createTextNode(sensorData[lastValue].CO2Living + "ppm");
  co2.appendChild(co);
}

function showIlluminance() {
  var lastValue = sensorData.length - 1;
  var illuminance = document.getElementById("illumValue");
  var illum = document.createTextNode(sensorData[lastValue].IlluminanceLiving + "lux");
  illuminance.appendChild(illum);
}

function showHumidity() {
  var lastValue = sensorData.length - 1;
  var humidity = document.getElementById("humValue");
  var hum = document.createTextNode(sensorData[lastValue].RHLiving + "%");
  humidity.appendChild(hum);
}