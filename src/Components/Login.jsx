import React, {useContext, useEffect} from "react";
import userContext from "../context/userContext";
const Login=()=>{
    const[name, setName]=React.useState('')
    const[password, setPassword] = React.useState('')
    const { setUser }=useContext(userContext)
    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     setUser({name, password})
    // }
    useEffect(()=>{
     if(name && password){
            setUser({name, password})
     }
     else{
        setUser(null)
     }
     
    },[password, name, setUser])
    return(
        <div className="grid justify-items-center gap-4">
            <h1>Login</h1>
            <input 
            type='text'
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input 
            type='password'
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
             />
            {/* <button onClick={handleSubmit}>Submit</button> */}
        </div>
    )
    
}

export default Login;