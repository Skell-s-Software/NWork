// Importacion de Librerias Necesarias
const express = require('express');
const path = require('path');
const obtenerIP = require('./getip');
const obtenerLocalIp = require('./getip');

// Creacion de Instancia de Express y definicion del Puerto a usar
const app = express();
const PORT = 8000; // Puerto a utilizar
const LocalIP = obtenerLocalIp() // IP del servidor

// Middleware para archivos estaticos (public/.)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para redirigir al index por precaucion
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el Servidor
app.listen(PORT, () => {
    console.log(`Servidor Corriendo en http://localhost:${PORT}`);
    console.log(`Servidor Corriendo en http://:${LocalIP}:${PORT}`);
});