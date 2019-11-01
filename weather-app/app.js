const request = require('request');

// Making request to DarkSky API for weather data
const darkSkyUrl = 'https://api.darksky.net/forecast/b341298171ac456c1a113a377da58954/37.8267,-122.4233';
const darkSkyOptions = {
    url: darkSkyUrl,
    json: true
};
request(darkSkyOptions, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    } else if (response.body.error) {
        console.log(response.body.error)
    }
    else {
        const temp = response.body.currently.temperature;
        const chanceOfRain = response.body.currently.precipProbability;
        console.log('It is currently ' + temp + ' degress out. There is a ' + chanceOfRain + '% chance of rain.');
    }
});


// Making request to Mapbox to change location query into longitude/latitude
const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json"
const mapboxOptions = {
    url: mapboxUrl,
    json: true,
    qs: {
        "access_token": "pk.eyJ1Ijoia2FnMjUzIiwiYSI6ImNrMmdrdzF4YzBtMzQzYm8xYTM3N2Z1ZmUifQ.6FZdbBb6D7JkVo06735rjg",
        "limit": 1
    }
}
request(mapboxOptions, (error, response) => {
    if (error) {
        console.log("Unable to connect to Mapbox service!");
    } else if (response.body.features.length == 0) {
        console.log('Invalid search query!');
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log('For Los Angelese the latitude is ' + latitude + ' and the longitude ' + longitude);
    }
});