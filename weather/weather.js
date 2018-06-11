const request = require('request');

var getWeather = (lat, lng, callback) => {
    
    request({
    
    url: `https://api.darksky.net/forecast/fa117c65557659d488f97db0daf52a52/${lat},${lng}`,
    json: true
}, (error, response, body) => {
    
    if (error) {
     callback('Unable to connect to Forecast.io Server.');   
    }
    
    else if (response.statusCode === 400) {
     callback('Unable to fetch weather');    
    }
    
    else if (response.statusCode === 200) {
        
        callback(undefined, {
            
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        });
        
    }
});
    
};

module.exports.getWeather = getWeather;
 
