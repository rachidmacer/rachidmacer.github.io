
var lat = document.getElementById('latitude').textContent;
var lon = document.getElementById('longitude').textContent;

function getLocation() {
  if(navigator.getlocation){
    navigator.geolocation.getCurrentPosition( position => {
      const lat = position.coords.latitude;
      const lon = position.coors.longitude;
      console.log("position");
    });
  } else {
  console.log("geolocation not available");
  }
}
