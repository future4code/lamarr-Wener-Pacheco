// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS

/*1.

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
    console.log(item, index, array)
  })

  Vai aparecer no console:  o apelido, o índice e o nome

2.
  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
    return item.nome
  })
  
  console.log(novoArrayB)

  Será exibido um novo array, com os 3 nomes do array original

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

  Um novo array somente com os dados daqueles usuários cujo apelido é diferente de "Chijo"*/

  //EXERCÍCIOS DE ESCRITA DE CÓDIGO

  /* 1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

a.
const somenteNome = pets.map((item) => {
    return item.nome
})
console.log(somenteNome)

b.
function somenteSalsicha (pets){
    return pets.raca==="Salsicha"
}

const salsichas = pets.filter(somenteSalsicha)

console.log(salsichas)

c.
function somentePoodles (pets){
    return pets.raca==="Poodle"
}

const nomePoodles = pets.filter(somentePoodles)


const poodle = nomePoodles.map((item) =>{
    return item.nome
})

const arrayNomePoodle = poodle
for(let i=0; i<arrayNomePoodle.length;i++){
if (arrayNomePoodle.length>=0) {
console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${arrayNomePoodle[i]}!`)
}
}
*/
//2.
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a.

let nomeProdutos = produtos.map((item, index, array)=>{
  return item.nome
})
console.log(nomeProdutos)

//b.
let listaReduzida = produtos.map((item)=>{
  return [item.nome,(item.preco*=0.95).toFixed(2)]
})
console.log(listaReduzida)
  
//c.
const somenteBebidas= produtos.filter((item, index, array)=>{
    return item.categoria==="Bebidas"
})

console.log(somenteBebidas)

//d.

let produtosYpê = produtos.filter((item,index,array)=>{
  return item.nome.includes('Ypê')
})

console.log (produtosYpê)

//e.

let produtosYpe = produtos.filter((item)=>{
  return item.nome.includes('Ypê')
})

let mensagem = produtosYpe.map((item,index,array)=>{
console.log(`"Compre ${item.nome} por ${item.preco}"`)
})


//Desafios
//1

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]
//a.

const somenteNome = pokemons.map((item,index,array)=>{
  return item.nome
})
console.log (somenteNome.sort())

