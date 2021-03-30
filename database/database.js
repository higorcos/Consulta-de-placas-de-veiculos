/* const sequelize = require('sequelize') */
import sequelize from 'sequelize'

const database = new sequelize('Placas','root','password',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

//module.exports = database;
export default database;