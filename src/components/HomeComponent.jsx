
import "../styles/home.css"
import { ButtonComponent } from "./ButtonComponent"
import { TaskComponent } from "./TaskComponent"
import { useEffect, useState } from "react"
import { TableTasksComponent } from "./TableTasksComponent"
import { SidebarComponent } from "./SidebarComponent"

export const HomeComponent = ({userData}) => {

    const [tasks, setTasks] = useState([])
    const user = userData[0]

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
            <div className="side-container">
                <SidebarComponent userData={user}/>
            </div>
            <div className="task-container">
                <div className="home-body">
                    <TaskComponent userData={user}/>
                    <TableTasksComponent tasks={tasks}/>
                </div>
            </div>
        </div>
     )
}