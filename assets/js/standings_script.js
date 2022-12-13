// Get current standings data
function getStandings() {
  // URLs per each conference division in ranked order

  // -- AFC --
  // AFC EAST groups/4
  var standingsURLAFCEast =
    "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/4/standings/0?lang=en&region=us";

  // AFC WEST groups/6
  var standingsURLAFCWest =
    "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/6/standings/0?lang=en&region=us";

  // AFC NORTH groups/12
  var standingsURLAFCNorth =
    "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/12/standings/0?lang=en&region=us";

  // AFC SOUTH groups/13
  var standingsURLAFCSouth =
    "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/13/standings/0?lang=en&region=us";

  // -- NFC --
  // NFC EAST groups/1
  var standingsURLNFCEast =
    "http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/1/standings/0?lang=en&region=us";

  // NFC WEST groups/3
  var standingsURLNFCWest =
    "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/3/standings/0?lang=en&region=us";

  // NFC NORTH groups/10
  var standingsURLNFCNorth =
    "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/10/standings/0?lang=en&region=us";

  // NFC SOUTH groups/11
  var standingsURLNFCSouth =
    "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/groups/11/standings/0?lang=en&region=us";

  fetch(standingsURLNFCEast)
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
}

// League breakdown (for html containers)

// -- AFC --
// AFC East
// AFC West
// AFC North
// AFC South

// -- NFC --
// NFC East
// NFC  West
// NFC North
// NFC South

// Stats needed (variables)

// Team name
// Logo (tiny)
// Wins
// Losses
// Ties
// Percentage
// Points For
// Points Against
// Home record
// Away record
// Streak

getStandings();
