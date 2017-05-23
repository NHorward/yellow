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
   lastValue = sensorData.length - 1;
   console.log(sensorData);
   showTime();
   showHumidity();
   showHumidityHistory();
   showOutsideData();
  }
 });
});

function showTime() {
 var timeContainer = document.getElementById("hour");
 var timeHeader = document.createElement("h3");
 var currentTime = document.createTextNode(sensorData[lastValue].time);
 timeHeader.appendChild(currentTime);
 timeContainer.appendChild(timeHeader);
}

function showHumidity() {
 var humContainer = document.getElementById("value");
 var humHeader = document.createElement("h1");
 var currentHum = document.createTextNode(sensorData[lastValue].RHLiving + "%");
 humHeader.appendChild(currentHum);
 humContainer.appendChild(humHeader);
}

function showHumidityHistory() {
 var humHistoryContainer = document.getElementById("humidityHistory");
 var historyTable = document.createElement("table");
 for (i = 0; i < sensorData.length; i++) {
  var historyRow = document.createElement("tr");
  var historyTime = document.createElement("td");
  var time = document.createTextNode(sensorData[i].time);
  var historyHum = document.createElement("td");
  var humidity = document.createTextNode(sensorData[i].RHLiving + "%");
  historyTime.appendChild(time);
  historyHum.appendChild(humidity);
  historyRow.appendChild(historyTime);
  historyRow.appendChild(historyHum);
  historyTable.appendChild(historyRow);
 }
 humHistoryContainer.appendChild(historyTable);
}

function showOutsideData() {
 var outsideContainer = document.getElementById("outside");
 var outsideTable = document.createElement("table");

 for (i=0; i < 3; i++){
  var outsideRow = document.createElement("tr");
  var title = document.createElement("td");
  var titleText;
  if (i == 0){
   titleText = document.createTextNode("Temperature");
  }
  else if (i == 1){
   titleText = document.createTextNode("Humidity");
  }
  else {
   titleText = document.createTextNode("Windspeed");
  }
  
  
  title.appendChild(titleText); 
  
  var value = document.createElement("td");
  var valueData;
  
   if (i == 0){
   valueData = document.createTextNode(sensorData[lastValue].Tenvironment + "°C");
  }
  else if (i == 1){
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