import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import FreshFruits from '../Pages/FreshFruits'
import SingleFruits from '../Pages/SingleFruits'


const AllRoutes = ()=>{

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/FreshFruits" element={<FreshFruits/>}/>
            <Route path="/FreshFruits/:id" element={<SingleFruits/>}/>
            </Routes>
    )
}

export default AllRoutes