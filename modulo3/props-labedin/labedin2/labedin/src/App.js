import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import artesanato from './img/artesanato.png';
import eu from './img/eu.jpg';
import enfermeira from './img/enfermeira.png';
import correios from './img/correios.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import carta from './img/carta.png';
import endereco from './img/endereco.png';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {eu} 
          nome="Wener" 
          descricao="Oi, eu sou a Wener. Sou aluna da Labenu. Tenho 39 anos, já fui artesã, professora substituta, Enfermeira e atuamente 
          ou Atendente Comercial dos Correios. Estou aprendendo programação para fazer mais uma transição de carreira."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem={carta}
        tipo="E-mail:"
        adicional="fotnsoe@gmail.com"
        />
        <CardPequeno
        imagem={endereco}
        tipo="Endereço:"
        adicional="Rua dos bobos, nº 0"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem = {artesanato}
          nome="Wener" 
          descricao="No mercado informal já fui artesã e professora substituta." 
        />
        <CardGrande 
          imagem = {enfermeira}
          nome="Wener" 
          descricao="No mercado formal atuei como enfermeira por 11 anos, sendo que trabalhei em Saúde da Família,
          em Centro Cirúrgico e na Central de Regulação de Leitos de Urgência" 
        />
        <CardGrande 
          imagem= {correios}
          nome="CORREIOS" 
          descricao="Trabalho nesta empresa desde 2012 e já atuei com Atendimento ao Cliente, Gerência de Agências,
          Assistente Comercial e com Coordenação de Agências" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
