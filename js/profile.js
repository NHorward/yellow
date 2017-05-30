// JavaScript Profile Pagina

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