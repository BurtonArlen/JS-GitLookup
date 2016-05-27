(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = '341b261aaccd1b4e3a753066d9c93e58fddafcfb';

},{}],2:[function(require,module,exports){
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

},{"./../js/main.js":3}],3:[function(require,module,exports){
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

exports.apiRepo = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&page=2&per_page=10&affiliation=owner&sort=created&direction=desc').then(function(response){
    // console.log(response);
    response.forEach(function(repository){
      reObj.push(repository);
    });
    console.log("reObj");
    console.log(reObj[0].name);
    console.log(reObj[0].clone_url);
    console.log(reObj[0].language);
    console.log(reObj[0].watchers_count);
    console.log(reObj[0].url);
    for(var i=0; i<=9; i++){
      (repos.name).push(reObj[i].name);
      (repos.url).push(reObj[i].clone_url);
      (repos.language).push(reObj[i].language);
      (repos.watcherCount).push(reObj[i].watchers_count);
      (repos.deepInfo).push(reObj[i].url);
    }
    console.log("repos");
    console.log(repos);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.apiUser = function(username){

	$.get('https://api.github.com/users/' + username + '?access_token=' + apiKey)
	.then(function(response){
    console.log(response);
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

},{"./../.env":1}]},{},[2]);
