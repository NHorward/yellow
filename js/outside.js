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
    }
  });
});