var apiKey = require('./../.env').apiKey;
var repoArray =[];

exports.apiRepo = function(username){
  $.get('https://api.github.com/users/'+ username +'?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.apiUser = function(username){

	$.get('https://api.github.com/users/' + username + '?access_token=' + apiKey)
	.then(function(response){
		$('#user').append(
        '<img  src=' + response.avatar_url + '>' +
        '<h2>Name: ' + response.name + '</h2>' +
        '<h3>Email: ' + response.email + '</h3>' +
        '<p>Repo Count: ' + response.public_repos + '</p>' +
        '<p>Follower Count: ' + response.followers + '</p>'
		);
	}).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


// module.exports.apiUser = apiUser;
// module.exports.apiRepo = apiRepo;
