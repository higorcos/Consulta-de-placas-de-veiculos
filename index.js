/* const express = require('express'); //importando biblioteca 
const app = express(); // cria uma instacia do express
const bodyParser = require('body-parser') // bibilioteca para trabalhorar com formulários 
const database = require('./database/database')//conexão com banco de dados
 */

import express from 'express'
const app = express(); // cria uma instacia do express
import bodyParser from 'body-parser'
import database from "./database/database.js"

//Tabela 
//const Plates = require('./plates/plates')
import Plates from "./plates/plates.js";
//platesData   placas 
import platesData from './plates/platesData.js'
//const platesData = require('./plates/platesData')

//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//conexão com o banco de dados 
database
    .authenticate()
    .then(() => {
        console.log('///////////////Conectado ao Banco de dados')
    }).catch((err) => {
        console.log(err)
        console.log("Erro no banco de dados")
    })

app.get('/', (req, res) => {
    //res.send('Page')
    Plates.bulkCreate(platesData.information).then(() => {
        // vai salvar no bando de dados os dados do variavel que esta sendo importada do arquivo dice.plates.js
        // esse arquivo possui placas gerados aleatoriamente com localidades aleatorias
        res.send('Era só teeeeste um booyyy')
    })
    //res.send('.....')
})

app.get('/teste/:plate', (req, res) => {
    let plateSearch = req.params.plate;

    Plates.findOne({
        where: {plates: plateSearch}
        //module exporte (variavel tá junta com outra no array) 
    }).then((plate)=>{
        if(plate == undefined){

            res.send('Não tá no banco de dados ')
        }else{
            res.send('erro')
        }
       /*  Plates.create({
            plates: plateSearch,
            state: "teste"
        }).then(() => {
            
        }) */
        
    })
})


app.listen(8080, () => {
    console.log('///////////////Servidor online ')
})

// criação de todas as posibilidades de placas ===Feito
// update da região das veiculos
// antes de salvar na tabela ver se tem placas repitidas (direto na tabela )