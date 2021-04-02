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


//view engine
app.set('view engine', 'ejs');//para usar o ejs para carregar as páginas
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


//home / multiplos registros de placas
app.get('/', (req, res) => {
   
    //Plates.bulkCreate(platesData.information).then(() => {
        // vai salvar no bando de dados os dados do variavel que esta sendo importada do arquivo dice.plates.js
        // esse arquivo possui placas gerados aleatoriamente com localidades aleatorias
        res.render('index')
    //}).catch(() => {

        res.render('index')
   // })
})
//teste
app.get('/0', (req, res) => {
    
    Plates.create({ plates: 'DFX-8143', state: 'Maranhão-MA' }).then(() => {
        // vai salvar no bando de dados os dados do variavel que esta sendo importada do arquivo dice.plates.js
        // esse arquivo possui placas gerados aleatoriamente com localidades aleatorias
        res.send('criado DFX-8143')
    }).catch(() => {

        res.send('Geração de plates desativada ')
    })
})
//rota de pesquisa 
app.post('/placa/pesquisa', (req, res) => {
    let plateSearch = req.body.plateName;

    Plates.findAll({
        where: { plates: plateSearch },
        //order: [ [ 'createdAt', 'DESC' ]]   
    }).then(plate => {
 
        if (plate == undefined) {// se a placa não for encontrada no banco de dados
            res.send('err')
        } else {
           //Plates.findAll().then(value => { 

                //res.render('result', {value: plateSearch})
                res.render('result', {value: plate})

           //})
        }

    })
})
//Rota de crição 
/*  Plates.create({
         plates: plateSearch,
         state: "teste"
     }).then(() => {
         
     }) */
app.listen(8080, () => {
    console.log('///////////////Servidor online ')
})


// update da região das veiculos

// box com a placa e a cidade e uma foto aleatória
// tornar a geração de placas uma função, para que gere mais placas cada vez que o usuário entrar no homepage
