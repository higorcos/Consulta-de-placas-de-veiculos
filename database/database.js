/* const sequelize = require('sequelize') */
import sequelize from 'sequelize'

const database = new sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

//module.exports = database;
export default database;
