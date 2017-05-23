// Globale variabelen
var sensorData;
var lastValue;

// Functie die JSON data ophaalt 
// Array van data wordt toegevoegd aan var sensorData

$(document).ready(function () {
 $.ajax({
  type: "get"
  , url: "../data/data.json"
  , dataType: "json"
  , success: function (data) {
   sensorData = data.day;
   lastValue = sensorData.length -1;
   console.log(sensorData);
   showTime();
   showHumidity();
   showHumidityHistory();
  }
 });
});

function showTime(){
 var timeContainer = document.getElementById("hour");
 var timeHeader = document.createElement("h3");
 var currentTime = document.createTextNode(sensorData[lastValue].time);
 timeHeader.appendChild(currentTime);
 timeContainer.appendChild(timeHeader);
}

function showHumidity(){
 var humContainer = document.getElementById("value");
 var humHeader = document.createElement("h2");
 var currentHum = document.createTextNode(sensorData[lastValue].RHLiving);
 humHeader.appendChild(currentHum);
 humContainer.appendChild(humHeader);
}

function showHumidityHistory(){
 var humHistoryContainer = document.getElementById("humidityHistory");
 var historyTable = document.createElement("table"); 
 
 for (i = 0; i < sensorData.length; i++){
 var historyRow = document.createElement("tr");
 var historyTime = document.createElement("td");
  var time = document.createTextNode(sensorData[i].time);
 var historyHum = document.createElement("td");
 var humidity = document.createTextNode(sensorData[i].RHLiving);
 
  historyTime.appendChild(time);
  historyHum.appendChild(humidity);
  historyRow.appendChild(historyTime);
  historyRow.appendChild(historyHum);
  historyTable.appendChild(historyRow);
 }
 humHistoryContainer.appendChild(historyTable);
}