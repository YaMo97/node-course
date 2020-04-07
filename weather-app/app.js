// DarkSky.net not available any more
// Using Open Weather Map as weather API

const request = require('request')

const url = 'http://api.openweathermap.org/data/2.5/weather?lat=37.8267&lon=-122.4233&appid=dabaff886b08e0ea80677cb9a249f0b0&units=metric&lang=fr'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.main)
    const temp = response.body.main.temp
    const cloudiness = response.body.clouds.all

    console.log(response.body.weather[0].main + ' It is currently ' + temp + ' degrees out. There is ' + cloudiness + '% cloudiness out')
    // console.log('It is currently %d degrees out. There is %d% cloudiness out.', temp, cloudiness)
})