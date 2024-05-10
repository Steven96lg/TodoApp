
import { InputComponent } from "./InputComponent.jsx"
import "../App.css"

import { useState } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const RegisterComponent = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [register, setRegister] = useState("")

    const getName = (e) => {
        setName(e.target.value)
    }

    const getLastName = (e) => {
        setLastName(e.target.value)
    }

    const getUsername = (e) => {
        setUsername(e.target.value)
    }

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const sendRegister = async () => {
        const dataUser = {
            name: name,
            last_name: lastName,
            username: username,
            email: email,
            password: password
        }

        const data = await axios.post('http://localhost:3000/register', dataUser);
        const response = await data.data
        if(response.status === "success"){
            setRegister(response.message)
            setTimeout(() => {
                navigate("/")
            }, 2100)
        }
    }

    return (
       <div className="register-content">
         <strong>REGISTER</strong>
         <p>{register}</p>
         <div className="register-component">
            <InputComponent type="text" placeholder="Nombre" onEvent={getName}/>
            <InputComponent type="text" placeholder="Apellido" onEvent={getLastName}/>
            <InputComponent type="text" placeholder="Username" onEvent={getUsername}/>
            <InputComponent type="email" placeholder="Email" onEvent={getEmail}/>
            <InputComponent type="password" placeholder="Contraseña" onEvent={getPassword}/>
            <button onClick={sendRegister}>Registrarse</button>
        </div>
        <div className="register-footer">
                <Link to="/">Login</Link>
            </div>
       </div>
    )
}