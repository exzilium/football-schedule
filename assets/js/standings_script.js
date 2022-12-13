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
      standingsData.standings.forEach((element) => {
        // get team url from standings data
        var teamURL = element.team.$ref;
        console.log(teamURL);
        // fetch corresponding team data to pair with record data
        fetch(teamURL)
          .then(function (response) {
            return response.json();
          })
          .then(function (teamData) {
            // team example data
            console.log(teamData.shortDisplayName);
            console.log(teamData.logos[0].href);
            console.log(teamData);
            var j = 0;
            // record example data (need help to traverse into the object/arrays)
            console.log(standingsData.standings[element]);
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
