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
			console.log(sensorData);
			changeImageLiving();

			if (livingHasIssues()) {
				document.getElementById('livingroomImg').src = '../img/roomslecht.png';
			}

			changeImageBedroom();
		}
	});
});

var values = {
	"TLiving": {
		"min": 17,
		"max": 25
	},
	"RHLiving": {
		"min": 45,
		"max": 65
	}
}

function livingHasIssues() {

	var lastValue = sensorData.length - 1;

	for (item in values) {
		if (
			parseFloat(sensorData[lastValue][item] < values[item].min) &&
			parseFloat(sensorData[lastValue][item] > values[item].max)
		) {
			return true;
		}
	}
}

function changeImageLiving() {
	var lastValue = sensorData.length - 1;
	var counter = 0;

	if (parseFloat(sensorData[lastValue].TLiving) > 17 &&
		parseFloat(sensorData[lastValue].TLiving) < 25) {
		console.log("nu telt de counter niet op #goed");
	} else {
		counter++;
	}

	if (parseFloat(sensorData[lastValue].RHLiving) > 45 &&
		parseFloat(sensorData[lastValue].RHLiving) < 65) {
		console.log("nu telt de counter niet op #goed");
	} else {
		counter++;
	}

	if (parseFloat(sensorData[lastValue].CO2Living) > 0 &&
		parseFloat(sensorData[lastValue].CO2Living) < 800) {
		console.log("nu telt de counter niet op #goed");
	} else {
		counter++;
	}

	if (parseFloat(sensorData[lastValue].PressureLiving) > 1000 &&
		parseFloat(sensorData[lastValue].PressureLiving) < 2000) {
		console.log("nu telt de counter niet op #goed");
	} else {
		counter++;
	}

	if (parseFloat(sensorData[lastValue].NoiseLevelLiving) > 0 &&
		parseFloat(sensorData[lastValue].NoiseLevelLiving) < 60) {
		console.log("nu telt de counter niet op #goed");
	} else {
		counter++;
	}

	if (parseFloat(sensorData[lastValue].IlluminanceLiving) > 0 &&
		parseFloat(sensorData[lastValue].IlluminanceLiving) < 1000) {
		console.log("nu telt de counter niet op #goed");
	} else {
		counter++;
	}

	if (counter >= 1) {
		document.getElementById('livingroomImg').src = '../img/roomslecht.png';
	} else {
		document.getElementById('livingroomImg').src = '../img/roomgoed.png';
	}
	console.log(counter);
}

function changeImageBedroom() {
	var lastValue = sensorData.length - 1;
	var counter = 0;


	if (parseFloat(sensorData[lastValue].T1Bedroom) > 17 &&
		parseFloat(sensorData[lastValue].T1Bedroom) < 25) {
		console.log("nu telt de counter niet op #goed");
	} else {
		counter++;
	}

	if (parseFloat(sensorData[lastValue].RHBedroom) > 45 &&
		parseFloat(sensorData[lastValue].RHBedroom) < 65) {
		console.log("nu telt de counter niet op #goed");
	} else {
		counter++;
	}

	if (parseFloat(sensorData[lastValue].CO2Bedroom) > 0 &&
		parseFloat(sensorData[lastValue].CO2Bedroom) < 800) {
		console.log("nu telt de counter niet op #goed");
	} else {
		counter++;
	}

	if (counter >= 1) {
		document.getElementById('bedroomImg').src = '../img/roomslecht.png';
	} else {
		document.getElementById('bedroomImg').src = '../img/roomgoed.png';
	}
	console.log(counter);
}


//