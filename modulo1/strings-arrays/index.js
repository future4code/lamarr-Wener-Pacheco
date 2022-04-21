//Exercícios de Interpretação de Código
/*1
let array
console.log('a. ', array)
Resposta: a. undefined

array = null
console.log('b. ', array)
Resposta: b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
resposta: c. 11

let i = 0
console.log('d. ', array[i])
Resposta: d. 0

array[i+1] = 19
console.log('e. ', array)
Resposta: e.  ( não existe a descrição do array, somente do item [i+1])

const valor = array[i+6]
console.log('f. ', valor)
Resposta: f. array[i+6] (não existe a descrição do array,assim, não posso substituir por valores )*/

/*2
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for:
"Subi num ônibus em Marrocos"?

Resposta: SUBI NUM ÔNIBUS EM MIRROCOS, 27 */

//exercícios de escrita de códigos

/*1.

const nomeDoUsuario = (prompt('Informe seu nome.'))
const emailDoUsuario = (prompt('Informe seu e-mail.'))

console.log (`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

2.

a.

const comidasPreferidas = ["churrasco","torta capixaba","caldo verde","tortelle","macarronada"]
console.log (comidasPreferidas.toString())

b.
console.log ('Essas são as minhas comidas preferidas:')
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

c.

const novaComida = (prompt('Informe a sua comida favorita'))

console.log (comidasPreferidas.toString().replaceAll('torta capixaba', novaComida ))

3.

a.

let listaDeTarefas= [ , , ]

b.
const tarefa1=(prompt('Qual será a primeira tarefa do dia?'))
const tarefa2=(prompt('Informe a sua segunda tarefa.'))
const tarefa3=(prompt('Qual será a tarefa número 3?'))

listaDeTarefas[0] = tarefa1
listaDeTarefas[1] = tarefa2
listaDeTarefas[2] = tarefa3

c.
console.log(listaDeTarefas)

d.
let tarefaRealizada = Number(prompt("Informe o índice da tarefa realizada"))

let novaListaDeTarefas = (listaDeTarefas.splice(tarefaRealizada,1))

console.log= (novaListaDeTarefas)*/

//Desafios

/* 1.

let frase = (prompt("Informe uma frase."))

const conjuntoFrase = frase.split(" ");

console.log(conjuntoFrase)

2.

const frutas=["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let fruta = (prompt("Qual fruta deseja buscar?"))

let indice = (frutas.indexOf(fruta))

console.log(fruta,indice)*/



