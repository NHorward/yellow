function showNotifications(){
 console.log("Show me!");
 // var notifications = document.getElementById("notificationContainer");
console.log($("#notificationContent"));
 $("#notificationContent").toggleClass("show");
 $(".notificationIcon").addClass("blue");
}
