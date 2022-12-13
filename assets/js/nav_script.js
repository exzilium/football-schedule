// Display today's date in header
var todaysDate = dayjs().format("MMM D, YYYY");
$("#today").text(todaysDate);

// Display current week number in header
function printWeek(weekNumber) {
  $("#week-number").text("Week " + weekNumber + " of 18");
}

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
    });
}

getApi();