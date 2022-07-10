import React, { useState } from 'react';
import Post from './components/Post/Post';
import './style.css'
import vinho from './img/vinho.jpg'
import billy from './img/billy.jpg'
import cleo from './img/cleo.jpg'
import gatinho from'./img/gatinho.jpg'



function App() {
const[inputNome,setInputNome]= useState("")
const[inputFotoPerfil, setInputFotoPerfil] = useState("")
const[inputFotoPost, setInputFotoPost] = useState("")
const[listaPost,setListaPost] = useState([
                  {nomeUsuario:'paulinha', fotoUsuario:'https://picsum.photos/50/50', fotoPost:'https://picsum.photos/200/150'},
                   {nomeUsuario:'cleonice', fotoUsuario: cleo, fotoPost: gatinho},
                   {nomeUsuario:'billy', fotoUsuario: billy, fotoPost: vinho}
                  ])


//eventos

const handleInputNome = (e) => {
  setInputNome(e.target.value)
}

const handleInputFotoPerfil = (e) =>{
  setInputFotoPerfil(e.target.value)
}

const handleInputFotoPost = (e) =>{
  setInputFotoPost(e.target.value)
}
//adicionar postagem

const addPost=(e)=>{
  e.preventDefault();

  const novoPost = {nomeUsuario:inputNome ,fotoUsuario:inputFotoPerfil,fotoPost:inputFotoPost}
  const novaListaPost = [novoPost,...listaPost]
  setListaPost(novaListaPost)

}



  const listaPostAtualizada = listaPost.map((elemento, index) => {
    return <Post
            nomeUsuario={elemento.nomeUsuario}
            fotoUsuario={elemento.fotoUsuario}
            fotoPost={elemento.fotoPost}
            Key = {index}
            />
  })

return(
  
  <div className='MainContainer'>
    <form>
      <label>Nome:</label>
      <input
        placeholder='Insira o nome de Usuário'
        onChange={handleInputNome}
        value={inputNome}
        />
      <label>Foto Perfil:</label>
      <input
        placeholder='Insira sua Foto de Perfil'
        onChange={handleInputFotoPerfil}
        value={inputFotoPerfil}
        />
      <label>Post</label>
      <input
        placeholder='Insira a Foto do Post'
        onChange={handleInputFotoPost}
        value={inputFotoPost}
        />
        <button onClick={addPost}>Adicionar</button>
    </form>

    {listaPostAtualizada}

    </div>
 )

}


export default App;
