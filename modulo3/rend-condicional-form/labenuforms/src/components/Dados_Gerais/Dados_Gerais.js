import React from 'react';
import './Dados_Gerais.css';

export function DadosGerais() {
return (
<div className="Etapa1">
<header>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
   </header>
            <form className = "etapa1-infos">
                <label>1. Informe seu Nome</label><br/>
                    <input type="text" name="Nome" size="40"/><br/>
            
                <label>2.Qual sua Idade? </label><br/>
                <input type="text" name="Nome" size="40"/><br/>
            
                <label>3.Qual seu e-mail?</label><br/>
                <input type="text" name="Nome" size="40"/><br/>

                <label>4. Selecione sua Escolaridade:</label><br/>
                    <select>
                        <option>Selecione</option>
                        <option>Ensino Médio Incompleto</option>
                        <option>Ensino Médio Completo</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superior Completo</option>
                    </select>
            </form>
            
        
    </div>
)
}

