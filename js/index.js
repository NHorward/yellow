// Globale variabelen
var sensorData;
var lastValue;
// Variabelen met HTML elementen
var roomsContainer = document.getElementById("roomsContainer");


// Functie die JSON data ophaalt 
// Array van data wordt toegevoegd aan var sensorData
$(document).ready(function () {
 $.ajax({
  type: "get"
  , url: "data/data.json"
  , dataType: "json"
  , success: function (data) {
   sensorData = data.day;
   lastValue = sensorData.length - 1;
   console.log(sensorData);
   showOutsideData();
   showRooms();
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

// Functie die de kamers weergeeft 
function showRooms(){
 // Array met alle kamers
 var rooms = [ "Living room", "Kitchen", "Attic", "Dining room", "Bedroom 1", "Bedroom 2", "Bathroom"]; 
 
 // Voor iedere kamer een div met blokje, p met tekst en een br aanmaken en aan HTML toevoegen
 for (i = 0; i < rooms.length; i++){
  // Blokje
  var block = document.createElement("div");
  // Klasse voor het soort blokje
  $(block).addClass("icon-block");
  // Klasse voor de kleur
  $(block).addClass("green");
  roomsContainer.appendChild(block);
  
  // Naam van de kamer
  var roomName = document.createTextNode(rooms[i]);
  var roomP = document.createElement("p");
  $(roomP).addClass("rooms");
  roomP.appendChild(roomName);
  roomsContainer.appendChild(roomP);
  // Break na kamernaam
  var br = document.createElement("br");
  roomsContainer.appendChild(br);
 }
}

function showTemperature() {
  var lastValue = sensorData.length - 1;
  var temperature = document.getElementById("tempValue");
  var temp = document.createTextNode(sensorData[lastValue].TLiving + "°C");
  temperature.appendChild(temp);
  
  if(parseFloat(sensorData[lastValue].TLiving) > 17 && parseFloat(sensorData[lastValue].TLiving) < 25){
    $('#tempIcon').addClass('icon-thermometer');
    $('#tempIcon').addClass('goodIcon');
  }
  else{
    $('#tempIcon').addClass('icon-thermometer');
    $('#tempIcon').addClass('badIcon');
  }
}

function showCO2() {
  var lastValue = sensorData.length - 1;
  var co2 = document.getElementById("co2Value");
  var co = document.createTextNode(sensorData[lastValue].CO2Living);
  
  co2.appendChild(co);
  
  if(parseFloat(sensorData[lastValue].CO2Living) > 0 && parseFloat(sensorData[lastValue].CO2Living) < 800){
    $('#CO2Icon').addClass('icon-cloud');
    $('#CO2Icon').addClass('goodIcon');
  }
  else{
    $('#CO2Icon').addClass('icon-cloud');
    $('#CO2Icon').addClass('badIcon');
  }
}

function showIlluminance() {
  var lastValue = sensorData.length - 1;
  var illuminance = document.getElementById("illumValue");
  var illum = document.createTextNode(sensorData[lastValue].IlluminanceLiving );
  illuminance.appendChild(illum);
  
  if(parseFloat(sensorData[lastValue].IlluminanceLiving) > 0 && parseFloat(sensorData[lastValue].IlluminanceLiving) < 1000){
    $('#illumIcon').addClass('icon-lamp');
    $('#illumIcon').addClass('goodIcon');
  }
  else{
    $('#illumIcon').addClass('icon-lamp');
    $('#illumIcon').addClass('badIcon');
  }
}
function showHumidity() {
  var lastValue = sensorData.length - 1;
  var humidity = document.getElementById("humValue");
  var hum = document.createTextNode(sensorData[lastValue].RHLiving);
  humidity.appendChild(hum);
  
  if(parseFloat(sensorData[lastValue].RHLiving) > 45 && parseFloat(sensorData[lastValue].RHLiving) < 65){
    $('#humIcon').addClass('icon-water');
    $('#humIcon').addClass('goodIcon');
  }
  else{
    $('#humIcon').addClass('icon-water');
    $('#humIcon').addClass('badIcon');
  }
}
function showNoise() {
  var lastValue = sensorData.length - 1;
  var noise = document.getElementById("noiseValue");
  var noi = document.createTextNode(sensorData[lastValue].NoiseLevelLiving);
  noise.appendChild(noi);
  
  if(parseFloat(sensorData[lastValue].NoiseLevelLiving) > 0 && parseFloat(sensorData[lastValue].NoiseLevelLiving) < 60){
    $('#noiseIcon').addClass('icon-ear');
    $('#noiseIcon').addClass('goodIcon');
  }
  else{
    $('#noiseIcon').addClass('icon-ear');
    $('#noiseIcon').addClass('badIcon');
  }
}
function showPressure() {
  var lastValue = sensorData.length - 1;
  var pressure = document.getElementById("pressValue");
  var press = document.createTextNode(sensorData[lastValue].PressureLiving);
  pressure.appendChild(press);
  
  if(parseFloat(sensorData[lastValue].PressureLiving) > 1000 && parseFloat(sensorData[lastValue].PressureLiving) < 2000){
    $('#pressIcon').addClass('icon-pressure');
    $('#pressIcon').addClass('goodIcon');
  }
  else{
    $('#pressIcon').addClass('icon-pressure');
    $('#pressIcon').addClass('badIcon');
  }
}