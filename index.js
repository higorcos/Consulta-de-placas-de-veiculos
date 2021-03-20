const express = require('express'); //importando biblioteca 
const app = express(); // cria uma instacia do express
const bodyParser = require('body-parser') // bibilioteca para trabalhorar com formulários 
const database = require('./database/database')//conexão com banco de dados

//Tabela 
const Plates = require('./plates/plates')
//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//conexão com o banco de dados 
 database
.authenticate()
.then(()=>{
    console.log('///////////////Conectado ao Banco de dados')
}).catch((err)=>{
    console.log(err)
    console.log("Erro no banco de dados")
})
app.get('/',(req,res)=>{
    //res.send('Page')
    Plates.create({
        plates: 'AAA-0001',
        state: 'Maranhão' 
    }).then(()=> {
        res.send('Era só teeeeste um booyyy')
    })
        //res.send('.....')
})
app.get('/kk', (req,res) =>{
    res.send('//////////////////////')
})
app.listen(8080,()=>{
    console.log('///////////////Servidor online ')
})

// criação de todas as posibilidades de placas 
// update da região das veiculos
// 