const request = require('request')

// DarkSky.net not available any more
// Using Open Weather Map as forecast API

const forecast = (latitude, longitude, callback) => {
    const forecastURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude +'&appid=dabaff886b08e0ea80677cb9a249f0b0&units=metric&lang=en'

    request({ url: forecastURL, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.cod === '400') {
            callback('Weather Service Error: ' + response.body.message, undefined)
        } else {
            callback(undefined, {
                weather: response.body.weather[0].main,
                temp: response.body.main.temp,
                cloudiness: response.body.clouds.all
            })
        }
    })
}

module.exports = forecast