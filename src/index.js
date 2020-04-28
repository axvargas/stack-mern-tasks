const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');             //Traigo de database la coneccion a la base de datos

// SERVER-----------------------------------------
const app = express();                                  //express() retorna un objeto, el server

// PORT-------------------------------------------
const port = 3000;

// SETTINGS---------------------------------------
app.set('port', process.env.PORT || port);              //Tome el puerto(port) o el puerto dado por el servicio de la nube

// MIDDLEWARES------------------------------------
app.use(morgan('dev'));                                 //Aplico el middleware y le mando 'dev' que significa que va a salir con ese formato
app.use(express.json());                                //cada vez que llega un dato al server va a pasar por la funcion y va a comprobar si es json. Envio y receopcion de jsons

// ROUTES-----------------------------------------
app.use('/api/tasks', require('./routes/task.routes')); //El primer parametro es el prefijo de la ruta

// STATIC FILES-----------------------------------      
app.use(express.static(path.join(__dirname, 'public')));  //path.join convierte en path dos parametros
// STARTING THE SERVER----------------------------
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});