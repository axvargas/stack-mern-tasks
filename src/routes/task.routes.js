const express = require('express');
const router = express.Router();            //Me devuelve un objeto donde puedo ingresar rutas

const TaskController = require('../controllers/task.controller.js');    //Mi modelo ahora lo puedo usar con el nombre de Task

router.get('/', TaskController.getTasks);

router.get('/:id', TaskController.getTask);

router.post('/', TaskController.save);

router.put('/:id', TaskController.update);

router.delete('/:id', TaskController.delete);

module.exports = router;                    //Exporto el router