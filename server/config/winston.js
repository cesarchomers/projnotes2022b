/*
winston ofrece 3 tipos de transportes:
1. console
2. file
3. http
*/
// importar winston
import Winston, {format} from'winston';

// se obtiene la ruta a la raiz del proyecto
import appRoot from 'app-root-path';

//desestructurando modulos utiles de format
const {combine, timestamp, label, printf, colorize }=format;

//definiendo colores para cada tipo de error

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'blue',
};

//agregando el esquema de colores a winston
Winston.addColors(colors);

// creando los formatos para la consola
const myConsoleFormat = combine(
    //colores
    colorize({ all: true }),
    //agregar una etiqueta
    label({ label: '<3'}),
    //agregando fecha
    timestamp({ format: 'DD-MM-YYYY HH:mm:ss'}),
    //funcion de impresion
    printf(
        (info) => 
        `${info.label}: ${info.timestamp}: ${info.message}`
    )
);
// crendo el formato para archivo

const myFileFormat = combine(
    //quitando el color de texto de la salida
    format.uncolorize(),
    //agregamos fecha
    timestamp({ format: 'DD-MM-YY HH-mm-ss'}),
    //formato de archivo de salida
    format.json()
);

//creando el objeto de opciones de winston

const options = {
    infoFile: {
        level: 'info',
        filename: `${appRoot0}/server/logs/info.log`,
        handleExceptions: false,
        maxSize: 5242880, // 5MB,
        maxFiles: 5,
        format: myFileFormat,

    },
    warnfile: {
        level: 'warn',
        filename: `${appRoot0}/server/logs/warn.log`,
        handleExceptions: false,
        maxSize: 5242880, // 5MB,
        maxFiles: 5,
        format: myFileFormat,

    },
    errorFile: {
        level: 'error',
        filename: `${appRoot0}/server/logs/error.log`,
        handleExceptions: false,
        maxSize: 5242880, // 5MB,
        maxFiles: 5,
        format: myFileFormat,

    },
    console:{
        level: 'debug',
        handleExceptions: true,
        format: myConsoleFormat,
    },
};

//creamos una instancia de logger

const logger = Winston.createLogger({
    transports:[
        new Winston.transport.File(options.infoFile),
        new Winston.transport.File(options.warnfile),
        new Winston.transport.File(options.errorFile),
        new Winston.transport.console(options.console),
    ],
    exitOnError:false, // no finaliza en excepciones no manejadas
});
// esto sirve para acomplar morgan a winston

logger.stream={
    write(message){logger.info(message)}
};

//exportando el logger
 export default logger;