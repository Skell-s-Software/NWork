// Importacion de Libreria
const { networkInterfaces } = require('os');

// Declaracion de la funcion
function obtenerLocalIp() {
    const nets = networkInterfaces(); // Declara la instancia
    const results = {};

    // Bucle para obtener la IP
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            if (net.family === 'IPv4' && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }
                results[name].push(net.address);
            }
        }
    }

    // Retorna la primera IP no interna (excluye 127.0.0.1)
    for (const name of Object.keys(results)) {
        return results[name][0];
    }

    return '127.0.0.1'; // Fallback
}

console.log('✅ IP local:', obtenerLocalIp());

module.exports = obtenerLocalIp;
