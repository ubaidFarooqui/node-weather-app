
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .options({
        a: {
            demand: true, 
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        console.log('');
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
    
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        var celsiusTemp = Math.round(((weatherResults.temperature -32) * (5/9)) * 100)/100;
        var celsiusRealFeelTemp = Math.round(((weatherResults.apparentTemperature -32) * (5/9))* 100)/100;
        console.log(`It's currently ${celsiusTemp} degree celsius`);
        console.log(`And it feels like ${celsiusRealFeelTemp} degree celcius`);
    }
});
    }
});





















