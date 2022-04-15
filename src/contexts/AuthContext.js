import { createContext, useContext, useEffect, useState } from "react"
import { getAccessToken, logout, setToken } from "../store/AccesTokenStore"
import { getCurrentUser } from '../services/UsersService'
import { verifyJWT } from "../utils/jwtHelper"


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)


export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()

    const login = (token) =>{
        setToken(token)
    }

   const getUser = () => {
       getCurrentUser()
       .then(user => {
           setUser(user)
       })
   }

   useEffect(() => {
       if(getAccessToken()) {
           if ( !verifyJWT(getAccessToken()) ){
               logout() 
           } else {
               getUser()
           }
       }
   }, [])

    const value = {
        user,
        login
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext