// Schedule function for current scoreboard data for current week
function printResults(resultObj) {
  // Week number
  var gameWeek = resultObj.week.number;

  // Game general data
  var gameName = resultObj.name;
  var gameStatus = resultObj.status.type.shortDetail;
  var gameSummaryLink = resultObj.links[0].href;

  // Team 1
  var gameTeam1Name = resultObj.competitions[0].competitors[0].team.displayName;
  var gameTeam1Logo = resultObj.competitions[0].competitors[0].team.logo;
  var gameTeam1Score = resultObj.competitions[0].competitors[0].score;
  var gameTeam1HomeAway = resultObj.competitions[0].competitors[0].homeAway;
  var gameTeam1Winner = resultObj.competitions[0].competitors[0].winner;

  // Team 2
  var gameTeam2Name = resultObj.competitions[0].competitors[1].team.displayName;
  var gameTeam2Logo = resultObj.competitions[0].competitors[1].team.logo;
  var gameTeam2Score = resultObj.competitions[0].competitors[1].score;
  var gameTeam2HomeAway = resultObj.competitions[0].competitors[1].homeAway;
  var gameTeam2Winner = resultObj.competitions[0].competitors[1].winner;

  console.log("Week " + gameWeek + " of 18");
  console.log(gameName);
  console.log(
    gameTeam1HomeAway +
      " " +
      gameTeam1Name +
      " " +
      gameTeam1Score +
      " logo link: " +
      gameTeam1Logo
  );
  console.log(
    gameTeam2HomeAway +
      " " +
      gameTeam2Name +
      " " +
      gameTeam2Score +
      " logo link: " +
      gameTeam2Logo
  );
  console.log(gameStatus);
  console.log(gameTeam1Name + " win? " + gameTeam1Winner);
  console.log(gameTeam2Name + " win? " + gameTeam2Winner);
  console.log("Game Summary: " + gameSummaryLink);
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
      console.log(data.events);
      printResults(data.events[0]);
      
      // For Each
      data.events.forEach((element) => {
        var gameTeam1Name = element.competitions[0].competitors[0].team.displayName;
        console.log(element);
        console.log(gameTeam1Name);
      });
    });
}

getApi();
