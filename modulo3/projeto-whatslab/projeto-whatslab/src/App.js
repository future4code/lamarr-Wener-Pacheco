import React, { useState } from 'react';



function App() {
const mensagem=[{nomeUsuario:'', Mensagem:''}]
const[inputNome,setInputNome]= useState("")
const[inputMensagem, setInputMensagem] = useState("")
//const[listaConversa, setListaConversa] = useState([ ])

const listaConversa = mensagem.map((elemento, index) => {

//eventos

const handleInputNome = (e) => {
  setInputNome(e.target.value)
}

const handleInputMensagem = (e) =>{
  setInputMensagem(e.target.value)
}
//adicionar postagem

const addMsg=(e)=>{
  e.preventDefault();

  const novaMensagem = {nomeUsuario:inputNome , mensagem:inputMensagem}
  const novaListaMensagem = [...listaConversa, novaMensagem]
  setListaConversa(novaListaMensagem)

}
const listaMsgAtualizada = listaConversa.map((elemento, index) => {
    return <p
            nomeUsuario={elemento.nomeUsuario}
            mensagem={elemento.mensagem}
            Key = {index}
            />
  })
return(

  <div className='MainContainer'>
                {listaConversa}
    <form>
      <label>Nome:</label>
      <input
        placeholder='Insira o nome de Usuário'
        onChange={handleInputNome}
        value={inputNome}
        />
      <label>Mensagem:</label>
      <input
        placeholder='Insira sua Mensagem'
        onChange={handleInputMensagem}
        value={inputMensagem}
        />
          <button onClick={addMsg}>Adicionar</button>
    </form>

    {listaMsgAtualizada}

    </div>
 )
}
}
export default App;