import { createContext, useContext, useEffect, useReducer, useState } from "react"
import { getAccessToken, logout, setToken } from "../store/AccesTokenStore"
import { getCurrentUser } from '../services/UsersService'
import AuthReducer from "./AuthReducer";
import { verifyJWT } from "../utils/jwtHelper"

const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
  };


const AuthContext = createContext(INITIAL_STATE)

export const useAuthContext = () => useContext(AuthContext)


export const AuthContextProvider = ({ children }) => {

    
    const [user, setUser] = useState()
    const [isAuthenticationFetched, setIsAuthenticationFetched] = useState(false)

    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])
    

    const login = (token, navigateCb) =>{
        setToken(token)
        getUser(navigateCb)
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
        login,
        getUser,
        dispatch
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext