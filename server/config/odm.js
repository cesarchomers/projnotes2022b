import mongoose, { connect } from 'mongoose';
import logger from './winston';

class MongooseOdm {
  // constructor de la clase
  constructor(url) {
    this.url = url;
  }

  async connect() {
    try {
      // configuraciones que requiere mongoose
      mongoose.Promise = global.Promise;
      logger.info('conectado a la DB en: $(this.url)');
      // intento de conexion
      const connection = await mongoose.connect(this.url);
      return connection;
    } catch (error) {
      logger.error(
        `no se pudo realizar la conexion debido a: ${error.message}`
      );
      return false;
    }
  }
}

export default MongooseOdm;
