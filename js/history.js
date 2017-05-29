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
}
  
//  var ctx = document.getElementById("chartTemp");
//  var myTempChart = new Chart(ctx, {
//    type: 'line',
//    data: data,
//    options: options
//});
//}

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

