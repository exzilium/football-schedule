// Container for appending game info such as "teams" "scores" "schedules" etc.
var scheduleContainer = document.querySelector(".games-container");

// variable for use in "for each" function below
let html = "";

// Get current scoreboard data for current week
function getApi() {
  var requestUrl =
    "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      
      // example of data from API
      console.log(data);
      
      // Get week number and append in header
      printWeek(data.week.number);

      // For each game event in API create info card in html
      // Variables below are specific data parsed from API fetch for use on page
      html += `<div class="matchups">`;
      data.events.forEach((element) => {
        var gameTeam1Name =
          element.competitions[0].competitors[0].team.displayName;
        var gameTeam2Name =
          element.competitions[0].competitors[1].team.displayName;
        var gameTeam1Logo = element.competitions[0].competitors[0].team.logo;
        var gameTeam2Logo = element.competitions[0].competitors[1].team.logo;
        var gameTime = element.competitions[0].status.type.shortDetail;
        var gameTeam1Score = element.competitions[0].competitors[0].score;
        var gameTeam2Score = element.competitions[0].competitors[1].score;

        console.log(gameTeam1Name);
        html += `
        <div class="row myrow">
            <div class="col-4 mt-4">
              <h2 class="home team">${gameTeam1Name}</h2>
              <img class="logo" src="${gameTeam1Logo}">
            </div>
            <div class="col-4 d-flex flex-column justify-content-around middle">
              <div class="row">
                <h2 class="time">${gameTime}</h2>
              </div>
              <div class="row">
                <h2 class="result">${gameTeam1Score}  -  ${gameTeam2Score}</h2>
              </div>
              <div class="row">
                <h2 class="odds"></h2>
              </div>         
          </div>
          <div class="col-4 mt-4">
            <h2 class="away team">${gameTeam2Name}</h2>
            <img class="logo" src="${gameTeam2Logo}" >
          </div>
          </div>
        `;
      });
      html += "</div>";

      // set html on page with created html / values from above
      $(".games-container").html(html);
    });
}

// get API data upon page load
getApi();