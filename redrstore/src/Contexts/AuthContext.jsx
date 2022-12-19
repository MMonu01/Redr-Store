import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const AuthContext = React.createContext()


let initialCart = {
  id:"",
  name:"",
  username:"",
  email:"",
  mobile:"",
  password:"",
  cart:[]

}


function  AuthContextProvider({children}){ 
  
  const [authState,setAuthState] = React.useState({
      isAuth:false,token:null
  })


  const [text,setText] = React.useState()
  const [searchParams,setSearchParams] = useSearchParams()
  React.useEffect(()=>{
    setSearchParams({q:text})
},[text])



  const [userCart,setUserCart] = React.useState(initialCart)


    console.log(userCart)

const loginUser = (token)=>{
setAuthState({isAuth:true,token})
setUserCart({...userCart,...token})
}


const logoutUser = ()=>{
setAuthState({isAuth:false,token:null})
setUserCart(initialCart)
}



return(
    <AuthContext.Provider value={{authState,loginUser,logoutUser,userCart,setUserCart,text,setText}} >
        {children}
    </AuthContext.Provider>
)

}

export default AuthContextProvider