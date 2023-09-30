const dbConfig = require('../config/dbConfig.js');

const { Sequelize, DataTypes } = require('sequelize');

// console.log(dbConfig, "index.js dbConfig");
const sequelize = new Sequelize(
  dbConfig.DB_DATABASE,
  dbConfig.DB_USER,
  dbConfig.DB_PASSWORD,
  {
    host: dbConfig.DB_HOST,
    dialect: dbConfig.dialect,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log('connected...');
  })
  .catch((err) => {
    console.log('Error' + err);
  });

const db = {};
db.Sequelize = Sequelize;

db.sequelize = sequelize;

db.userTodos = require('./usertodoModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log('yes re-sync don!');
});

module.exports = db;
