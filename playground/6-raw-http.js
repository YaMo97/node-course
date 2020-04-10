const https = require('https')
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.0&lon=-75.0&appid=dabaff886b08e0ea80677cb9a249f0b0&units=metric&lang=en'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()