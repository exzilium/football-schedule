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


// Function to fetch each standings data url, get each team and record data from within, and create varriables from each team/records pair to populate standings tables
function getStandings() {
  standingsArray.forEach((element, i) => {
    fetch(standingsArray[i])
      .then(function (response) {
        return response.json();
      })
      .then(function (standingsData) {
        // standings data example
        console.log(standingsData);
        // for each item in standings array get team URL
        standingsData.standings.forEach((element, i) => {
          // get team url from standings data
          var teamURL = element.team.$ref;
          console.log(teamURL);
          // fetch corresponding team data to pair with record data
          fetch(teamURL)
            .then(function (response) {
              return response.json();
            })
            .then(function (teamData) {
              // Variables for team name and stats to create html

              // Team Name
              var teamName = teamData.shortDisplayName;
              console.log(teamName);
              // Team logo url
              var teamLogo = teamData.logos[0].href;
              console.log(teamLogo);
              // Wins
              var teamWins = element.records[0].stats[18].displayValue;
              console.log(teamWins);
              // Losses
              var teamLosses = element.records[0].stats[10].displayValue;
              console.log(teamLosses);
              // Ties
              var teamTies = element.records[0].stats[16].displayValue;
              console.log(teamTies);
              // Winning percentage
              var teamPCT = element.records[0].stats[17].displayValue;
              console.log(teamPCT);
              // Points For
              var teamPF = element.records[0].stats[14].displayValue;
              console.log(teamPF);
              // Points Against
              var teamPA = element.records[0].stats[13].displayValue;
              console.log(teamPA);
              // Points Against
              var teamPA = element.records[0].stats[15].displayValue;
              console.log(teamPA);
              // Home Record
              var teamHomeRecord = element.records[1].displayValue;
              console.log(teamHomeRecord);
              // Away Record
              var teamAwayRecord = element.records[2].displayValue;
              console.log(teamAwayRecord);
            });
        });
      });
  });
}

// // EXAMPLE FOR EACH FOR SINGLE CONFERENCE/DIVISION LINK (TO BE REMOVED): hard coded fetch for NFC East url
//   fetch(standingsURLNFCEast)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (standingsData) {
//       // standings data example
//       console.log(standingsData);
//       // for each item in standings array get team URL
//       standingsData.standings.forEach((element, i) => {
//         // get team url from standings data
//         var teamURL = element.team.$ref;
//         console.log(teamURL);
//         // fetch corresponding team data to pair with record data
//         fetch(teamURL)
//           .then(function (response) {
//             return response.json();
//           })
//           .then(function (teamData) {
//             // Variables for team name and stats to create html

//             // Team Name
//             var teamName = teamData.shortDisplayName;
//             console.log(teamName);
//             // Team logo url
//             var teamLogo = teamData.logos[0].href;
//             console.log(teamLogo);
//             // Wins
//             var teamWins = element.records[0].stats[18].displayValue;
//             console.log(teamWins);
//             // Losses
//             var teamLosses = element.records[0].stats[10].displayValue;
//             console.log(teamLosses);
//             // Ties
//             var teamTies = element.records[0].stats[16].displayValue;
//             console.log(teamTies);
//             // Winning percentage
//             var teamPCT = element.records[0].stats[17].displayValue;
//             console.log(teamPCT);
//             // Points For
//             var teamPF = element.records[0].stats[14].displayValue;
//             console.log(teamPF);
//             // Points Against
//             var teamPA = element.records[0].stats[13].displayValue;
//             console.log(teamPA);
//             // Points Against
//             var teamPA = element.records[0].stats[15].displayValue;
//             console.log(teamPA);
//             // Home Record
//             var teamHomeRecord = element.records[1].displayValue;
//             console.log(teamHomeRecord);
//             // Away Record
//             var teamAwayRecord = element.records[2].displayValue;
//             console.log(teamAwayRecord);
//           });
//       });
//     });
// }

getStandings();
