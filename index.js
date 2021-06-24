import express from 'express' //importando biblioteca
const app = express(); // cria uma instacia do express

import database from "./database/database.js" //conexão com banco de dados
import Plates from "./plates/plates.js"; //Tabela 
import platesData from './plates/platesData.js' //platesData   placas 

import bodyParser from 'body-parser' // bibilioteca para trabalhorar com formulários 


//view engine
app.set('view engine', 'ejs');//para usar o ejs para carregar as páginas
//static(arquivos estaticos)
app.use(express.static('public'));

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


//home
app.get('/', (req, res) => {

    res.render('index')
    
})
// multiplos registros de placas
app.get('/gerar', (req, res) => {

    Plates.bulkCreate(platesData.information).then(() => {
    // vai salvar no bando de dados os dados do variavel que esta sendo importada do arquivo dice.plates.js
    // esse arquivo possui placas gerados aleatoriamente com localidades aleatorias
    res.render('generator');
    }).catch(() => {

    res.render('generator') 
     })
})

//rota de pesquisa 
app.post('/placa/pesquisa', (req, res) => {
    let plateSearch = req.body.plateName;

    Plates.findAll({ //vai pesquisar a placa indicada está no  banco de dados 
        where: { plates: plateSearch },
    }).then(plate => {    //se a pesquisa ocorrer, vai passar o 'plates' como parametro  
   
        if (plate.length != 0) {      // se a placa for diferente de underfined / encontrada no banco de dados
            res.render('result', { value: plate });

        } else {
            //res.redirect('/')
            res.render('err');//colocar um alert 
            
        }
    }).catch(erro => {
        res.render('err')

    })
})
//Rota de crição 
/*  Plates.create({
         plates: plateSearch,
         state: "teste"
     }).then(() => {
         
     }) */
app.listen(8081, () => {
    console.log('///////////////Servidor online ')
})


// update da região das veiculos

// box com a placa e a cidade e uma foto aleatória
// tornar a geração de placas uma função, para que gere mais placas cada vez que o usuário entrar no homepage
// habilitar pesquisa por localidade 