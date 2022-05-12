/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//1 - 
   console.log('Boas vindas ao jogo de BlackJack')

//2 a 7
   let novaRodada=((confirm('Quer iniciar uma nova rodada?'))===true)

   switch (novaRodada){
   case true :
   let carta1 = comprarCarta()
   let carta2 = comprarCarta()
   let carta3 = comprarCarta()
   let carta4 = comprarCarta()

   let valorCartaUsuario = carta1.valor + carta2.valor
   let valorCartaComputador = carta3.valor + carta4.valor

      console.log ("Usuário - cartas:", carta1.texto,',', carta2.texto,'-', valorCartaUsuario)
      console.log ("Computador - cartas:", carta3.texto,',', carta4.texto,'-', valorCartaComputador)
   
      const resultadoJogo = (valorCartaUsuario - valorCartaComputador)

      if(resultadoJogo > 0){
         console.log('O usuário venceu!')
      
      }else if(resultadoJogo < 0){
         console.log('O computador venceu!')
      
      }else{
         console.log('Empate!')
      }
         break;

   default:
      console.log('O jogo acabou!')
   break;
}

