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

    console.log('Boas vindas ao jogo de BlackJack')

    let novaRodada=((confirm('Quer iniciar uma nova rodada?'))===true)
 
   switch (novaRodada){
   case true :
   let carta1 = comprarCarta()
   let carta2 = comprarCarta()
   let carta3 = comprarCarta()
   let carta4 = comprarCarta()

         if (carta1===carta2==="A"){
         carta1= (carta5 = comprarCarta())
         carta2= (carta6 = comprarCarta())

      }else if(carta3===carta4==="A"){
      carta3= (carta7 = comprarCarta())
      carta4= (carta8 = comprarCarta())
   }else{
      carta1=carta1
      carta2=carta2
      carta3=carta3
      carta4=carta4
   }

   let valorCartaUsuario = carta1.valor + carta2.valor
   let valorCartaComputador = carta3.valor + carta4.valor

   let revelaCarta= ((confirm(`Suas cartas são ${carta1.texto} e ${carta2.texto} . A carta revelada do computador é ${carta3.texto}.\
   Deseja comprar mais uma carta?`))===true)
// falta item 11 e 12 do desafio
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
 
 