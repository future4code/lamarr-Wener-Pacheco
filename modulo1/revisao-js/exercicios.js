// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a,b) {
        if (a>b) return 1;
        if (a<b) return -1;
        return 0
    }) 
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter(pares =>( pares % 2)===0)
    //Desafio
        let novoArray=[]
        for(let numero of array){
            if(array.length >=0){
                if(numero%2===0)
                novoArray.push(numero)
            }
        }
        return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray=[]
    for(let numero of array){
        if(array.length >=0){
            if(numero%2===0)
            novoArray.push(numero**2)
        }
    }
    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
            
    for( let i = 0 ; i < array.length ; i++ ){ 
        let numeroTeste = array[i]
            if( numeroTeste > maiorNumero ){
                maiorNumero=numeroTeste
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let comparativos = {
        maiorNumero: math.max (num1,num2),
        maiorDivisivelPorMenor: (math.max(num1,num2) % math.min(num1,num2))===0,
        diferenca: (math.max(num1,num2) - math.min(num1,num2))
    }
        return comparativos;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let classificacao
    if(ladoA===ladoB&&ladoB===ladoC&&ladoA===ladoC){
        classificacao = "Equilátero"
        }else if(ladoA===ladoB||ladoB===ladoC||ladoA===ladoC) {
        classificacao = "Isósceles"
    }else{
        classificacao = "Escaleno"
    }
return classificacao
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let maiorNumero = 0
    for( let i = 0 ; i < array.length ; i++ ){ 
        let numeroTeste = arrayl[i]
            if( numeroTeste > maiorNumero ){
                maiorNumero=numeroTeste
              array.splice(maiorNumero,1)
            }
    let menorNumero = 900
            
    for( let i = 0 ; i < array.length ; i++ ){ 
        let numeroTeste = novoMaior[i]
            if( numeroTeste < menorNumero ){  
                menorNumero=numeroTeste
                 array.splice(menorNumero,1);
            }
        let novoMaior =0
        let novoMenor = 9999
            for( let i = 0 ; i < array.length ; i++ ){ 
            let numeroTeste = arrayl[i]
                if( numeroTeste > novoMaior ){
                    novoMaior=numeroTeste
                }if (numeroTeste < novoMenor ){
                    novoMenor=numeroTeste
                }
            }
        }
    }
    return novoMaior,novoMenor
   
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let pessoaAnonimo = {...pessoa} 
     pessoaAnonimo.nome = "ANÔNIMO"

    return pessoaAnonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = [ ]

    for (let pessoa of pessoas){
        if( pessoa.idade >14 && pessoa.idade <=60 && pessoa.altura>=1.5){
            pessoasAutorizadas.push(pessoa)
        }
    }
        return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoAutorizadas = [ ]

    for (let cliente of pessoas){
        if( cliente.idade <=14||cliente.idade >60 || cliente.altura<1.5){
            naoAutorizadas.push(cliente)
        }
    }
        return naoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    // let somaCompras = 0
    //     for(item of contas.compras){
    //     somaCompras = item+somaCompras
   
}



// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const consultasOrdenadas = consultas.sort((a,b)=>{
        return a.nome.localeCompare(b.nome);
    })
    return consultasOrdenadas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const datasOrdenadas = consultas.sort((a,b)=>{
        return a.consultasData.reverse()-b.consultasData.reverse();
    })
    return datasOrdenadas 
}
