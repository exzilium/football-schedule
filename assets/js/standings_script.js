// URLs for standings data for each conference division
var standingsArray = [
  "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/4/standings/0?lang=en&region=us", // AFC EAST
  "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/6/standings/0?lang=en&region=us", // AFC WEST
  "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/12/standings/0?lang=en&region=us", // AFC NORTH
  "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/13/standings/0?lang=en&region=us", // AFC SOUTH
  "http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/1/standings/0?lang=en&region=us", // NFC EAST
  "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/3/standings/0?lang=en&region=us", // NFC WEST
  "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/10/standings/0?lang=en&region=us", // NFC NORTH
  "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/11/standings/0?lang=en&region=us", // NFC SOUTH
];

const divisionArr = ["East", "West", "North", "South", "Este", "Oeste", "Norte", "Sur"];
let k = 0;
let html = "";
// Function to fetch each standings data url, get each team and record data from within, and create varriables from each team/records pair to populate standings tables



// Get current standings data
function getStandings() {
  standingsArray.forEach((element, i) => {
    fetch(standingsArray[i])
      .then(function (response) {
      return response.json();
        })
      .then(function (standingsData) {
        //set rowNum to zero before running the nested for loop
        rowNum = 0;
        // for each item in standings array get team URL
        standingsData.standings.forEach((element, i) => {
          // get team url from standings data
          var teamURL = element.team.$ref;
          // fetch corresponding team data to pair with record data
          fetch(teamURL)
            .then(function (response) {
              return response.json();
            })
            .then(function (teamData) {
              // Variables for team name and stats to create html
              var stats = element.records[0].stats
              //locates index of wins in api
              var winIndex = stats.map(e => e.name).indexOf("wins")
              //locates index of losses in api
              var loseIndex = stats.map(e => e.name).indexOf("losses")
              //locates index of ties in api
              var tiesIndex = stats.map(e => e.name).indexOf("ties")
              //locates index of win percent in api
              var pctIndex = stats.map(e => e.name).indexOf("winPercent")
              //locates index of points for in api
              var pfIndex = stats.map(e => e.name).indexOf("pointsFor")
              //locates index of points against in api
              var paIndex = stats.map(e => e.name).indexOf("pointsAgainst")
              //locates index of streak in api
              var strkIndex = stats.map(e => e.name).indexOf("streak")
               // Team Name
            var teamName = teamData.shortDisplayName;
            // Team logo url
            var teamLogo = teamData.logos[0].href;
            // Wins
            var teamWins = element.records[0].stats[winIndex].displayValue;
            // Losses
            var teamLosses = element.records[0].stats[loseIndex].displayValue;
            // Ties
            var teamTies = element.records[0].stats[tiesIndex].displayValue;
            // Winning percentage
            var teamPCT = element.records[0].stats[pctIndex].displayValue;
            // Points For
            var teamPF = element.records[0].stats[pfIndex].displayValue;
            // Points Against
            var teamPA = element.records[0].stats[paIndex].displayValue;
            // Points Against
            var teamSTRK = element.records[0].stats[strkIndex].displayValue;
            // Home Record
            var teamHomeRecord = element.records[1].displayValue;
            // Away Record
            var teamAwayRecord = element.records[2].displayValue;
            
            
            rowNum++;
            //creates html with appropriate stats (thanks bryan)
            html += `<tr>
            <th scope="row">${rowNum}</th>
            <td class="team-name"> <src=${teamLogo}> ${teamName} </td>
            <td class="wins">${teamWins}</td>
            <td class="loses">${teamLosses}</td>
            <td class="ties">${teamTies}</td>
            <td class="pct">${teamPCT}</td>
            <td class="pf">${teamPF}</td>
            <td class="pa">${teamPA}</td>
            <td class="home-record">${teamHomeRecord}</td>
            <td class="away-record">${teamAwayRecord}</td>
            <td class="streak">${teamSTRK}</td>
            </tr>
            `;
            
            //populates page
            {if (rowNum === 4) {
              let nfcEastEl = $(`.nfc-${divisionArr[k]}`);
              $(nfcEastEl).html(html);
              rowNum = 0; 
              k++
              
              html = '';
            }}
            let nfcEastEl = $(`.nfc-${divisionArr[k]}`);
            $(nfcEastEl).html(html); 
            
            
            });
        });
      });
     });
      
}


  getStandings();
