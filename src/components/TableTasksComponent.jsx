
import "../styles/home.css"

export const TableTasksComponent = ({tasks}) => {
    console.log("tasks", tasks)
    return (
        <div className="table-div">
            <div className="table-head">
                <strong>Task</strong>
                <strong>Description</strong>
                <strong></strong>
            </div>
            {
                tasks.map(task => (
                    <div key={task.id} className="table-body">
                        <p>{task.name}</p>
                        <p>{task.description}</p>
                        <p></p>
                    </div>
                ))
            }
        </div>
    )
}