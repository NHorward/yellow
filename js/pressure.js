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
   showPressure();
   showPressureHistory();
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

// Functie die de laatste pressure waarde uit het JSON bestand ophaalt en laat zien
function showPressure() {
 var preContainer = document.getElementById("value");
 var preHeader = document.createElement("h3");
 var currentPre = document.createTextNode(sensorData[lastValue].PressureLiving + "hPa");
 preHeader.appendChild(currentPre);
 preContainer.appendChild(preHeader);
}

// Functie die alle pressure waarden uit het JSON bestand haalt en in een tabel weergeeft
function showPressureHistory() {
 var preHistoryContainer = document.getElementById("pressureHistory");
 var historyTable = document.createElement("table");
 for (i = 0; i < sensorData.length; i++) {
  var historyRow = document.createElement("tr");
  var historyTime = document.createElement("td");
  var time = document.createTextNode(sensorData[i].time);
  var historyPre = document.createElement("td");
  var pressure = document.createTextNode(sensorData[i].PressureLiving + "hPa");
  historyTime.appendChild(time);
  historyPre.appendChild(pressure);
  historyRow.appendChild(historyTime);
  historyRow.appendChild(historyPre);
  historyTable.appendChild(historyRow);
 }
 preHistoryContainer.appendChild(historyTable);
}

// Functie die de laatste outside data ophaalt en weergeeft in een tabel
function showOutsideData() {
 var outsideContainer = document.getElementById("outsidedetail");
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

// NOTIFICATIES 

// Functie die de notificaties weergeeft bij het klikken
function showNotifications(){
 // Klasse show aan de notificaties toevoegen
 $("#notificationContent").toggleClass("show");
 // De achtergrond van het icoontje weer blauw maken om aan te geven dat notificatie bekeken is
 $(".notificationIcon").addClass("blue");
}

// Als er op de nieuwe notificatie wordt geklikt, komt het dialoog tevoorschijn
function clickedMessage(){
$("#hiddenDialog").addClass("show");
 
}

// Bij het aanklikken van de nieuwe notificatie het dialoog sluiten en de nieuwe waarschuwing in een gelezen waarschuwing veranderen
function removeDialog(){
$("#newnotify").removeClass("newnotify");
$("#newnotify").addClass("oldnotify");
 $("#hiddenDialog").removeClass("show");
}