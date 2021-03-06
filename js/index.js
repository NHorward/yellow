// JavaScript Index Pagina

// Globale variabelen
var sensorData;
var lastValue;


// Functie die JSON data ophaalt 
// Array van data wordt toegevoegd aan var sensorData
$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "data/data.json",
    dataType: "json",
    success: function (data) {
      sensorData = data.day;
      lastValue = sensorData.length - 1;
      // Bij het laden van de pagina de onderstaande functies oproepen
      showOutsideData();
      //PARAMETERS
      showTemperature();
      showCO2();
      showIlluminance();
      showHumidity();
      showNoise();
      showPressure();
      //HOUSE
      changeBlockLiving();
      changeBlockBedroom();
      changeBlockKitchen();
      changeBlockDiningRoom();
      changeBlockBathroom();
      changeBlockAttic();
    }
  });
});

// Functie die de laatste outside data ophaalt en weergeeft in een tabel
function showOutsideData() {
  var outsideContainer = document.getElementById("outside");
  var outsideTable = document.createElement("table");
  for (i = 0; i < 3; i++) {
    var outsideRow = document.createElement("tr");
    var title = document.createElement("td");
    var titleText;
    if (i === 0) {
      titleText = document.createTextNode("Temperature");
    } else if (i == 1) {
      titleText = document.createTextNode("Humidity");
    } else {
      titleText = document.createTextNode("Windspeed");
    }
    title.appendChild(titleText);
    var value = document.createElement("td");
    var valueData;
    if (i === 0) {
      valueData = document.createTextNode(sensorData[lastValue].Tenvironment + "°C");
    } else if (i == 1) {
      valueData = document.createTextNode(sensorData[lastValue].RHEnvironment + "%");
    } else {
      valueData = document.createTextNode(sensorData[lastValue].EnvironmentWS + "m/s");
    }
    value.appendChild(valueData);
    outsideRow.appendChild(title);
    outsideRow.appendChild(value);
    outsideTable.appendChild(outsideRow);
  }
  outsideContainer.appendChild(outsideTable);
}

//HOUSE Functies die per kamer de blokjes aanpast aan huidige data
// Past livingroom blokje aan aan de huidige data 
function changeBlockLiving() {
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
  if (counter === 0) {
    $('#iconLiving').addClass('icon-block');
    $('#iconLiving').addClass('goodIcon');
  } else if (counter == 1) {
    $('#iconLiving').addClass('icon-emptyblock');
    $('#iconLiving').addClass('goodIcon');
  } else {
    $('#iconLiving').addClass('icon-block');
    $('#iconLiving').addClass('badIcon');
  }
}

// Past bedroom blokje aan aan de huidige data 
function changeBlockBedroom() {
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
  if (counter === 0) {
    $('#iconBedroom1').addClass('icon-block');
    $('#iconBedroom1').addClass('goodIcon');
  } else if (counter == 1) {
    $('#iconBedroom1').addClass('icon-emptyblock');
    $('#iconBedroom1').addClass('goodIcon');
  } else {
    $('#iconBedroom1').addClass('icon-block');
    $('#iconBedroom1').addClass('badIcon');
  }
}

function changeBlockKitchen() {
  $('#iconKitchen').addClass('icon-block');
  $('#iconKitchen').addClass('badIcon');
}

function changeBlockDiningRoom() {
  $('#iconDiningRoom').addClass('icon-block');
  $('#iconDiningRoom').addClass('goodIcon');
}

function changeBlockBathroom() {
  $('#iconBathroom').addClass('icon-block');
  $('#iconBathroom').addClass('goodIcon');
}

function changeBlockAttic() {
  $('#iconAttic').addClass('icon-block');
  $('#iconAttic').addClass('goodIcon');
}

