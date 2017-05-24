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
  }
 });
});

function showTemperature() {
  var lastValue = sensorData.length - 1;
  var temperature = document.getElementById("tempValue");
  var temp = document.createTextNode(parseInt(((parseInt(sensorData[0].TLiving))+(parseInt(sensorData[1].TLiving))+(parseInt(sensorData[2].TLiving))+(parseInt(sensorData[3].TLiving))+(parseInt(sensorData[4].TLiving))+(parseInt(sensorData[5].TLiving)))/sensorData.length)+"°C");
  temperature.appendChild(temp);
  
  var ctx = document.getElementById("chartTemp");
  var myTempChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});
}