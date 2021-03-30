var arrayLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var possibilities = [];

//Vai gerar as letras
const Random_Letter = () => {
  let min = 0
  let max = 26
  let numberFl = Math.random() * (max - min) + min
  let number = parseInt(numberFl)
  let letterRandom = arrayLetters[number]
  return { letterRandom, number }//para retornar duas ou mais variaveis usa "return {letterRandom, number} e  para acessar "number.lets"
}
//Vai gerar os numero 
const Random_Number = () => {
  let min = 0
  let max = 10
  let numberFl2 = Math.random() * (max - min) + min
  let numberRandom = parseInt(numberFl2)
  return numberRandom
}
const addPlates = (state) => { //vai adcionar as placas e as localizações em um objeto e vai adcionar apenas a placa no array(o array com as placas funciona como um registro de todas as placas já adicionadas)
  let tamanhoArray = possibilities.length
  possibilities[tamanhoArray] = possibilities01 // adciona a nova placa no array
  let plates = possibilities01
  geradas++
  let platesNum = "plates" + geradas //plates == nome da propriedade do objeto 
  objeto[platesNum] = { plates, state } // dentro da propriedade "platesNum" estará os "plates e state"

}
var numberRandom
var geradas = 0
var objeto = {}

for (let number = 0; number < 1000; number++) { // Emquanto o for não atingir o numero indicado continuará a gerar platas aleratória
  //Cada letra e cada digito da placa será gerado aleatoriamente 
  var letter1 = Random_Letter()
  let letter2 = Random_Letter()
  let letter3 = Random_Letter()
  let lett_1 = letter1.letterRandom //essa variavel é criada para determinar uma suposta localidade para a placa (Cada letra tem a sua localidade. EX: toda placa que começa com "A" tera como localidade o "Paraná-PR")
  //-------------------------
  let numberRandom1 = Random_Number()
  let numberRandom2 = Random_Number()
  let numberRandom3 = Random_Number()
  let numberRandom4 = Random_Number()

  let partLetter = letter1.letterRandom + letter2.letterRandom + letter3.letterRandom// parte das letras da placa
  let partNumbers = '-' + numberRandom1 + numberRandom2 + numberRandom3 + numberRandom4//parte dos numeros
  var possibilities01 = partLetter + partNumbers// juntando as partes dos letras e dos numeros

  if (possibilities.includes(possibilities01) == false) {//verifica se a placa já foi gerada/ está presente no array das placas 

// vai determinar a localidade, a partir da primeira letra da placa 
    switch (lett_1) {
      case 'A':
        addPlates("Paraná-PR");
        break;
      case 'B':
        addPlates("São Paulo-SP");
        break;
      case 'C':
        addPlates("Minas Gerais-MG");
        break;
      case 'D':
        addPlates('Maranhão-MA');
        break;
      case 'E':
        addPlates('Mato Grosso do Sul-MS');
        break;
      case 'F':
        addPlates('Ceará-CE');
        break;
      case 'G':
        addPlates('Sergipe-SE');
        break;
      case 'H':
        addPlates('Rio Grande do Sul-RS');
        break;
      case 'I':
        addPlates('Bahia-BA');
        break;
      case 'J':
        addPlates('Pará-PA');
        break;
      case 'K':
        addPlates('Amazonas-AM');
        break;
      case 'L':
        addPlates('Mato Grosso-MT');
        break;
      case 'M':
        addPlates('Goiás-GO');
        break;
      case 'N':
        addPlates('Pernambuco-PE');
        break;
      case 'O':
        addPlates('Rio de Janeiro-RJ');
        break;
      case 'P':
        addPlates('Piauí-PI');
        break;
      case 'Q':
        addPlates('Santa Catarina-SC');
        break;
      case 'R':
        addPlates('Paraíba-PB');
        break;
      case 'S':
        addPlates('Espírito Santo-ES');
        break;
      case 'T':
        addPlates('Alagoas-AL');
        break;
      case 'U':
        addPlates('Tocantins-TO');
        break;
      case 'V':
        addPlates('Rio Grande do Norte-RN');
        break;
      case 'W':
        addPlates('Acre-AC');
        break;
      case 'X':
        addPlates('Roraima-RR');
        break;
      case 'Y':
        addPlates('Rondônia-RO');
        break;
      case 'Z':
        addPlates('Amapá-AP');
        break;
      default:


      //console.log()    

    }
  }
}

//console.log("##########GO############")

var information = [] // array com as placas e os state

for(var nameProp in objeto) { // vai ajudar a organizar os dados e facilitar na hora de enviar para o banco de dados 
 var valor = (objeto[nameProp]) 
 let tamanhoArray = information.length

 information[tamanhoArray] = valor // vai contém apenas com os valores dentro da propriedade sem o nome da propriedade
}
//console.log(information) // vai printar apenas com os valores dentro da propriedade sem o nome da propriedade
console.log("Geradas:", geradas)
//console.log("##########FINGH############");

var check = possibilities // vai ser usado para verificar se alguma das placas geradas já tá no banco de dados  
 export default {information , check}
 //export default information 
 /* module.exports = {
  check,
  information,
} */