// Exercícios de interpretação de código

/*1)

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

a. false
b. false
c. true
d. boolean*/

/* 2)
Com as variáveis escritas dessa forma, o sistema considerará o resultado dos prompts
como string e irá concatená-los ao invés de realizar a soma.*/

/*3)

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

Como o resultado do prompt é sempre uma String, é preciso converter o 
resultado para número. Para isso, basta reescrever as variáveis da seguinte forma:

let primeiroNumero = Number(prompt("Digite um número!"))
let segundoNumero = Number(prompt("Digite outro numero!"))*/

//Exercícios de Escrita de Código

/*1)

let idade = Number(prompt("Qual sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu/sua melhor amigo(a)"))

console.log ("Sua idade é maior do que a do seu/sua melhor amigo(a)?", idade>idadeAmigo)
console.log(idade-=idadeAmigo)*/

/*2

a) let numero = Number(prompt("Digite um número PAR"))

b) console.log (numero % 2)

c) a divisão por 2 tem resto zero

d) a divisão por 2 terá resto diferente de zero*/

/*3)

let idade = Number(prompt("Qual a sua idade?"))

console.log (idade*12)
console.log (idade*365)
console.log (idade*8760)*/

/*4)

let primeiroNumero = Number(prompt("Digite um número."))
let segundoNumero = Number(prompt("Agora, informe outro número."))

let resultado = primeiroNumero%segundoNumero
let resultado2 = segundoNumero%primeiroNumero

console.log("O primeiro numero é maior que segundo?", primeiroNumero>segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero===segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", resultado===0)
console.log("O segundo numero é divisível pelo primeiro?", resultado2===0)*/

//DESAFIOS

/*1)

a. const temperaturaFahrenheit = 77

   console.log("Kelvin =",((temperaturaFahrenheit-32)*(5/9)+273.15))

b. const temperaturaCelsius = 80

   console.log("Fahreheit =", ((temperaturaCelsius*(9/5))+32))

c. const temperaturaCelsius = 30

   console.log("Fahreheit =", ((temperaturaCelsius*(9/5))+32), ",Kelvin =", (temperaturaCelsius+273.15))

d. let temperaturaCelsius = Number(prompt("Informe a temperatura, em graus Celsius."))
   
   console.log("Fahreheit =", ((temperaturaCelsius*(9/5))+32), ",Kelvin =", (temperaturaCelsius+273.15))

2)

a. const consumoKwH = 280

   console.log("Valor conta energia = R$", (consumoKwH*0.05))

b. let consumoKwH= Number(prompt("Informe o consumo mensal de energia?"))

   console.log("Valor conta energia = R$", ((consumoKwH*0.05)*0.85))

3)

a. const lb = 20
   console.log("20lb equivalem a", (lb/2.205),"Kg")

b. const oz = 10.5
   console.log("10.5oz equivalem a", (oz/35.274),"Kg")

c. const milha = 100
   console.log("100mi equivalem a", (milha*1609.34),"m")

d. const pes = 50
   console.log("50ft equivalem a", (pes/3.281),"m")

e. const galao = 103.56
   console.log("103.56gal equivalem a", (galao*3.78),"l")

f. const xicara = 450
   console.log("450 xic equivalem a", (xicara*0.24),"l")

g. let xicara = Number (prompt("Informe a quantidade de xícaras."))
   console.log(xicara ,"xicaras, equivalem a", (xicara*0.24),"l")*/

