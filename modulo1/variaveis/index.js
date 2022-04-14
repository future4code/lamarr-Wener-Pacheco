// Exercicios de interpretação de código
/* 1) console.log(b)= 10
      console.log(a,b)= 10, 5 

2) console. log (a,b,c) = 10 10 10

3) p = cargaHorariaDiaria
   t = remuneracaoDiaria*/

//Exercícios de escrita de código

//1)

let nome
let idade

console.log (typeof nome)
console.log (typeof idade)

//Ambos os casos o resultado do typeof foi undefined devido a falta de atribuição de valor

nome = prompt("Qual é o seu nome")
idade = prompt ("Qual é sua idade?")

console.log(typeof nome)
console.log(typeof idade)

//O tipo mudou para String

console.log("Olá", nome, ",você tem", idade, "anos")

//2)

let peixe =(prompt ("Você gosta de comer peixe?"))
let churrasco = (prompt ("Você gosta de churrasco?"))
let pet = (prompt ( "você possui algum pet?"))

console.log (peixe)
console.log (churrasco)
console.log (pet)

//3

let a = 10
let b = 25

const c = a

console.log (c)

a = b
b = c

console.log ("O novo valor de a é", a)
console.log ("O novo valor de b é", b)

//Desafios

//1

let primeiroNumero = Number(prompt ("escolha um número"))
let segundoNumero = Number (prompt("Agora, escolha outro número"))

console.log ("O primeiro número somado ao segundo número resulta em:", primeiroNumero+segundoNumero)
console.log ("O primeiro número multiplicado pelo segundo número resulta em:", primeiroNumero*segundoNumero)
