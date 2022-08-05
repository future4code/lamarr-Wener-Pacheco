import Header from "../Header/Header";
import{CardPerfil} from "../PerfilCard/PerfilCard";
import{HomePageContainer} from "./style";

export function Homepage(props){
    const {results}=props


const renderList = results.map(char=>
    <CardPerfil
        img={char.img}
        name={char.name}
        description={char.description}
        />
    )
    return(
        <HomePageContainer>
            <Header/>
            <main>
                {renderList}
            </main>
        </HomePageContainer>
    )}