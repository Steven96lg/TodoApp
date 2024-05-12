
import { Icon } from "@iconify/react"
import "../styles/home.css"
import { useNavigate } from "react-router-dom"

export const SidebarComponent = ({userData}) => {

    const navigate = useNavigate()

    const user = userData
    const img = "https://media.admagazine.com/photos/637d11a6e63c8afac40e7a01/1:1/w_2896,h_2896,c_limit/1442809583"

    const logOut = () => {
        localStorage.setItem("token", "")
        if(localStorage.getItem("token").length === 0){
            navigate("/")
        }
    }

    return (
        <div className="sidebar-content">
           <div className="header-sidebar">
            <img src={img} alt="" />
            <div>
                <strong>{user.name} {user.last_name}</strong>
                <button onClick={logOut}>Cerrar sesion</button>
            </div>
           </div>
           <div className="body-sidebar">
            <div className="spaces">
                <strong>SPACES</strong>
                <button>Create space <Icon icon="ph:plus-circle-fill" /></button>
            </div>
           </div>
        </div>
    )
}