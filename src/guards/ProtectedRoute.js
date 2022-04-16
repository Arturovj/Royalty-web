import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext"

const ProtectedRoute = () => {
    
const { user, isAuthenticationFecthed } = useAuthContext()

let location = useLocation()

if (isAuthenticationFecthed && !user){
    return <Navigate to="/login" state={{ from: location }} replace />
}

return (
    <Outlet/>
)

}

export default ProtectedRoute