const mongoose = require('mongoose');
const URI = 'mongodb://localhost/stack-mern-tasks';

// SOLVE DEPRECATION WARNINGSS
mongoose.set('useUnifiedTopology', true);


mongoose.connect(URI, {useNewUrlParser: true})                                 //Encaso de tener un servicio como Atlas ponngo directo la url que me den / en este caso es una local
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error));

module.exports = mongoose;