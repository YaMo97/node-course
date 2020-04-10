const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (location === undefined) {
    console.log('No location provided!')
} else {
    geocode(location, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log('Error:', error)
        }
    
        forecast(latitude, longitude, (error, { weather, temp, cloudiness }) => {
            if (error) {
                return console.log('Error:', error)
            }
            console.log('Location:', location)
            console.log(weather + '. It is currently ' + temp + ' degrees out. There is ' + cloudiness + '% cloudiness out.')
        })
    })
}