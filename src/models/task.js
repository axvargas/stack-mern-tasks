const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({                                 //Aqui defino la estructura de mi Schema
    title: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('Task', TaskSchema);            //Exporto el modelo con el nombre de TASK