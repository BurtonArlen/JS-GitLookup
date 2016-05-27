var apiUser = require('./../js/main.js').apiUser;
var apiRepo = require('./../js/main.js').apiRepo;

$(document).ready(function() {
	$('#search').submit(function(event){
    event.preventDefault();
		$("#info").empty();
		$("#userprofile").empty();
		$("#begin").empty();

		var username = $('#user_name').val();
		$('#user_name').val('');
		apiUser(username);
		apiRepo(username);
	});
});
