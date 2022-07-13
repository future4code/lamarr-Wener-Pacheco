import React,{useState} from 'react'
import { DadosGerais } from './components/Dados_Gerais/Dados_Gerais.js'
import { CursoSuperior } from './components/info_curso_superior/Infos_curso_superior.js'
import { NaoCursoSuperior } from './components/info_nao_curso_superior/Infos_nao_curso_superior.js'
import{ Final } from './components/Final/Final.js'


function App() {
 /* const [trocaState, setTrocaState]=useState('');

  function renderizaEtapa(){
            
    switch(trocaState){

      case 'Ensino Médio Incompleto':
      return <NaoCursoSuperior/>;
      
      case 'Ensino Médio Completo':
        return<NaoCursoSuperior/>;
      
      case 'Ensino Superior Incompleto':
        return<CursoSuperior/>;
      
      case 'Ensino Superior Completo':
        return<CursoSuperior/>;
      
      case 'Curso Técnico':
          return<Final/>;
          break;

      case 'Curso de Inglês':
            return<Final/>
            break;
      
      case 'Não fiz curso complementar':
              return<CursoSuperior/>
              break;
    }
  }*/
  return (

  <div className="App">
      <DadosGerais/>
      <CursoSuperior/>
      <NaoCursoSuperior/>
      <Final/>
       
     
    <footer>
      <button>Próxima Etapa</button>
    </footer>
      
    </div>
  )
}

export default App;
