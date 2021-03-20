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

for (let number = 0; number < 100; number++) { //50100
  var letter1 = Random_Letter()
  let lett_1 = letter1.letterRandom
  let letter2 = Random_Letter()
  let letter3 = Random_Letter()
  //-------------------------
  let numberRandom1 = Random_Number()
  let numberRandom2 = Random_Number()
  let numberRandom3 = Random_Number()
  let numberRandom4 = Random_Number()

  let partLetter = letter1.letterRandom + letter2.letterRandom + letter3.letterRandom// parte das letras da placa
  let partNumbers = '-' + numberRandom1 + numberRandom2 + numberRandom3 + numberRandom4//parte dos numeros
  var Possibilities01 = partLetter + partNumbers// juntando as partes dos letras e dos numeros

  if (Possibilities.includes(Possibilities01) == false) {//verifica se a placa já foi gerada 

    const addPlates = () => {
      let tamanhoArray = Possibilities.length
      Possibilities[tamanhoArray] = Possibilities01
      geradas++
    }


    //console.log(Possibilities01) 
    switch (lett_1) {
      case 'A':
        addPlates();
        break;
      case 'B':
        addPlates();
        break;
      case 'C':
        addPlates();
        break;
      case 'D':
        addPlates();
        break;
      case 'E':
        addPlates();
        break;
      case 'F':
        addPlates();
        break;
      case 'G':
        addPlates();
        break;
      case 'H':
        addPlates();
        break;
      case 'I':
        addPlates();
        break;
      case 'J':
        addPlates();
        break;
      case 'K':
        addPlates();
        break;
      case 'L':
        addPlates();
        break;
      case 'M':
        addPlates();
        break;
      case 'N':
        addPlates();
        break;
      case 'O':
        addPlates();
        break;
      case 'P':
        addPlates();
        break;
      case 'Q':
        addPlates();
        break;
      case 'R':
        addPlates();
        break;
      case 'S':
        addPlates();
        break;
      case 'T':
        addPlates();
        break;
      case 'U':
        addPlates();
        break;
      case 'V':
        addPlates();
        break;
      case 'W':
        addPlates();
        break;
      case 'X':
        addPlates();
        break;
      case 'Y':
        addPlates();
        break;
      case 'Z':
        addPlates();
        break;
      default:


      //console.log()    

    }
  }
}
console.log(Possibilities)
//AAA 0001 a BEZ 9999    
var objeto = {
  001: {
    plates: 'AAA-0001',
    state: 'Maranhão-MA',
  }
}
console.log(objeto)
//console.log(Possibilities)  
console.log("Geradas:", geradas)

