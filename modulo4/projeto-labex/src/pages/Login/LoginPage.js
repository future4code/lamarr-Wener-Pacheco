import React,{useState} from "react"

export const Login=()=>{
    //const [email,setEmail]= useState("")
    //const[senha,setSenha]=useState("")
    const[form,setForm] = useState({email:"", senha:""})

    const mudaEmail=(event)=>{
        setForm({email:event.target.value})
    }

    const mudaSenha = (event)=>{
        setForm({senha:event.target.value})
    }



    const fazerLogin=()=>{
        //event.prevent.default
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
            value={email}
            onChange={mudaEmail}
            type="email"
            required
            />
        <label htmlFor="senha">Senha:</label>
            <input
            name="senha"
            id="senha"
            placeholder="Senha"
            value={senha}
            onChange={mudaSenha}
            type="password"
            required
            />
        <button type= "submit">Login</button>
    </form>
    </div>
)}

export default Login;