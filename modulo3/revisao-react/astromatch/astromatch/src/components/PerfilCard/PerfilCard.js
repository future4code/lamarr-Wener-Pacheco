import {CardContainer} from './style';

export function CardPerfil(props) {
    const{img,name,description,id} = props
    const{removeUser}=props
    const{changePage}=props
    
    return(
        <CardContainer>
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <p>{description}</p>
        <button onClick={()=>removeUser(id)}>Remover</button>
        <button onClick={()=>changePage('detailspage',id)}>Detalhes</button>
        </CardContainer>
    )
}

export default CardPerfil;





