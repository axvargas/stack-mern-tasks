const express = require('express');
const morgan = require('morgan');

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

// STARTING THE SERVER----------------------------
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
});