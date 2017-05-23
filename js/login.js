var accounts = [];

$(function () {
	$.ajax({
		url: '../data/accounts.json',
		dataType: 'json',
		success: onSuccess,
		error: function (err) {
			console.error('Fout: ', err);
		}
	})

	function onSuccess(data) {
		accounts = data.accounts;
		gelukt();
	}
});

function gelukt() {
	console.log('json geladen');
}

var aanmelden = document.getElementById('button_aanmelden');

//aanmelden username met password
aanmelden.onclick = function () {


	for (i = 0; i < accounts.length; i++) {

		var username = $('#username').val();
		var password = $('#password').val();

		if (username == accounts[i].username && password == accounts[i].password) {
			window.location.href = '../index.html';
		}
	}
};