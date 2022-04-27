// Exercícios de Interpretação de Código
/*1.

a.
console.log(filme.elenco[0]) = Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) = Virginia Cavendish
console.log(filme.transmissoesHoje[2]) = Globo, horario: 14h */

/*2.
a.
console.log(cachorro) = Juca
console.log(gato) = Juba
console.log(tartaruga) = Jubo

b. faz o espelhamento do objeto, faz a cópia do array e permite que ele 
seja manipulado.*/

/*3.
a.
console.log(minhaFuncao(pessoa, "backender")) = Caio, false
console.log(minhaFuncao(pessoa, "altura")) = Caio, undeffined

b.
a propriedade "altura" não foi declarada*/

//Exercícios de Escrita de Código.

/*1
a.

const pessoa = {
    nome: 'Eleonora',
    apelidos:["Lelê", "Formiguinha", "Fioti"]
}
 function meusApelidos() {
     let frase = (`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos}`)
     return frase
 }

console.log(meusApelidos(pessoa))

b.
const novosApelidos = {...pessoa, apelidos:["bb", "Denguinho", "Pitininha"]}

console.log(novosApelidos)
console.log(`Eu sou ${novosApelidos.nome},mas pode me chamar de ${novosApelidos.apelidos}.`)*/

/*2

a.

const pessoa ={
    nome:"Eleonora",
    idade: 6,
    profissao:"estudante"
}

const pessoa2={
    nome:"Julia",
    idade:30,
    profissao:"medica"
}

b.
function minhaFuncao(){

    let dados1 = ( pessoa.nome+","+ pessoa.nome.length+","+pessoa.idade+","+pessoa.profissao+","+pessoa.profissao.length)
    let dados2 =(pessoa2.nome+","+pessoa2.nome.length+","+pessoa2.idade+","+pessoa2.profissao+","+pessoa2.profissao.length)

    return (dados1+","+dados2)
}

console.log ("[",(minhaFuncao(pessoa,pessoa2)), "]")*/

/*3

a.

let carrinho = []

b.
const fruta1={
    nome:"banana",
    disponibilidade:"true"
}

const fruta2={
    nome:"maça",
    disponibilidade:"true"
}

const fruta3={
    nome:"melão",
    disponibilidade:"true"
}

c.
console.log(carrinho.push(fruta1.nome,fruta2.nome,fruta3.nome))

d.
console.log(carrinho)*/

//Desafio
/*1
let usuario = (prompt("Informe seu nome."))
let idade = Number(prompt('Informe sua idade'))
let profissao = (prompt('Informe sua profissão'))

const dadosUsuario={
    nome: usuario,
    faixa_etaria: idade,
    atividade: profissao,
}

console.log("nome:", dadosUsuario.nome,",profissão:",dadosUsuario.atividade, ",idade:", dadosUsuario.faixa_etaria,)

2

const filme1 = {
    anoDeLancamento: 2001,
    nome: "Senhor dos Anéis: A Sociedade do Anel"
}

const filme2 = {
    anoDeLancamento: 1984,
    nome: "Indiana Jones e o Templo da Perdição"
}

function comparaAnoLancamento () {
    const diferençaLancamento = ((filme2.anoDeLancamento-filme1.anoDeLancamento)>=0)
    const lancamentoIgual =(filme1.anoDeLancamento===filme2.anoDeLancamento)

      let padrao = (`O primeiro filme foi lançado antes do segundo? ${ diferençaLancamento}
    O primeiro filme foi lançado no mesmo ano do segundo? ${lancamentoIgual}`)

    return padrao
}

console.log(comparaAnoLancamento(filme1,filme2))*/