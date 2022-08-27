import React,{useState} from "react"
import { useForm } from "../../hooks/useForm"

export const Login=()=>{
    
   const[form, onChange]= useForm({email:"", senha:""})

       const fazerLogin=()=>{
        //event.preventDefault()
        //axios.post(url,body,headers)
    }

    return(
        <div>
    <h1>Login</h1>
    <form onSubmit={fazerLogin}>
        <label htmlFor="email">E-Mail:</label>
            <input
            name="email"
            id="email"
            placeholder="E-mail"
            value={form.email}
            onChange={onChange}
            type="email"
            required
            />
        <label htmlFor="senha">Senha:</label>
            <input
            name="senha"
            id="senha"
            placeholder="Senha"
            value={form.senha}
            onChange={onChange}
            type="password"
            required
            />
        <button type= "submit">Login</button>
    </form>
    </div>
)}

export default Login;