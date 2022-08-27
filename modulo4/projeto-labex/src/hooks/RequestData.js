import {useEffect,useState} from 'react'
import axios from 'axios'

export function useRequestData(url) {
    const[data,setData]=useState(undefined)

useEffect(()=>{
    axios.get(url)
    .then((res)=>setData(res.data))
    .catch((err)=> console.log(err.response.data),[url])
    return data
})}