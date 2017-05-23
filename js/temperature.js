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
   showTemperature();
   showTemperatureHistory();
   showOutsideData();
  }
 });
});

// Functie die de laatste tijdswaarde uit het JSON bestand ophaalt en laat zien
function showTime() {
 var timeContainer = document.getElementById("hour");
 var timeHeader = document.createElement("h3");
 var currentTime = document.createTextNode(sensorData[lastValue].time);
 timeHeader.appendChild(currentTime);
 timeContainer.appendChild(timeHeader);
}

// Functie die de laatste temperatuur waarde uit het JSON bestand ophaalt en laat zien
function showTemperature() {
 var tempContainer = document.getElementById("value");
 var tempHeader = document.createElement("h3");
 var currentTemp = document.createTextNode(sensorData[lastValue].TLiving + "°C");
 tempHeader.appendChild(currentTemp);
 tempContainer.appendChild(tempHeader);
}

// Functie die alle temperatuurwaarden uit het JSON bestand haalt en in een tabel weergeeft
function showTemperatureHistory() {
 var tempHistoryContainer = document.getElementById("tempHistory");
 var historyTable = document.createElement("table");
 for (i = 0; i < sensorData.length; i++) {
  var historyRow = document.createElement("tr");
  var historyTime = document.createElement("td");
  var time = document.createTextNode(sensorData[i].time);
  var historyTemp = document.createElement("td");
  var temperature = document.createTextNode(sensorData[i].TLiving + "°C");
  historyTime.appendChild(time);
  historyTemp.appendChild(temperature);
  historyRow.appendChild(historyTime);
  historyRow.appendChild(historyTemp);
  historyTable.appendChild(historyRow);
 }
 tempHistoryContainer.appendChild(historyTable);
}

// Functie die de laatste outside data ophaalt en weergeeft in een tabel
function showOutsideData() {
 var outsideContainer = document.getElementById("outside");
 var outsideTable = document.createElement("table");
 for (i = 0; i < 3; i++) {
  var outsideRow = document.createElement("tr");
  var title = document.createElement("td");
  var titleText;
  if (i == 0) {
   titleText = document.createTextNode("Temperature");
  }
  else if (i == 1) {
   titleText = document.createTextNode("Humidity");
  }
  else {
   titleText = document.createTextNode("Windspeed");
  }
  title.appendChild(titleText);
  var value = document.createElement("td");
  var valueData;
  if (i == 0) {
   valueData = document.createTextNode(sensorData[lastValue].Tenvironment + "°C");
  }
  else if (i == 1) {
   valueData = document.createTextNode(sensorData[lastValue].RHEnvironment + "%");
  }
  else {
   valueData = document.createTextNode(sensorData[lastValue].EnvironmentWS + "m/s");
  }
  value.appendChild(valueData);
  outsideRow.appendChild(title);
  outsideRow.appendChild(value);
  outsideTable.appendChild(outsideRow);
 }
 outsideContainer.appendChild(outsideTable);
}