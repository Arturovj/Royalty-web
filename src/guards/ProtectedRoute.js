import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext"

const ProtectedRoute = () => {
    
const { user, isAuthenticationFecthed } = useAuthContext()

if (isAuthenticationFecthed && !user){
    return <Navigate to="/login" />
}

return (
    <Outlet/>
)

}

export default ProtectedRoute