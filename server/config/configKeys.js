// importamos la dependencia dotEnv
import dotEnv from 'dotenv';

// cargar las variables de entorno
dotEnv.config();

// creando objeto de configuracion

// creando configuracion por defecto
const defaultConfig = {
  port: process.env.PORT || 3000,
  appVersion: process.env.APP_VERSION,
};

// configuracion para desarrollo

const devConfig = {
  nodeEnv: 'development',
  moongoUrl: 'local url',
  debug: process.env.DEBUG,
};

// configurar para produccion
const prodConfig = {
  env: 'production',
  moongoUrl: 'cloud url',
};

// funcion que dado el entorno de ejecucion
// nos retorne el objeto de configuracion adecuando
function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'production':
      return prodConfig;
    default:
      return prodConfig;
  }
}

// exportar la configuracion
export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
