import {CardContainer} from './style';

export function CardPerfil(props) {
    const{img,name,description} = props
    return(
        <CardContainer>
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <p>{description}</p>
        </CardContainer>
    )
}

export default CardPerfil;





