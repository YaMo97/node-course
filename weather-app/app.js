const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (location === undefined) {
    console.log('No location provided!')
} else {
    geocode(location, (error, geocodeData) => {
        if (error) {
            return console.log('Error:', error)
        }
    
        forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
            if (error) {
                return console.log('Error:', error)
            }
            console.log('Location:', geocodeData.location)
            console.log(forecastData.weather + '. It is currently ' + forecastData.temp + ' degrees out. There is ' + forecastData.cloudiness + '% cloudiness out.')
        })
    })
}