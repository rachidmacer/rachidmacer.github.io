//function locates user and shows what the weather in their location is

var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=efe51b26290b5235f3b2ee0e134fbec9')
    .then(response => response.json())
    .then(data => {
      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var descValue = data['weather'][0]['description'];

      name.innerHTML = nameValue;
      desc.innerHTML = "Expect " + descValue + " outside today.";
      temp.innerHTML = "The current Temperature is " + tempValue + '&deg F';
    })
})


//Opens window
window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQBteChwzh4gcTKVQePkUrS6x2MGNsCHOkOwDXohnnrmWzsTWFBfZP8LzdHNPXP96ch_xiw9Kx9s_qoCZS-SyaXqBFQIHR7vT-WNdJUPzEL2EU_07GqJ7UYixUgZFAxzNoYTpiGkDOkXQuIBKJ8884_1GcwwJwoZsGg';
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); }
  });

  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => { console.log(state); });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  // Connect to the player!
  player.connect();
};