//PARAMETERS
// Functie die de laatste temperatuur waarde ophaalt en weergeeft
function showTemperature() {
  var lastValue = sensorData.length - 1;
  var temperature = document.getElementById("tempValue");
  var temp = document.createTextNode(sensorData[lastValue].TLiving + "°C");
  temperature.appendChild(temp);
  if (parseFloat(sensorData[lastValue].TLiving) > 17 && parseFloat(sensorData[lastValue].TLiving) < 25) {
    $('#tempIcon').addClass('icon-thermometer');
    $('#tempIcon').addClass('goodIcon');
  } else {
    $('#tempIcon').addClass('icon-thermometer');
    $('#tempIcon').addClass('badIcon');
  }
}

// Functie die de laatste CO2 waarde ophaalt en weergeeft
function showCO2() {
  var lastValue = sensorData.length - 1;
  var co2 = document.getElementById("co2Value");
  var co = document.createTextNode(sensorData[lastValue].CO2Living);
  co2.appendChild(co);
  if (parseFloat(sensorData[lastValue].CO2Living) > 0 && parseFloat(sensorData[lastValue].CO2Living) < 800) {
    $('#CO2Icon').addClass('icon-cloud');
    $('#CO2Icon').addClass('goodIcon');
  } else {
    $('#CO2Icon').addClass('icon-cloud');
    $('#CO2Icon').addClass('badIcon');
  }
}

// Functie die de laatste illuminantie waarde ophaalt en weergeeft
function showIlluminance() {
  var lastValue = sensorData.length - 1;
  var illuminance = document.getElementById("illumValue");
  var illum = document.createTextNode(sensorData[lastValue].IlluminanceLiving);
  illuminance.appendChild(illum);
  if (parseFloat(sensorData[lastValue].IlluminanceLiving) > 0 && parseFloat(sensorData[lastValue].IlluminanceLiving) < 1000) {
    $('#illumIcon').addClass('icon-lamp');
    $('#illumIcon').addClass('goodIcon');
  } else {
    $('#illumIcon').addClass('icon-lamp');
    $('#illumIcon').addClass('badIcon');
  }
}

// Functie die de laatste luchtvochtigheids waarde ophaalt en weergeeft
function showHumidity() {
  var lastValue = sensorData.length - 1;
  var humidity = document.getElementById("humValue");
  var hum = document.createTextNode(sensorData[lastValue].RHLiving);
  humidity.appendChild(hum);
  if (parseFloat(sensorData[lastValue].RHLiving) > 45 && parseFloat(sensorData[lastValue].RHLiving) < 65) {
    $('#humIcon').addClass('icon-water');
    $('#humIcon').addClass('goodIcon');
  } else {
    $('#humIcon').addClass('icon-water');
    $('#humIcon').addClass('badIcon');
  }
}

// Functie die de laatste geluids waarde ophaalt en weergeeft
function showNoise() {
  var lastValue = sensorData.length - 1;
  var noise = document.getElementById("noiseValue");
  var noi = document.createTextNode(sensorData[lastValue].NoiseLevelLiving);
  noise.appendChild(noi);
  if (parseFloat(sensorData[lastValue].NoiseLevelLiving) > 0 && parseFloat(sensorData[lastValue].NoiseLevelLiving) < 60) {
    $('#noiseIcon').addClass('icon-ear');
    $('#noiseIcon').addClass('goodIcon');
  } else {
    $('#noiseIcon').addClass('icon-ear');
    $('#noiseIcon').addClass('badIcon');
  }
}

// Functie die de laatste luchtdruk waarde ophaalt en weergeeft
function showPressure() {
  var lastValue = sensorData.length - 1;
  var pressure = document.getElementById("pressValue");
  var press = document.createTextNode(sensorData[lastValue].PressureLiving);
  pressure.appendChild(press);
  if (parseFloat(sensorData[lastValue].PressureLiving) > 1000 && parseFloat(sensorData[lastValue].PressureLiving) < 2000) {
    $('#pressIcon').addClass('icon-pressure');
    $('#pressIcon').addClass('goodIcon');
  } else {
    $('#pressIcon').addClass('icon-pressure');
    $('#pressIcon').addClass('badIcon');
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