import React from 'react';
import styled from 'styled-components'
import labenu_logo from './img/labenu_logo.png'


const Cabecalho = styled.header`
background-color: white;
text-align: center;
align-items:center;
margin-top: 0;
height: 8vh;
margin-bottom:50px;
`

const Titulo = styled.span`
font-size: 60px;
align-self: center;
margin-bottom: 30px;
float: center;
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
  return (
    <div>
      <Cabecalho>
        <img src={labenu_logo}  alt="logomarca Labenu"/>
            <Titulo><b>LabZap</b></Titulo>
      </Cabecalho>
    <Container>
<LateralEsquerda></LateralEsquerda>

<Mensagem>
  <NomeRemetente>
        <p>Remetente:</p>
        <input type="text" name="Remetente" size="20" />
  </NomeRemetente>
  <EnvioMensagem>
        <p>MSG:</p>
        <input type="text" name="Mensagem" size="40"/>
    </EnvioMensagem>
    <button onclick="Enviar">Enviar Mensagem</button>
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
