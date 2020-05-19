const api = {
  key:"efe51b26290b5235f3b2ee0e134fbec9"
  baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt) {
  if(evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

console.log(searchbox.value);
