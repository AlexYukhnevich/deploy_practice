import { Sequelize } from "sequelize";
import { dbConfig } from "../../config";

const { dbUrl, dialect } = dbConfig;

const options = {
    Dialect: dialect,
    host: "localhost"
};

export const sequelize =  new Sequelize(dbUrl, options);