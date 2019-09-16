const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para optener el clima',
        demand: true
    }
}).argv;


/* lugar.getLugarLatLng(argv.direccion).then(console.log);
 */

/*  clima.getClima(37.259998,-6.950000).then(console.log).catch(console.log); */

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const grados = await clima.getClima(coordenadas.lat,coordenadas.lng);
        return `El clima de ${direccion} es de ${grados}ºC`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}


getInfo(argv.direccion).then(console.log).catch(console.log);