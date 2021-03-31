/* const express = require('express'); //importando biblioteca 
const app = express(); // cria uma instacia do express

const database = require('./database/database')//conexão com banco de dados
const Plates = require('./plates/plates') //Tabela
const platesData = require('./plates/platesData') //platesData   placas 

const bodyParser = require('body-parser') // bibilioteca para trabalhorar com formulários 
*/

import express from 'express' //importando biblioteca
const app = express(); // cria uma instacia do express

import database from "./database/database.js" //conexão com banco de dados
import Plates from "./plates/plates.js"; //Tabela 
import platesData from './plates/platesData.js' //platesData   placas 

import bodyParser from 'body-parser' // bibilioteca para trabalhorar com formulários 
import plates from './plates/plates.js';


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
    //res.send('Geração de plates desativada ')
})

app.get('/placa/:plate', (req, res) => {
    let plateSearch = req.params.plate;

    Plates.findOne( 
        {where: {plates: plateSearch}} 
               
        ).then((plate)=>{
        //module exporte (variavel tá junta com outra no array) 
        //os dados para serem pesquisados e platesData.check
        //pode ser que fazer um array EXEMPLO [where: plates: plateSearch]
       
        if(plate == undefined){// se a placa não for encontrada no banco de dados

            res.send('err') 
            /*  Plates.create({
                 plates: plateSearch,
                 state: "teste"
             }).then(() => {
                 
             }) */
        }else{
            res.send("Encontrada")
        }
        
    })
})


app.listen(8083, () => {
    console.log('///////////////Servidor online ')
})

// criação de todas as posibilidades de placas ===Feito
// update da região das veiculos
// antes de salvar na tabela ver se tem placas repitidas (direto na tabela )