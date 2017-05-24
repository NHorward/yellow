function showNotifications(){
 console.log("Show me!");
 // var notifications = document.getElementById("notificationContainer");
console.log($("#notificationContent"));
 $("#notificationContent").toggleClass("show");
 $(".notificationIcon").addClass("blue");
}

function clickedMessage(){
 console.log("You clicked on this message");
$("#hiddenDialog").addClass("show");
 
}

function removeDialog(){
$("#newnotify").removeClass("newnotify");
$("#newnotify").addClass("oldnotify");
 $("#hiddenDialog").removeClass("show");
}

//
