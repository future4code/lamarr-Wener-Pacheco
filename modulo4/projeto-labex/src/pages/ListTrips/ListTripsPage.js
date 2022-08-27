import React from "react"
import{useRequestData} from '../hooks/RequestData.js'


export function ListaViagens(){


const url= 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/wener-pacheco-lamarr/trips'

const viagens=useRequestData(url)
return(
    <>
    <h1>Lista de viagens</h1>
    {viagens.map((ListTrips)=>{
        return <p>{trips}</p>
    })}
    </>
)

}
export default ListTrips;