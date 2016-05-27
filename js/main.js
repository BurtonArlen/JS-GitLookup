var apiKey = require('./../.env').apiKey;

function Repo(name, url, language, watcherCount, deepInfo) {
  this.name = name;
  this.url = url;
  this.language = language;
  this.watcherCount = watcherCount;
  this.deepInfo = deepInfo;
}
var reObj = [];
var repos = {
  name: [],
  url: [],
  language: [],
  watcherCount: [],
  deepInfo: []
};

exports.showRepos = function(){
  for (var a=0; a<=11; a++) {
    $('#repos').append(
      '<h3>Repository Name: ' + repos.name[a] + '</h3>' +
      '<p>Repository URL: ' + repos.url[a] + '</p>' +
      '<p>Github URL: ' + repos.language[a] + '</p>' +
      '<p>Watcher Count: ' + repos.watcherCount[a] + '</p>' +
      '<p>Follower Count: ' + repos.deepInfo[a] + '</p>' + '<br>'
    );
  }
}

exports.apiRepo = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&page=2&per_page=12&affiliation=owner&sort=created&direction=desc').then(function(response){
    // console.log(response);
    response.forEach(function(repository){
      reObj.push(repository);
    });
    for(var i=0; i<=11; i++){
      (repos.name).push(reObj[i].name);
      (repos.url).push(reObj[i].clone_url);
      (repos.language).push(reObj[i].language);
      (repos.watcherCount).push(reObj[i].watchers_count);
      (repos.deepInfo).push(reObj[i].url);
    }
    console.log(repos);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.apiUser = function(username){

	$.get('https://api.github.com/users/' + username + '?access_token=' + apiKey)
	.then(function(response){
		$('#user').append(
        '<img class="avatar" src=' + response.avatar_url + '>' +
        '<h2>User Name: ' + username + '</h2>' +
        '<h3>Location: ' + response.location + '</h3>' +
        '<h3>Github URL: ' + response.html_url + '</h3>' +
        '<h3>Repo Count: ' + response.public_repos + '</h3>' +
        '<h3>Follower Count: ' + response.followers + '</h3>'

		);
	}).fail(function(error){
    console.log(error.responseJSON.message);
    alert("something went wrong, check the developers panel");
  });
};
