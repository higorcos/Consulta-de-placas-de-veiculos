/* const sequelize = require('sequelize')
const database = require('../database/database') */
import sequelize from 'sequelize'
import database from '../database/database.js'

const plates = database.define('plates', {
    plates:{
        type: sequelize.STRING,
        allowNull: false,
        unique: true, //Bloqueia registros duplicados 
    },state: {
        type: sequelize.STRING,
        allowNull: false
    }
})

plates.sync({force: false})//vai criar a tabela quando ainda não existir
//plate.sync({force: true})// vai forçar a criação 

//module.exports = plates;
export default plates;