// JavaScript Outside Pagina
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

//PARAMETERS
// Functie die de laatste temperatuur waarde ophaalt en weergeeft
function showTemperature() {
	var lastValue = sensorData.length - 1;
	var temperature = document.getElementById("tempValue");
	var temp = document.createTextNode(sensorData[lastValue].Tenvironment + "°C");
	temperature.appendChild(temp);
	if (parseFloat(sensorData[lastValue].Tenvironment) > -5 && parseFloat(sensorData[lastValue].Tenvironment) < 30) {
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
	var co = document.createTextNode(sensorData[lastValue].CO2Environment);
	co2.appendChild(co);
	if (parseFloat(sensorData[lastValue].CO2Environment) > 300 && parseFloat(sensorData[lastValue].CO2Environment) < 550) {
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

// Functie die de laatste luchtvochtigheidswaarde ophaalt en weergeeft
function showHumidity() {
	var lastValue = sensorData.length - 1;
	var humidity = document.getElementById("humValue");
	var hum = document.createTextNode(sensorData[lastValue].RHEnvironment);
	humidity.appendChild(hum);
	if (parseFloat(sensorData[lastValue].RHEnvironment) > 40 && parseFloat(sensorData[lastValue].RHEnvironment) < 60) {
		$('#humIcon').addClass('icon-water');
		$('#humIcon').addClass('goodIcon');
	} else {
		$('#humIcon').addClass('icon-water');
		$('#humIcon').addClass('badIcon');
	}
}

// Functie die de laatste geluidswaarde ophaalt en weergeeft
function showNoise() {
	var lastValue = sensorData.length - 1;
	var noise = document.getElementById("noiseValue");
	var noi = document.createTextNode(sensorData[lastValue].NoiseLevelLiving);
	noise.appendChild(noi);
	if (parseFloat(sensorData[lastValue].NoiseLevelLiving) > 0 && parseFloat(sensorData[lastValue].NoiseLevelLiving) < 80) {
		$('#noiseIcon').addClass('icon-ear');
		$('#noiseIcon').addClass('goodIcon');
	} else {
		$('#noiseIcon').addClass('icon-ear');
		$('#noiseIcon').addClass('badIcon');
	}
}

// Functie die de laatste luchtdrukwaarde ophaalt en weergeeft
function showPressure() {
	var lastValue = sensorData.length - 1;
	var pressure = document.getElementById("pressValue");
	var press = document.createTextNode(sensorData[lastValue].PressureLiving);
	pressure.appendChild(press);
	if (parseFloat(sensorData[lastValue].PressureLiving) > 300 && parseFloat(sensorData[lastValue].PressureLiving) < 1400) {
		$('#pressIcon').addClass('icon-pressure');
		$('#pressIcon').addClass('goodIcon');
	} else {
		$('#pressIcon').addClass('icon-pressure');
		$('#pressIcon').addClass('badIcon');
	}
}

// Functie die de laatste windsnelheid ophaalt en weergeeft
function showWindSpeed() {
	var lastValue = sensorData.length - 1;
	var wind = document.getElementById("windSValue");
	var air = document.createTextNode(sensorData[lastValue].EnvironmentWS);
	wind.appendChild(air);

	if (parseFloat(sensorData[lastValue].PressureLiving) > 300 && parseFloat(sensorData[lastValue].PressureLiving) < 1400) {
		$('#windSIcon').addClass('icon-windspeed');
		$('#windSIcon').addClass('goodIcon');
	} else {
		$('#windSIcon').addClass('icon-windspeed');
		$('#windSIcon').addClass('badIcon');
	}

}

// Functie die de laatste windrichting ophaalt en weergeeft
function showWindDirection() {
	var lastValue = sensorData.length - 1;
	var wind = document.getElementById("windDValue");
	var air = document.createTextNode(sensorData[lastValue].EnvironmentWD + "°");
	wind.appendChild(air);

	if (parseFloat(sensorData[lastValue].PressureLiving) > 300 && parseFloat(sensorData[lastValue].PressureLiving) < 1400) {
		$('#windDIcon').addClass('icon-winddirection');
		$('#windDIcon').addClass('goodIcon');
	} else {
		$('#windDIcon').addClass('icon-winddirection');
		$('#windDIcon').addClass('badIcon');
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