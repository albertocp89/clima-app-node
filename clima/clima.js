const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=774e623128cb76b6531bf1368af7ce2c&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}