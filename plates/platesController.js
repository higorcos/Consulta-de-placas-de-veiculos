var arrayLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var Possibilities = [];

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
var numberRandom
var geradas = 0
class claOB {
  constructor(board,state){
    this.plates = {
      "plates": board,
      "state": state
    }
  } 
}
//var objeto = new claOB()
var objeto = {
  
  
}  

for (let number = 0; number < 1000 ; number++) { //50100
  var letter1 = Random_Letter()
  let letter2 = Random_Letter()
  let letter3 = Random_Letter() 
  let lett_1 = letter1.letterRandom
  //-------------------------
  let numberRandom1 = Random_Number()
  let numberRandom2 = Random_Number()
  let numberRandom3 = Random_Number()
  let numberRandom4 = Random_Number()

  let partLetter = letter1.letterRandom + letter2.letterRandom + letter3.letterRandom// parte das letras da placa
  let partNumbers = '-' + numberRandom1 + numberRandom2 + numberRandom3 + numberRandom4//parte dos numeros
  var Possibilities01 = partLetter + partNumbers// juntando as partes dos letras e dos numeros

  if (Possibilities.includes(Possibilities01) == false) {//verifica se a placa já foi gerada 
  ////////////////////////////////// 

    
    const addPlates = (board) => {
      let tamanhoArray = Possibilities.length
      Possibilities[tamanhoArray] = Possibilities01
      
      geradas++ 
      let platesNum = "plates"+ geradas
      
      //objeto.plates = Possibilities01
      //objeto.plates = board
      objeto[Possibilities01] = board
      //objeto[platesNum] = Possibilities01 
      //objeto[platesNum] += board
      //objeto[geradas] = board
      
    }   
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
//console.log(Possibilities)
//AAA 0001 a BEZ 9999 
console.log("######################")

console.log(objeto)
//console.log(objeto)

//console.log(Possibilities)  
console.log("Geradas:", geradas)
console.log("######################")
