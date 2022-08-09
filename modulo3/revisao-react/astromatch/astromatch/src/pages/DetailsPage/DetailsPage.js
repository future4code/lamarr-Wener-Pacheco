import Header from "../../components/Header/Header";
import { Container } from "./style";

export function DetailsPage (props) {
    const { results, id } = props
    const {changePage}=props

    const [result] = results.filter(char => char.id === id)
        console.log(result)
    return(
        <>
        <Header/>
        <Container>
            <h2>{result.name}</h2>
            <img src={result.img} alt={result.name}/>
            <p>{result.description}</p>
            <button onClick={()=>changePage("homepage")}>Voltar</button>
        </Container>
        </>
)
}
