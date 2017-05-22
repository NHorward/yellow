// Functie die JSON data ophaalt 
// Array van data wordt toegevoegd aan var sensorData
var sensorData; 
$(document).ready(function () {
 console.log("1")
 $.ajax({
  type: "get", 
  url: "../data/data.json",
  dataType: "json", 
success: function (data) {
 console.log("succes");
 console.log(data);
  sensorData = data.day;
 console.log(sensorData);
 
  }
 });

});