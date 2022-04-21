// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1+num2
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  return console.log (prompt('Digite uma mensagem!'))
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

const altura=Number(prompt('Informe a altura!'))
const largura=Number(prompt('Informe a largura!'))

return console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
const anoAtual=Number(prompt('Informe o ano atual!'))
const anoNascimento=Number(prompt('Informe o ano em que você nasceu.'))

return console.log(anoAtual-anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  let imc = (peso/(altura*altura))

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome=(prompt('Informe o seu nome!'))
  const idade=Number(prompt('Informe a sua idade'))
  const email=(prompt('Informe seu e-mail.'))

  return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
 

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
 let cor1=(prompt("Informe uma cor!"))
 let cor2=(prompt("Informe outra cor!"))
 let cor3=(prompt("Informe uma terceira cor."))
 
 const coresFavoritas= [cor1, cor2, cor3]
 
 return console.log (coresFavoritas)
 
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return (custo/valorIngresso)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length===string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
  const primeiro = array[0] 
  const ultimo= array[array.length-1]

  array[0] = ultimo
  array[array.length-1] = primeiro

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase()===string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  
 let anoAtual = Number(prompt('Informe o ano atual'))
 let anoNascimento = Number(prompt('Informe o ano de seu nascimento.'))
 let emissaoRG = Number(prompt('Informe o ano de emissão de seu RG'))
 
 let idadeAtual = (anoAtual-anoNascimento) 
 let tempoEmissaoRG = (anoAtual-emissaoRG)
 
 const renovaRG1 = (idadeAtual <= 20) && ((anoAtual-emissaoRG)>=5)
 const renovaRG2 = (idadeAtual >20) && (idadeAtual<= 50) && (tempoEmissaoRG>=10)
 const renovaRG3 = ((idadeAtual > 50) && (tempoEmissaoRG>=15))
 
 console.log(renovaRG1||renovaRG2||renovaRG3 == true)
 

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 let cond1= ((ano%400)===0)
 let cond2= ((ano%4)===0)
 let cond3=((ano%100)!==0)
 
 const verif1= (cond2===true)
 const verif2= (cond2&&cond3||cond1===true)

 return verif1&&verif2===true
 

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  
  const idade=((prompt('Você tem mais de 18 anos?')).toLowerCase())
  const ensino=((prompt('Você possui ensino médio completo?')).toLowerCase())
  const disponibilidade=((prompt('Você possui disponibilidade exclusiva durante os horários do curso?')).toLowerCase())
  

  const inscricaoValida = (idade&&ensino&&disponibilidade===sim)
  return console.log (inscricaoValida)


}