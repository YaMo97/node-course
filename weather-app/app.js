const request = require('request')
const geocode = require('./utils/geocode')

// DarkSky.net not available any more
// Using Open Weather Map as weather API
// const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=37.8267&lon=-122.4233&appid=dabaff886b08e0ea80677cb9a249f0b0&units=metric&lang=fr'

// request({ url: weatherURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.cod === '400') {
//         console.log('Weather Service Error: ' + response.body.message)
//     } else {
//         const weather = response.body.weather[0].main
//         const temp = response.body.main.temp
//         const cloudiness = response.body.clouds.all

//         console.log(weather + '. It is currently ' + temp + ' degrees out. There is ' + cloudiness + '% cloudiness out.')
//     }
// })

// const MAPBOX_TOKEN = 'pk.eyJ1IjoieWF0aG1hbjk3IiwiYSI6ImNrOHB4ZHB0bzAzNTUzZW01MzlyYzhhZDQifQ.QzDF4e-IUABwBV4nUt6rBg'
// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoieWF0aG1hbjk3IiwiYSI6ImNrOHB4ZHB0bzAzNTUzZW01MzlyYzhhZDQifQ.QzDF4e-IUABwBV4nUt6rBg&limit=1"

// request({
//     url: geocodeURL,
//     json: true
// }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location service!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find the specified location! Please try again with new search keywords.')
//     } else {
//         const placeName = response.body.features[0].place_name
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]

//         console.log('Place Name: ' + placeName)
//         console.log('Latitude: ' + latitude + '; Longitude: ' + longitude)
//     }
// })

geocode('Boston', (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
})