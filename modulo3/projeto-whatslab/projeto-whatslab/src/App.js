import React,{useState} from 'react';
import styled from 'styled-components'
import labenu_logo from './img/labenu_logo.png'



const Cabecalho = styled.header`
background-color: white;
text-align: center;
align-items:center;
margin-top: 50px;
height: 8vh;
margin-bottom:20px;
max-height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`

const Titulo = styled.span`
font-size: 30px;
color: #282c34;
align-self: center;
margin-bottom: 5px;
float: inline-end;
justify-content: baseline;
`

const Container = styled.main`
display: flex;
justify-content: start;
height:80vh;
align-items: bottom;
`
const LateralEsquerda = styled.span`
background-color: orange;
width: 10%;
`

const Mensagem = styled.span`
background-color: withe;
width: 80%;
text-align: left;
justify-content:center;
align-self: flex-end;
margin-left:60px;
margin-bottom: 15px;
`
const box = styled.span`
margin: 0px;
    padding: 0px;
    position: relative;
    font: normal 30px sans-serif;
    color: #fff;
    background-color: #ccc;
    height: 220px;
`
const historicoAtualizado=styled.span`

`

const LateralDireita = styled.span`
background-color: orange;
width:10%;

`

const NomeRemetente = styled.span`
display: inline-flex;
height: 25px;
align-items: baseline;
padding: 15px;
justify-content:center;
`

const EnvioMensagem = styled.span`
display: inline-flex;
height: 25px;
align-items: baseline;
padding-right: 4px;
justify-content:center;
text-align:center;
`

const Rodape = styled.footer`
background-color: gray;
bottom: 0;
Width: 100%;
font-size: smaller;
position: fixed;
text-align: center;
height:5vh;
`

function App() {

const[inputNome,setInputNome]= useState("")
const[inputMensagem, setInputMensagem] = useState("")
const[conversa, setConversa] = useState([])

//eventos
const handleInputNome = (e) => {
  setInputNome(e.target.value)
}

const handleInputMensagem = (e) =>{
  setInputMensagem(e.target.value)
}

const addMensagem = (e) => {
e.preventDefault();

const novaMensagem = {nome:inputNome , mensagem:inputMensagem}
const novaListaMensagem = [...conversa, novaMensagem]
setConversa(novaListaMensagem)
}

const historicoAtualizado = conversa.map((elemento,index)=>{
return <div className='box'>
      <span class="topo">{conversa.nome}</span> 
      <span class="corpo">{conversa.mensagem}</span>
      </div>
 })

  return (
    <div>
      <Cabecalho>
        <img src={labenu_logo}  alt="logomarca Labenu"/>
            <Titulo><b>WhatsLab</b></Titulo>
      </Cabecalho>
    <Container>
<LateralEsquerda></LateralEsquerda>

<Mensagem>
  <form>
    <NomeRemetente>
        <label>Nome:</label>
        <input
        placeholder='Insira o nome de Usuário'
        onChange={handleInputNome}
        value={inputNome}
        />
        
     </NomeRemetente>
  <EnvioMensagem>
        <label>Mensagem:</label>
        <input
        placeholder='Insira sua Mensagem'
        onChange={handleInputMensagem}
        value={inputMensagem}
        />
        
    </EnvioMensagem>
      <button onClick={addMensagem}>Adicionar</button>
    </form>

    {historicoAtualizado}
    
</Mensagem>
      
<LateralDireita></LateralDireita>

    </Container>

    <Rodape>
      Copyrigth &copy; 2022 Labenu All rigths reserved. R.Pais Lemes, 215, Conjunto 820 Pinheiros. CEP 05424-150
    </Rodape>

    </div>
  );
}

export default App;



