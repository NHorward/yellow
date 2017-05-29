// JavaScript History Pagina

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
			// Bij het laden van de pagina de onderstaande functies oproepen
			showTemperature();
			showHumidity();
			showCO2();
			showIlluminance()
			showNoise();
			showCalendar();
		}
	});
});

// Functies die de gemiddelde waarde van de sensor data berekenen en weergeven
// Functie die de gemiddelde temperatuur berekent en laat zien
function showTemperature() {
	var lastValue = sensorData.length - 1;
	var temperature = document.getElementById("tempValue");
	var temp = document.createTextNode(parseInt(((parseInt(sensorData[0].TLiving)) + (parseInt(sensorData[1].TLiving)) + (parseInt(sensorData[2].TLiving)) + (parseInt(sensorData[3].TLiving)) + (parseInt(sensorData[4].TLiving)) + (parseInt(sensorData[5].TLiving))) / sensorData.length) + "°C");
	temperature.appendChild(temp);
}

// Functie die de gemiddelde luchtvochtigheid berekent en laat zien
function showHumidity() {
	var lastValue = sensorData.length - 1;
	var humidity = document.getElementById("humValue");
	var hum = document.createTextNode(parseInt(((parseInt(sensorData[0].RHLiving)) + (parseInt(sensorData[1].RHLiving)) + (parseInt(sensorData[2].RHLiving)) + (parseInt(sensorData[3].RHLiving)) + (parseInt(sensorData[4].RHLiving)) + (parseInt(sensorData[5].RHLiving))) / sensorData.length) + "%");
	humidity.appendChild(hum);
}

// Functie die de gemiddelde CO2 waarde berekent en laat zien
function showCO2() {
	var lastValue = sensorData.length - 1;
	var co2Value = document.getElementById("co2Value");
	var co2 = document.createTextNode(parseInt(((parseInt(sensorData[0].CO2Living)) + (parseInt(sensorData[1].CO2Living)) + (parseInt(sensorData[2].CO2Living)) + (parseInt(sensorData[3].CO2Living)) + (parseInt(sensorData[4].CO2Living)) + (parseInt(sensorData[5].CO2Living))) / sensorData.length) + "ppm");
	co2Value.appendChild(co2);
}

// Functie die de gemiddelde illuminantie berekent en laat zien
function showIlluminance() {
	var lastValue = sensorData.length - 1;
	var illuminance = document.getElementById("illValue");
	var ill = document.createTextNode(parseInt(((parseInt(sensorData[0].IlluminanceLiving)) + (parseInt(sensorData[1].IlluminanceLiving)) + (parseInt(sensorData[2].IlluminanceLiving)) + (parseInt(sensorData[3].IlluminanceLiving)) + (parseInt(sensorData[4].IlluminanceLiving)) + (parseInt(sensorData[5].IlluminanceLiving))) / sensorData.length) + "lux");
	illuminance.appendChild(ill);
}

// Functie die de gemiddelde geluidswaarde berekent en laat zien
function showNoise() {
	var lastValue = sensorData.length - 1;
	var noise = document.getElementById("noiseValue");
	var noi = document.createTextNode(parseInt(((parseInt(sensorData[0].NoiseLevelLiving)) + (parseInt(sensorData[1].NoiseLevelLiving)) + (parseInt(sensorData[2].NoiseLevelLiving)) + (parseInt(sensorData[3].NoiseLevelLiving)) + (parseInt(sensorData[4].NoiseLevelLiving)) + (parseInt(sensorData[5].NoiseLevelLiving))) / sensorData.length) + "db");
	noise.appendChild(noi);
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

// Calender Datepicker JQuery UI 
// Bron: JQueru UI Datepicker Widget, http://api.jqueryui.com/datepicker/ Datum van raadpleging: 29 mei 2017
function showCalendar() {
	$("#calendar").datepicker();
}