// Globale variabelen
var sensorData;
var dropdownMenu = document.getElementsByClassName('dropdownContent');

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

//dropdownMenu.addEventListener("click", dropdownMenu);

// Dropdown menu
// Geraadpleegde bron: W3Schools, How to js Dropdown, https://www.w3schools.com/howto/howto_js_dropdown.asp, Datum van raadpleging: 22 mei 2017. 
function showMenu(){
 console.log("Drop me down!");
 for(i=0; i < dropdownMenu.length; i++){
 $(dropdownMenu[i]).toggleClass("show");
 }
}