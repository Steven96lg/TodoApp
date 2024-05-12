
import { SelectComponent } from "./SelectComponent"
import { Icon } from "@iconify/react"
import "../styles/home.css"
import { useState } from "react"

export const TableTasksComponent = ({tasks}) => {
   
    const status = ["NEW", "IN PROGRESS", "BLOCKED", "DONE"]
    const [getState, setGetState] = useState("")
    const [showSelect, setShowSelect] = useState(true)

    const getSelected = (e) => {
        setGetState(e.target.value)
    }

    const changeShowSelect = () => {
        if(showSelect) return setShowSelect(false)
        setShowSelect(true)
    }

    return (
        <div className="table-div">
            <div className="table-head">
                <strong>Task</strong>
                <strong>Description</strong>
                <strong>Assigned to</strong>
                <strong>Status</strong>
            </div>
            {
                tasks.map(task => (
                    <div key={task.id} className="table-body">
                        <p>{task.name}</p>
                        <p>{task.description}</p>
                        <p>{task.assigned_to}</p>
                        <div>
                           {
                            showSelect ?  <strong>{task.status}</strong> : <SelectComponent onEvent={getSelected} list={status}/>
                           }
                           <button onClick={changeShowSelect}><Icon icon="material-symbols:edit-square" /></button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}