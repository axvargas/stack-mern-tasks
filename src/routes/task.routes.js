const express = require('express');

const router = express.Router();            //Me devuelve un objeto donde puedo ingresar rutas

router.get('/', (req, res) => {
    res.send('Hello World');
});


module.exports = router;                    //Exporto el router