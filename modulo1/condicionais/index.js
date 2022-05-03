// Exercício de Interpretação de código
/*1.

a. esse código verifica se o número é par.
b. números pares, cujo resto da divisão por 2 é zero.
c.números ímpar, cujo resto da divisão por dois é diferente de zero.

2.

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a. testa a condiçao e interrompe a execução do código quando a condição é atendida.
b. O preço da fruta maça é R$ 2.25
c. O preço da fruta pera é R$ 5.50

3.
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

/*a. pedindo um dado ao usuário
b. 10 = Esse número passou no teste
   -10 = Essa mensagem é secreta
c. sim, falta a notação Else no bloco If/Else */

//Exercício de escrita de Código
/*1

a.

let idade = (Number(prompt("informe sua idade")))

b.

console.log(typeof idade)

c.

if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

2.

let turno= (prompt("Informe seu turno de estudo, digitando: M (Manhã)/ V(Vespertino) ou N(Noturno)"))

if(turno === "M"){
    console.log("Bom Dia")
}else if(turno==="V"){
    console.log("Boa Tarde")
} else{
    console.log("Boa Noite")
}

3.

let turno= (prompt("Informe seu turno de estudo, digitando: M (Manhã)/ V(Vespertino) ou N(Noturno)"))

switch (turno){
    case 'M':
       console.log("Bom Dia")
       break
    case 'V':
       console.log("Boa Tarde")
       break
    case 'N':
       console.log("Boa Noite")
       break
}

4.

let generoFilme = (prompt('Qual o Gênero do Filme?'))
let valorIngresso = Number(prompt('Qual o valor do ingresso?'))

let cond1 = (generoFilme === "fantasia")
let cond2 = (valorIngresso < 15)

if( cond1&&cond2===true){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}*/

//DESAFIOS

/*1

let generoFilme = (prompt('Qual o Gênero do Filme?'))
let valorIngresso = Number(prompt('Qual o valor do ingresso?'))

let cond1 = (generoFilme === "fantasia")
let cond2 = (valorIngresso < 15)

if( cond1&&cond2===true){
    let lanche =(prompt("Qual lanchinho gostaria de comprar?"))
    console.log(`Bom filme! e Aproveite seu ${lanche}`)
}else{
    console.log("Escolha outro filme:(")

}

2.*/

let nomeCompleto = (prompt('Informe seu nome completo.'))
let tipoDeJogo = (prompt('Informe o tipo de jogo, usando o seguinte código: IN - Internacional e DO - doméstico'))
let etapaCampeonato = (prompt('Informe a etapa do jogo: SF - semi-final, DT - decisão de Terceiro Lugar e FI - final'))
let categoria = Number(prompt('Informe a categoria:1,2,3 ou 4'))
let quantidade = (prompt('Informe a quantidade de ingressos'))


let valor
 if(etapaCampeonato === 'SF'){
     switch(categoria){
     case '1':
         return(quantidade*1320.00)
    break
     case '2':
         return(quantidade*880)
    break
     case '3':
         return(quantidade*550)
    break
    case '4':
         return(quantidade*220)
    break
}if else (etapaCampeonato==='DT'){
    switch(categoria){
            case '1':
                return(quantidade*660)
           break
        case '2':
                return(quantidade*440)
           break
        case '3':
                return(quantidade*330)
           break
        case '4':
                return(quantidade*170)
           break 
}else{
        switch(categoria){
            case '1':
                return(quantidade*1980.00)
           break
            case '2':
                return(quantidade*1320.00)
           break
            case '3':
                return(quantidade*880)
           break
           case '4':
                return(quantidade*330)
           break
     }
    }


     let valorTotal =

if(tipoDeJogo ==='DO'){
    return(valorTotal = calculaValor)
}else{
    return(valorTotal = (calculaValor*4.10))
}
 
console.log("---Dados da compra--- Nome do cliente:", nomeCompleto, "Tipo do jogo:", tipoDeJogo, "Etapa do jogo:", etapaCampeonato,
"Categoria:", categoria, "Quantidade de Ingressos:", quantidade,"---Valores--- Valor do ingresso:", valorTotal )
