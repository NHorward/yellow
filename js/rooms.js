// JavaScript Rooms Pagina

// Globale variabelen
var sensorData;

// Functie die JSON data ophaalt 
// Array van data wordt toegevoegd aan var sensorData
$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "../data/data.json",
    dataType: "json",
    success: function (data) {
      sensorData = data.day;
      // Bij het laden van de pagina de onderstaande functies oproepen
      changeImageLiving();
      changeImageBedroom();
    }
  });
});

// Functies die de status van de kamers veranderen aan de hand van de huidige data
// Livingroom
function changeImageLiving() {
  var lastValue = sensorData.length - 1;
  var counter = 0;
  if (parseFloat(sensorData[lastValue].TLiving) > 17 && parseFloat(sensorData[lastValue].TLiving) < 25) {} else {
    counter++;
  }
  if (parseFloat(sensorData[lastValue].RHLiving) > 45 && parseFloat(sensorData[lastValue].RHLiving) < 65) {} else {
    counter++;
  }
  if (parseFloat(sensorData[lastValue].CO2Living) > 0 && parseFloat(sensorData[lastValue].CO2Living) < 800) {} else {
    counter++;
  }
  if (parseFloat(sensorData[lastValue].PressureLiving) > 1000 && parseFloat(sensorData[lastValue].PressureLiving) < 2000) {} else {
    counter++;
  }
  if (parseFloat(sensorData[lastValue].NoiseLevelLiving) > 0 && parseFloat(sensorData[lastValue].NoiseLevelLiving) < 60) {} else {
    counter++;
  }
  if (parseFloat(sensorData[lastValue].IlluminanceLiving) > 0 && parseFloat(sensorData[lastValue].IlluminanceLiving) < 1000) {} else {
    counter++;
  }
  if (counter >= 1) {
    document.getElementById('livingroomImg').src = '../img/roomslecht.png';
    document.getElementById('livingroomImg').alt = "The conditions are bad";
  } else {
    document.getElementById('livingroomImg').src = '../img/roomgoed.png';
    document.getElementById('livingroomImg').alt = "The conditions are good";
  }

}

// Bedroom
function changeImageBedroom() {
  var lastValue = sensorData.length - 1;
  var counter = 0;
  if (parseFloat(sensorData[lastValue].T1Bedroom) > 17 && parseFloat(sensorData[lastValue].T1Bedroom) < 25) {} else {
    counter++;
  }
  if (parseFloat(sensorData[lastValue].RHBedroom) > 45 && parseFloat(sensorData[lastValue].RHBedroom) < 65) {} else {
    counter++;
  }
  if (parseFloat(sensorData[lastValue].CO2Bedroom) > 0 && parseFloat(sensorData[lastValue].CO2Bedroom) < 800) {} else {
    counter++;
  }
  if (counter >= 1) {
    document.getElementById('bedroomImg').src = '../img/roomslecht.png';
    document.getElementById('bedroomImg').alt = "The conditions are bad";

  } else {
    document.getElementById('bedroomImg').src = '../img/roomgoed.png';
    document.getElementById('bedroomImg').alt = "The conditions are good";
  }

}

// NOTIFICATIES 
// Functie die de notificaties weergeeft bij het klikken
function showNotifications() {
  // Klasse show aan de notificaties toevoegen
  $("#notificationContent").toggleClass("show");
  // De achtergrond van het icoontje weer blauw maken om aan te geven dat notificatie bekeken is
  $(".notificationIcon").addClass("blue");
}

// Als er op de nieuwe notificatie wordt geklikt, komt het dialoog tevoorschijn
function clickedMessage() {
  $("#hiddenDialog").addClass("show");
}

// Bij het aanklikken van de nieuwe notificatie het dialoog sluiten en de nieuwe waarschuwing in een gelezen waarschuwing veranderen
function removeDialog() {
  $("#newnotify").removeClass("newnotify");
  $("#newnotify").addClass("oldnotify");
  $("#hiddenDialog").removeClass("show");
}