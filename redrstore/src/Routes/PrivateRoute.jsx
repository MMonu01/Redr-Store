import React from 'react'
import {AuthContext} from '../Contexts/AuthContext'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children})=>{

const {authState} = React.useContext(AuthContext)

if(!authState.isAuth){
return <Navigate to="/"/>
}

return(
    children
)

}

export default PrivateRoute