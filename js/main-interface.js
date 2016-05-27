var apiUser = require('./../js/main.js').apiUser;
var apiRepo = require('./../js/main.js').apiRepo;
var showRepos = require('./../js/main.js').showRepos;

$(document).ready(function() {
	$('#search').submit(function(event){
    event.preventDefault();
		$("#user").empty();
		$("#repos").empty();

		var username = $('#user_name').val();
		$('#user_name').val('');
		apiUser(username);
		apiRepo(username);
    debugger;
    setTimeout(showRepos, 1000);
	});


});
