const sequelize = require('sequelize')
const database = require('../database/database')

const plates = database.define('plates', {
    plates:{
        type: sequelize.STRING,
        allowNull: false
    },state: {
        type: sequelize.STRING,
        allowNull: false
    }
})

plates.sync({force: false})//vai criar a tabela quando ainda não existir
//plate.sync({force: true})// vai forçar a criação 

module.exports = plates;