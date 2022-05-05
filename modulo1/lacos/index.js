// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS

/*1.

Ocódigo está fazendo um loop onde ele cria a variante valor a partir das repetições.
como ele fará essa operação 4 vezes o ultmo valor atibuído à variante valor será 10.
Assim, ele imprimirá 10 no console.

2.
a. serão impressos os números do array que forem maiores que 18.
neste caso, seriam os números: (19,21,23,25,27 e 30)

b. o For Of não foi suficiente para percorrer as posições do array, 
somente consegui fazer isso, fazendo o uso da condicional if e criando nela uma variável que armazenasse 
o indexOf() dos elementos

3.
*
**
***
****

EXERCÍCIOS DE ESCRITA DE CÓDIGO 
1.

let quantidadePet= Number(prompt('Quantos pets você possui?'))
let arrayNomes = []

if(quantidadePet===0){
    console.log('Que pena! Você pode adotar um pet!')

}else{

    for(i=0; i<quantidadePet ; i++ ) {

    let nomePet = (prompt("Informe o Nome do seu pet- um por vez"))
    
     arrayNomes.push(nomePet)
    }
        console.log(arrayNomes)
    }





2

let arrayOriginal= [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let numero of arrayOriginal) {
    if(arrayOriginal.length>=0){
        console.log(numero)
    }
}

for(let numero of arrayOriginal) {
    if(arrayOriginal.length>=0){
        console.log(numero/10)
    }
}

let novoArray = []

for(let numero of arrayOriginal) {
    if(arrayOriginal.length>=0){
    }if (numero%2===0)
        novoArray.push(numero) 
    }
    console.log(novoArray)


    for(let i=0; i<arrayOriginal.length;i++) {
        if(arrayOriginal.length>=0)
            console.log(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
        }

        function valorMaximo( arrayOriginal ) { 
            let maiorNumero = 0
            
            for( let i = 0 ; i < arrayOriginal.length ; i++ ){ 
                let numeroTeste = arrayOriginal[i]
                    if( numeroTeste > maiorNumero ){
                        maiorNumero=numeroTeste
                }
            }
            return `o maior numero é ${maiorNumero}` 
        }
        
        function valorMinimo( arrayOriginal ) { 
            let menorNumero = 200
            
            for( let i = 0 ; i < arrayOriginal.length ; i++ ){ 
                let numeroTeste = arrayOriginal[i]
                    if( numeroTeste < menorNumero ){
                        menorNumero=numeroTeste
                }
            }
            return `o menor numero é ${menorNumero}` 
        }
        
        console.log(valorMaximo(arrayOriginal),"e", valorMinimo(arrayOriginal))
        
    */