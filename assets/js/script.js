var scheduleContainer = document.querySelector('.games-container')
// Schedule function for current scoreboard data for current week
function printResults(resultObj) {
  // Week number
  var gameWeek = resultObj.week.number;

  // Game general data
  var gameName = resultObj.name;
  var gameStatus = resultObj.status.type.shortDetail;
  var gameSummaryLink = resultObj.links[0].href;
  var gameTime = resultObj.competitions[0].type.shortDetail

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
let html = '';
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
      html += `<div class="matchups">`
      // For Each
      data.events.forEach((element) => {
        var gameTeam1Name = element.competitions[0].competitors[0].team.displayName;
        var gameTeam2Name = element.competitions[0].competitors[1].team.displayName;
        var gameTeam1Logo = element.competitions[0].competitors[0].team.logo;
        var gameTeam2Logo = element.competitions[0].competitors[1].team.logo;
        var gameTime = element.competitions[0].status.type.shortDetail
        var gameTeam1Score = element.competitions[0].competitors[0].score;
        var gameTeam2Score = element.competitions[0].competitors[1].score;

        console.log(gameTeam1Name)
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
      html += "</div>"
      $(".games-container").html(html);
    });;
}

// Display today's date in header

var todaysDate = dayjs().format('MMM D, YYYY');
$("#today").text(todaysDate);

// get API data upon page load
getApi();


// //Used to populate schedule 
// 
// let kek = data;

// function schedulePop()  {
//     kek.foreach( kek => {
//       html += `<div class="matchups">
//       <div class="row">
//         <div class="col-4 mt-4">
//             <h2 class="home team">${gameTeam1Name}</h2>
//             <img class="logo" src="${gameTeam1Logo}" >Team Logo</img>
//         </div>
//         <div class="col-4 middle">
//             <div class="row">
//                 <h5 class="time">${gameTime}</h5>
//             </div>
//             <div class="row">
//                 <h5 class="result">score</h5>
//             </div>
//             <div class="row">
//                 <h5 class="odds">Rams +1500</h5>
//             </div>         
//         </div>
//         <div class="col-4 mt-4">
//             <h2 class="away team">${gameTeam2Name}</h2>
//             <img class="logo" src="${gameTeam2Logo}" >Team Logo</img>
//         </div>
//       </div>
//       `;
//     });
  
// }

// function standingsPop() {
//   top.foreach( top => {
//       html += `

//       `;
//   });

// }

// function statsPop() {
//   topkek.foreach( topkek => {
//     html += `
    
//     `;
//   });
// }

