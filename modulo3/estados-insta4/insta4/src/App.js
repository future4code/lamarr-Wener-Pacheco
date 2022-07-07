import React from 'react';
import Post from './components/Post/Post';
import './style.css'
import vinho from './img/vinho.jpg'
import billy from './img/billy.jpg'
import cleo from './img/cleo.jpg'
import gatinho from'./img/gatinho.jpg'



function App() {
  const arrayPost=[{nomeUsuario:'paulinha', fotoUsuario:'https://picsum.photos/50/50', fotoPost:'https://picsum.photos/200/150'},
                   {nomeUsuario:'cleonice', fotoUsuario: cleo, fotoPost: gatinho},
                   {nomeUsuario:'billy', fotoUsuario: billy, fotoPost: vinho}
                  ]

  const listaPost = arrayPost.map((elemento, index) => {
    return <Post
            nomeUsuario={elemento.nomeUsuario}
            fotoUsuario={elemento.fotoUsuario}
            fotoPost={elemento.fotoPost}
            Key = {index}
            />
  })

return(
  
  <div className='MainContainer'>
                {listaPost}

    </div>
 )

}


export default App;
