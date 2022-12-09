//temp html variables to be replaced by bootstrapped frontend

var gameHeader = document.querySelector("#header");
var gameName = document.querySelector("#game");
var gameTeam1 = document.querySelector("#team1");
var gameTeam2 = document.querySelector("#team2");


// Print current scoreboard data for current week
function printResults(resultObj) {
gameName.textContent = resultObj.name;
gameTeam1.textContent = resultObj.competitions[0].competitors[0].team.displayName;
gameTeam2.textContent = resultObj.competitions[0].competitors[1].team.displayName + " score: " + resultObj.competitions[0].competitors[1].score;
}

// Get current scoreboard data for current week
function getApi() {
  var requestUrl = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      printResults(data.events[0]);
      console.log(data.events[0]);
    });
}

getApi();
