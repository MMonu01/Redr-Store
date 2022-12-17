import React from 'react'

export const AuthContext = React.createContext()


function  AuthContextProvider({children}){ 
   
  const [userCart,setUserCart] = React.useState({
    id:"",
    name:"",
    username:"",
    email:"",
    mobile:"",
    password:"",
    cart:[]

  })





  

    console.log(userCart)
    const [authState,setAuthState] = React.useState({
        isAuth:false,token:null
    })

const loginUser = (token)=>{
setAuthState({isAuth:true,token})
setUserCart({...userCart,...token})
}


const logoutUser = ()=>{
setAuthState({isAuth:false,token:null})
setUserCart({})
}



return(
    <AuthContext.Provider value={{authState,loginUser,logoutUser,userCart,setUserCart}} >
        {children}
    </AuthContext.Provider>
)

}

export default AuthContextProvider