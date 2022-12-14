if (document.addEventListener) {
  document.addEventListener("click", handleClick, false);
} else if (document.attachEvent) {
  document.attachEvent("onclick", handleClick);
}

function handleClick(event) {
  event = event || window.event;
  event.target = event.target || event.srcElement;
  var element = event.target;
  var parent = element.parentElement;
  while (element) {
    if (element.nodeName === "BUTTON") {
      setFavorite(element, parent);
      break;
    }

    element = element.parentNode;
  }
}
var teamNames = [];
var teamNameHtml = [...document.querySelectorAll(".team-name")];
var teamButtons = [...document.querySelectorAll("#favorite-button")];
console.log(teamButtons);
for (var i = 0; i < teamNameHtml.length; i++) {
  teamNames.push(teamNameHtml[i].innerHTML);
}
console.log("teamNames");
console.log(teamNames);
for (var i = 0; i < teamNameHtml.length; i++) {
  console.log(teamNameHtml[i].innerHTML);
  var isFavorite = localStorage.getItem(teamNameHtml[i].innerHTML);
  console.log(isFavorite);
  if (isFavorite === "true") {
    teamButtons[i].setAttribute("class", "fav-btn-favorited");
  }
}

function setFavorite(button, parent) {
  var favorite = localStorage.getItem(
    parent.querySelector(".team-name").innerHTML
  );

  if (favorite === "false") {
    favorite = "true";
    button.setAttribute("class", "fav-btn-favorited");
    localStorage.setItem(parent.querySelector(".team-name").innerHTML, "true");
  } else {
    favorite = "false";
    button.setAttribute("class", "fav-btn");
    localStorage.setItem(parent.querySelector(".team-name").innerHTML, "false");
  }
}
