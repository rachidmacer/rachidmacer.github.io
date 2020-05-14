const container = document.querySelector('.container');



fetch("https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=%3Crequired%3E&lat=%3Crequired%3E", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "df1cd4a599mshba0cf03aa9cc22cp12a53djsncbe138d6f12f"
	}
})
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(myJson)
});
