const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'app', 'index.js'),                    //esta es mi entrada del codigo
    output: {                                               //la salida se la define como un archivo llamada bundle.js
        path:path.join(__dirname, 'src', 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                use: 'babel-loader',                // Hago que use el babel loader debido a que uso jsx
                test: /\.js$/,                      // Cargue todos los archivos que terminen en .js(es una regex expression)
                exclude: /node_modules/            // Excepto los que estan en la carpeta /node_modules
            }
        ]
    }
};