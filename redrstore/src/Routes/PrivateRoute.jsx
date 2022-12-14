import React from 'react'
import {AuthContext} from '../Contexts/AuthContext'
import {Navigate} from 'react-routerdom'

const PrivateRoute = ({children})=>{

const {authState} = React.useContext(AuthContext)

if(!authState){
return <Navigate to="/login"/>
}

return(
    children
)

}

export default PrivateRoute