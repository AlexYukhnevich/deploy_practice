import { sequelize } from './connect-to-db';
import { DatabaseConnectionError } from '../../errors/classes';

export const initDbConnection = async (retries = 5) => {
  while (retries) {
    try {
      await sequelize.sync();
      console.log('Connection has been established successfully.');
      break;
    } catch ({ message }) {
      console.log({ message });
      retries -= 1;
      if (!retries) {
        throw new DatabaseConnectionError();
      }
      console.log(`retries left: ${retries}`);
      await new Promise(res => setTimeout(res, 10000));
    }
  }
}
