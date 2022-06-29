import React from 'react';
import Post from './components/Post/Post';
import './style.css'
import vinho from './img/vinho.jpg'
import billy from './img/billy.jpg'
import cleo from './img/cleo.jpg'
import gatinho from'./img/gatinho.jpg'

function App() {
return(
  <div className='MainContainer'>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

          <Post
            nomeUsuario={'cleonice'}
            fotoUsuario={cleo}
            fotoPost={gatinho}
          />

          <Post
            nomeUsuario={'billy'}
            fotoUsuario={billy}
            fotoPost={vinho}
          />
  </div>
)

}


export default App;
