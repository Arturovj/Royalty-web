import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext"

const UnProtectedRoute = () => {
    
const { user } = useAuthContext()

let location = useLocation()

if (user){
    return <Navigate to="/profile" state={{ from: location }} replace />
}

return (
    <Outlet/>
)

}

export default UnProtectedRoute