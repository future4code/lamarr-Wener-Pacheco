//Exercícios de Interpretação de Código
/*1
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a. 10

b. não apareceria nada no console, pois a função console.log faria a impressão do resultado no console, 
mas o calculo seria feito normalmente.

2.
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. converte o texto inserido pelo usuário em letras minúsculas e verifica se a palavra cenoura está presente 
nas frases.
b.I- true
  II- true
  III- true*/

//Exercícios de escrita de código
/*1
a.

function dadosPessoais() {
console.log(`Eu sou Wener, tenho 39 anos, moro em Pindamonhangaba e sou empregada pública .`)

}

dadosPessoais()

b.
function dadosPessoais(nome,idade,cidade,atividade){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${atividade}.`)

}

dadosPessoais(nome="Ana", idade=28, cidade="Santos", atividade="estudante")*/

/*2

a.
function soma(num1,num2){
console.log(num1+num2)
}

soma(num1=114, num2=6)

b.
function comparacao(num1,num2){
return num1>=num2

}

console.log(comparacao(num1=20, num2=42))

c.

function oNumeroEPar(numero){
return console.log(numero %2 === 0)

}

oNumeroEPar(numero=17)

d.

const mensagem=(prompt('Digite uma Mensagem.'))

function pensamento(mensagem){
    console.log(mensagem.toUpperCase(), mensagem.length)
}

pensamento(mensagem)

3.

const numero1= Number(prompt('Insira um número.'))
const numero2= Number(prompt('Insira mais um número.'))

function soma(numero1,numero2){
    console.log(numero1+numero2)
}

function subtracao(numero1,numero2){
    console.log(numero1-numero2)
}

function multiplicacao(numero1,numero2){
    console.log(numero1*numero2)
}

function divisao(numero1,numero2){
    console.log(numero1/numero2)
}

soma(numero1,numero2)
subtracao(numero1,numero2)
multiplicacao(numero1,numero2)
divisao(numero1,numero2)*/

//DESAFIOS
/*1
a.
const idade =(anos)=>{
    console.log(anos)
}
 idade(39)

 b.
 Não consegui fazer
 
 

c.

function hipotenusa(cateto1,cateto2){
    console.log(Math.sqrt((Math.pow(cateto1,2))+(Math.pow(cateto2,2))))
}

hipotenusa(3,4)*/