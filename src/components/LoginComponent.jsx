
import { useState } from "react"
import axios from "axios"

import { InputComponent } from "./InputComponent.jsx"
import { Link, useNavigate } from "react-router-dom"

export const LoginComponent = ({setResponse, userData}) => {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const getUsername = (e) => {
        setUsername(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const sendLogin = async () => {
        const dataUser = {
            username: username,
            password: password
        }

        const data = await axios.post("http://localhost:3000/login", dataUser);
        const response = await data.data

        if(response.status === "success"){
            localStorage.setItem("token", response.token)
            setResponse(response.status)
            userData(response.response)
            navigate("/home")
            return 
        }

        setErrorLogin(response.message)
        setTimeout(() => {
            location.reload()
        },1500)
    }

    return (
        <div className="login-content">
            <strong>LOGIN</strong>
            <p>{errorLogin}</p>
            <div className="login-component">
                <InputComponent type="text" placeholder="Username" onEvent={getUsername}/>
                <InputComponent type="password" placeholder="Password" onEvent={getPassword}/>
                <button onClick={sendLogin}>Login</button>
            </div>
            <div className="login-footer">
                <Link to="/register">Registrarse</Link>
            </div>
        </div>
    )
}