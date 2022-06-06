function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui

for (let numero of arrayDeNumeros){
 
  if (numero === numeroEscolhido){
    let contador = arrayDeNumeros.filter(numeroEscolhido).length
  }else if{
     return `Número não encontrado`
  }
}

  if(contador === 0){
    return `Número não encontrado`
}else{
   return `O número ${numeroEscolhido} aparece ${contador}x`
}
}

