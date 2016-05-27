var username;
var cliSecret = require('./../.env').cliSecret;
var repoArray =[];

exports.getRepos = function(){
  $.get('https://api.github.com/users/'+ username +'?access_token=' + cliSecret).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
