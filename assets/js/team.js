const button = document.querySelector("#favorite-button");

button.addEventListener("click", () => {
  console.log("temp");
});

var requestUrl =
  "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams?limit=32";

var teamArray = [];

var html = "";

function getAPI() {
  // Get team urls from parent url and put into teamArray
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    // For each team url in parent, push to teamArray
      data.items.forEach((element, i) => {
        console.log(data.items[i].$ref);
        teamArray.push(data.items[i].$ref);
      });
      console.log(data);
      console.log(data.items);
      console.log(teamArray);
      // use teamArray to fetch data for each team URL
      teamArray.forEach((element, i) => {
        fetch(teamArray[i])
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            // Variables for team card data
            var teamName = data.displayName;
            var teamColor = data.color;
            var teamLogo = data.logos[0].href;
            var teamVenue = data.venue.fullName;

            console.log(teamName);
            console.log(teamColor);
            console.log(teamLogo);

            // HTML INDIVIDUAL TEAM CARD CREATION LOGIC TO GO HERE
            html += `
            <div class="col-sm-4">
            <div class="card">
              <img class="team-logo-sm" src="${teamLogo}" alt="Card image cap" />
              <div class="card-body">
                <h5 class="team-name">${teamName}</h5>
                <p class="team-stats">${teamVenue}</p>
                <button id="favorite-button" class="fav-btn btn-primary">
                  Favorite
                </button>
              </div>
            </div>
          </div>
`;
console.log(html);
$("#card-container").html(html);
          });
   
      });

    });
}

getAPI();
