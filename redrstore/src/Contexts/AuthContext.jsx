import React from 'react'

export const AuthContext = React.createContext()

function  AuthContextProvider({children}){

const [authState,setAuthState] = React.useState({
    isAuth:false,token:null
})

const loginUser = (token)=>{
setAuthState({isAuth:true,token})
}

const logoutUser = ()=>{
setAuthState({isAuth:false,token:null})
}

return(
    <AuthContext.Provider value={{authState,loginUser,logoutUser}} >
        {children}
    </AuthContext.Provider>
)

}

export default AuthContextProvider