
import './App.css';
import eu from './img/eu.jpg';

const onClickBotao=() =>{
  alert('O visitante disse Oi!')
}

function App() {
  return (
    <div className="App">
      <header className="perfil">
      <div className="saudacao">
        <h1>Olá, eu sou a Wener!</h1>
        </div>
        <img src={eu} alt="foto pessoal" />
      </header>
        
        <div className="texto">
          <p> Começando mais uma etapa do desafio.<br />
          "Confiança é saber que somos limitados,<br /> 
          que não podemos adivinhar o que está por vir, <br />
          que jamais controlaremos todas as “possibilidades”<br />
          e que nossa única saída é viver intensamente a realidade,<br />
          seja boa ou ruim.<br />

        (Sociedade dos Poetas Mortos)<br /></p>
        </div>
        <div className="digaOi">
          <button onClick={onClickBotao}><b>Clique Aqui e Diga Oi</b></button>
        </div>
        
      </div>
    
  );
}

export default App;
