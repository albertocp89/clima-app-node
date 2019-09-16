const axios = require('axios');

const getLugarLatLng = async(ciudad) => {

    //Para escapar palabra
    let encodedUrl = encodeURI(ciudad);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "ahMWdz2zHhmsheb2yfhvT4lCgMbjp1AYC2ejsnbLEeGNUfVZLv"
        }
    });

    const resp = await instance.get();

    if(resp.data.Results.length === 0){
        throw new Error (`No hay resultados para ${ciudad}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
}
