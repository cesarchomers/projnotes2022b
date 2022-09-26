//notas importantes
// importante un administrador de rutas de archivos
const path = require('path')

//exportamos un objeto de configuracion
//que sera usado por webpack
module.exports = {
    //archivo indexador
    entry: "./client/index.js",
    // especificar el archivo de salidad
    output: {
        // ruta de salida
        path: path.resolve(__dirname, "public"),
        //nombre del archivo de salir
        filename: "bundle.js"
    },
    //configurar el servidor de desarrollo
    devServer:{
        //forlder de archivos estaticos
        static: path.join(__dirname, "public"),
        //puerto del servidor
        port: 115,
        //host
        host: "localhost"
    }
}
