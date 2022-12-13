// Buttons on cards will change to "favorited" and change color when clicked. 
const favoriteButton = document.getElementById('.fav-btn');
favoriteButton.addEventListener('click', () => {
  favoriteButton.innerText = 'Favorited!';
  favoriteButton.style.backgroundColor = '#00C853';
});