require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      // host: 'localhost',
      host: `/cloudsql/${process.env.DB_HOST}`,
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
        socketPath: `/cloudsql/${process.env.DB_HOST}`,
      },
    });

module.exports = sequelize;

