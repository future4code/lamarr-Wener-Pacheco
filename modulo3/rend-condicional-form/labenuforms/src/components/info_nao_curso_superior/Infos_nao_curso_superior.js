import React from 'react';
import './Infos_nao_curso_superior.css';


export function NaoCursoSuperior() {
return (
<div className="Etapa3">
    <header className='etapa3-header'>
        <h1>ETAPA 2 - INFORMAÇÕES DE ENSINO</h1>
    </header>
            <form className='etapa3-infos'>
                
                <label>5. Por que você não terminou o curso de Graduação? </label><br/>
                    <input type="text" name="Motivo da não conclusão" size ="95"/><br/>
            
                <label>6.Fez algum Curso Complementar?</label><br/>
                    <select>
                        <option>Curso Técnico</option>
                        <option >Curso de Inglês</option>
                        <option>Não fiz curso complementar</option>
                    </select><br/>
                
        </form>
   
</div>
)
}