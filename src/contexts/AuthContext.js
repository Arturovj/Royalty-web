import { createContext, useContext, useEffect, useState } from "react"
import { getAccessToken, logout, setToken } from "../store/AccesTokenStore"
import { getCurrentUser } from '../services/UsersService'
import { verifyJWT } from "../utils/jwtHelper"


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)


export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [isAuthenticationFetched, setIsAuthenticationFetched] = useState(false)

    const login = (token) =>{
        setToken(token)
        getUser()
    }

   const getUser = (cb) => {
       getCurrentUser()
       .then(user => {
           setUser(user)
           setIsAuthenticationFetched(true)

           cb && cb()
       })
   }

   useEffect(() => {
       if(getAccessToken()) {
           if ( !verifyJWT(getAccessToken()) ){
               logout() 
           } else {
               getUser()
           }
        } else {
            setIsAuthenticationFetched(true)
       }
   }, [])

    const value = {
        user,
        isAuthenticationFetched,
        login
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext