
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({response, redirectTo}) => {

    const tokenStorage = localStorage.getItem('token')
    
    if(tokenStorage.length === 0){
        return <Navigate to={redirectTo}/>
    }
    
    return (
        <Outlet />
    )
}