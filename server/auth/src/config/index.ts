import dotenv from 'dotenv';

dotenv.config();

const appConfig = {
  port: process.env.APP_PORT,
  clientHost: process.env.CLIENT_HOST,
  serverHost: process.env.SERVER_HOST,
  gatewayHost: process.env.GATEWAY_HOST,
};

const dependenciesConfig = {
  saltRounds: 10,
};

const mailConfig = {
  mailSecret: process.env.MAIL_SECRET,
  senderMail: process.env.SMTP_USERNAME,
  senderPassword: process.env.SMTP_PASSWORD,
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
};

const dbConfig = {
  dbUrl: process.env.DB_URL,
  dialect: process.env.DB_DIALECT,
};

const jwtConfig = {
  appSecret: process.env.JWT_SECRET,
  expiresIn: String(process.env.JWT_EXPIRES_IN),
  activateKey: process.env.JWT_ACC_ACTIVATE,
};

const config = {
  appConfig,
  dependenciesConfig,
  mailConfig,
  dbConfig,
  jwtConfig,
};

for (const key in config) {
  Object.entries(config[key]).forEach(([k, v]) => console.log(`${k} : ${v}`))
}

export {
  appConfig,
  dependenciesConfig,
  mailConfig,
  dbConfig,
  jwtConfig,
}