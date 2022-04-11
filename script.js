const submit = document.getElementById('button');
const input = document.getElementById('zipcode');
const form = document.getElementById('zipForm');
let zipcode;

//Weather info objects
const weatherInfo = document.getElementById('weatherInfo');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    return false;
})

input.addEventListener('input', function(e) {
    zipcode = input.value;
})

function updateWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&exclude={part}&appid=40515d80bc2d81aca49ef98a7a3e5afd&units=imperial`)
    .then((response) => response.json())
    .then((json) => {
        let temp = json.main.temp;
        let date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
        let icon = json.weather[0].icon;
        let conditions = json.weather[0].description;
        let high = json.main.temp_max;
        let low =  json.main.temp_min;
        let city = json.name;
        weatherInfo.innerHTML = 
        `<h2 id="date">${date}</h2>
        <h2>City: ${city}</h2>
        <img id="icon" src="http://openweathermap.org/img/w/${icon}.png" width=100>
        <h2 id="temp">Temperature(&degF): ${temp}</h2>
        <h2 id="conditions">Conditions: ${conditions}</h2>
        <div class="holder">
            <h2 id="high">High: ${high}</h2>
            <h2 id="low">Low: ${low}</h2>
        </div>`
    })
}