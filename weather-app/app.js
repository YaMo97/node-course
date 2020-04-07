// DarkSky.net not available any more
// Using Open Weather Map as weather API

const request = require('request')

const url = 'http://api.openweathermap.org/data/2.5/weather?lat=37.8267&lon=-122.4233&appid=dabaff886b08e0ea80677cb9a249f0b0'

request({ url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})