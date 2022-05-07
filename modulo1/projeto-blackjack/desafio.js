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
   
   const novaRodada=((confirm('Quer iniciar uma nova rodada?'))===true)
    
switch (novaRodada){
   case true:
      let carta1 = comprarCarta()
      let carta2 = comprarCarta()
      let carta3 = comprarCarta()
      let carta4 = comprarCarta()
      
      while (carta1.texto===carta2.texto==='A') {
         carta1 = comprarCarta()
         carta2 = comprarCarta()
      }
      while(carta3.texto===carta4.texto==='A'){
         carta3 = comprarCarta()
         carta4 = comprarCarta() 
      }
   
//carta1= carta1.texto, carta2.valor;
//carta2= carta2.texto, carta2.valor;
//carta3= carta3.texto, carta3.valor;
//carta4= carta4.texto,carta4.valor;

  let valorCartaUsuario = [carta1.valor, carta2.valor]
  let valorCartaComputador = carta3.valor + carta4.valor
  let textosCartas=[carta1.texto, carta2.texto]

  function somaCartas(){
   let soma = 0
   for (var i = 0; i < valorCartaUsuario.length; i++) {
           soma += valorCartaUsuario[i];  
          return soma    
   }
 }

 let valor = somaCartas(valorCartaUsuario)
       
 if(valor <21 ) {
         let compraCarta=((confirm(`Suas cartas são ${textosCartas}. A carta revelada do computador é ${carta3.texto}\n Deseja comprar outra carta?`))===true)
         
            switch(compraCarta){   
               case true:
                carta = comprarCarta()
               let textoCartasAtualizadas = textosCartas.push(carta.texto)
               let valoresAtualizados= valorCartaUsuario.push(carta.valor)
   let compraCartaNova=((confirm(`Suas cartas são ${textoCartasAtualizadas}. A carta revelada do computador é ${carta3.texto}\n Deseja comprar outra carta?`))===true)
            if(compraCartaNova===true){
                  valor = somaCartas(valoresAtualizados)
            }
               break;

            default:
              console.log('Fim de Jogo')
            break;
           }
        }
      }
                  
 



      

   //   if       

   //          }else if (carta1.texto===carta2.texto==='A') {
   //             carta1 = comprarCarta()
   //             carta2 = comprarCarta()
   //          }else if(carta3.texto===carta4.texto==='A') {
   //             carta3 = comprarCarta()
   //             carta4 = comprarCarta()
   //          }
       
   //    console.log (carta1.texto ,carta2 ,carta3, carta4)
            


     
      
   // 
     
   // let perguntaUsuario = (confirm(`Suas cartas são ${carta1.texto} e ${carta2.texto}. A carta revelada do computador é ${carta3.texto}\n Deseja comprar outra carta?`))
   //    while (perguntaUsuario===true) {
   //     let carta = comprarCarta()
   //       valorCarta = carta.valor
   //       textoCarta = carta.texto
   //    let textosCartasNovas=[carta1.texto, carta2.texto]
   //          textosCartasNovas.push(carta.texto)
     
   //    let valoresCartas= [carta1.valor, carta2.valor]
   //          valoresCartasNovas.push(valorCarta)   
   //          function soma () {
   //            
   //             }}while(soma<=21

   //          }

            



/*



          console.log ("Usuário - cartas:",'-', valorCartaUsuario)
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
    */
   //     default:
   //        console.log('O jogo acabou!')
   //     break;
   //  }


