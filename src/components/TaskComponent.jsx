
import { useState } from "react"
import { InputComponent } from "./InputComponent"
import axios from "axios"

export const TaskComponent = ({userData}) => {

    const user = userData
    console.log("tasks", user.id)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [emptyData, setEmptyData] = useState("")

    const getTitle = (e) => {
        setTitle(e.target.value)
    }

    const getDescription = (e) => {
        setDescription(e.target.value)
    }

    const saveTask = async () => {

        if(title.length === 0 || description.length === 0){
            setEmptyData("El titulo y la descripcion no deben estar vacios.")
            setTimeout(() => {
                setEmptyData("")
            },2500)
            return
        }

        const dataTask = {
            name: title,
            description: description,
            assigned_to: user.name,
            status: "NEW"
        }

        const data = await axios.post(`http://localhost:3000/create-task/${user.id}`, dataTask)
        const response = await data.data

        console.log(response)
    }

    return (
        <div className="create-task">
            <InputComponent placeholder="Title" onEvent={getTitle}/>
            <InputComponent placeholder="Description" onEvent={getDescription}/>
            <button onClick={saveTask}>Create Task</button>
            {emptyData}
        </div>
    )
}