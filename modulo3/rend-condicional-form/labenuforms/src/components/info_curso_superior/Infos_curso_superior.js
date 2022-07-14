import React from 'react';
import './info_curso_superior.css';


export function CursoSuperior() {
return (
<div className="Etapa2">
    <header className='etapa2-header'>
        <h1>ETAPA 2 - CURSO SUPERIOR</h1>
    </header>   
        <form className="etapa2-infos">
                <label>5. Informe o Nome do Curso</label><br/>
                <input type="text" name="nome" size="80"/><br/>
            
                <label>6.Qual Instituição de Ensino </label><br/>
                    <input type="text" name="idade" size="90"/><br/>
            
        </form>
    
</div>
    )
}