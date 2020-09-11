import dotenv from 'dotenv';

dotenv.config();

const appConfig = {
  port: process.env.APP_PORT,
  clientHost: process.env.CLIENT_HOST,
  serverHost: process.env.SERVER_HOST,
};

const dbConfig = {
  dialect: process.env.DB_DIALECT,
  dbUrl: process.env.DB_URL,
};

const jwtConfig = {
  appSecret: process.env.JWT_SECRET,
  expiresIn: String(process.env.JWT_EXPIRES_IN),
};

// for sorted values
const allowedColumnValues = ['name', 'status', 'resources', 'price', 'provider', 'complicity', 'start_date', 'deadline', 'offers'];

export {
  appConfig,
  dbConfig,
  jwtConfig,
  allowedColumnValues,
};