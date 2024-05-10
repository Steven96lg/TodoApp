
import { useNavigate } from "react-router-dom"
import "../styles/home.css"
import { ButtonComponent } from "./ButtonComponent"
import { TaskComponent } from "./TaskComponent"
import { useEffect, useState } from "react"
import { TableTasksComponent } from "./TableTasksComponent"

export const HomeComponent = ({userData}) => {

    const [tasks, setTasks] = useState([])

    const navigate = useNavigate()
    const user = userData[0]
    const logOut = () => {
        localStorage.setItem("token", "")
        if(localStorage.getItem("token").length === 0){
            navigate("/")
        }
    }

    useEffect(() => {
        fetch(`http://localhost:3000/get-task/${user.id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.response)
                setTasks(data.response)
            })
            .catch(err => {console.log(err)})
    }, [])

     return (
        <div className="home-component">
            <div className="home-header">
                <ButtonComponent onClick={logOut}>Cerrar sesion</ButtonComponent>
            </div>
            <div className="home-body">
                <h1>Bienvenido {user.name} {user.last_name}</h1>
                <TaskComponent />
                <TableTasksComponent tasks={tasks}/>
            </div>
        </div>
     )
}