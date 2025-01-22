require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.LOCAL_USER, process.env.LOCAL_DB_PASSWORD, {
    // : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {

      host: 'localhost',
      // host: process.env.DB_HOST,
      // port: process.env.DB_PORT || 3306,
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;

