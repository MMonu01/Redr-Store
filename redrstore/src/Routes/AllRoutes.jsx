import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import FreshFruits from '../Pages/FreshFruits'
import SingleFruits from '../Pages/SingleFruits'
import Cart from '../Pages/Cart'
import PrivateRoute from '../Routes/PrivateRoute'

const AllRoutes = ()=>{

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/products/freshfruits" element={<FreshFruits/>}/>
            <Route path="/products/freshfruits/:id" element={<SingleFruits/>}/>
            <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
            </Routes>
    )
}

export default AllRoutes