var accounts = [];

$(function () {
	$.ajax({
		url: 'data/Accounts.json',
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

		console.log(accounts[i].username + '2');

		if ((document.getElementById('username_login').value == accounts[i].username)) {
			if (document.getElementById('password').value == accounts[i].password) {
				window.location.href = "../index.html";
			}
		}
	};
}