//temp html variables to be replaced by bootstrapped frontend

var gameHeaderHTML = document.querySelector("#header");
var gameNameHTML = document.querySelector("#game");
var gameTeam1HTML = document.querySelector("#team1");
var gameTeam2HTML = document.querySelector("#team2");

// Schedule function for current scoreboard data for current week
function printResults(resultObj) {
  var gameWeek = resultObj.week.number;
  var gameName = resultObj.name;
  var gameTeam1 = resultObj.competitions[0].competitors[0].team.displayName;
  var gameTeam2 = resultObj.competitions[0].competitors[1].team.displayName;
  var gameTeam1Score = resultObj.competitions[0].competitors[0].score;
  var gameTeam2Score = resultObj.competitions[0].competitors[1].score;
  var gameStatus = resultObj.status.type.shortDetail;

  console.log("Week " + gameWeek + " of 18");
  console.log(gameName);
  console.log(gameTeam1 + " " + gameTeam1Score);
  console.log(gameTeam2 + " " + gameTeam2Score);
  console.log(gameStatus);
}

// Get current scoreboard data for current week
function getApi() {
  var requestUrl =
    "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      printResults(data.events[0]);
    });
}

getApi();
