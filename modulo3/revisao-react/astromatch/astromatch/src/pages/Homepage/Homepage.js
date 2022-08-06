import Header from "../../components/Header/Header";
import{CardPerfil} from "../../components/PerfilCard/PerfilCard";
import{HomePageContainer} from "./style";
import { useState } from "react";

export function Homepage(props){
    const {results}=props

    const{image, name, description, query, orderParam} = props.states

    const {handleInputName, handleInputImage, handleInputDescription,handleInputQuery, handleInputOrderParam} = props.handlers
    const {addUser} = props
    const {removeUser} = props
    const {changePage} = props
   


const renderList = results
.filter(char => query === ""||char.name.toLowerCase().includes(query))
.sort((a,b)=>orderParam===""||orderParam==="asc" &&  a.name>b.name ? 1 : -1 )
.sort((a,b)=>orderParam===""||orderParam==="desc" &&  a.name>b.name ? -1 : 1 )
.map(char=>
    <CardPerfil key={char.id}
        id={char.id}
        img={char.img}
        name={char.name}
        description={char.description}
        removeUser={removeUser}
        changePage={changePage}
        />
    )

    return(
        <>
        <Header/>
        <HomePageContainer>
           <aside>
            <form>
                <label htmlFor="image">Imagem:</label>
                <input type="text" 
                id="image" 
                onChange={handleInputImage} 
                value={image}
                />

                <label htmlFor="name">Nome:</label>
                <input type="text" 
                id="name"
                onChange={handleInputName}
                value={name}
                
                />

                <label htmlFor="description">Descrição:</label>
                <input type="text" 
                id="description"
                onChange={handleInputDescription}
                value={description}
            
                />
                <button onClick = {addUser }>Add</button>

                <h2>Busca</h2>
                <input type="text" value={query} onChange={handleInputQuery}/>

                <h2>Ordenar</h2>
                <select name="" id="" value={orderParam} onChange={handleInputOrderParam}>
                    <option value="asc">Crescente</option>
                    <option value="desc">Decrescente</option>
                </select>
            </form>
            </aside>
            
            <main>
                {renderList}
            </main>
            </HomePageContainer>
          </>  
    )}