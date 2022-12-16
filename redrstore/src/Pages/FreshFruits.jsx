import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Shortnav from '../Components/FreshFruitsComponents/Shortnav'
import Style from '../Styles/FreshFruits.module.css'
import CategoryFruits from '../Components/FreshFruitsComponents/CategoryFruits'
import Online from '../Components/FreshFruitsComponents/Online'
import Footer from '../Components/Footer'
import { LinkOverlay } from '@chakra-ui/react'
const FreshFruits = ()=>{
    return(
        <>
       
     <Shortnav/>

     <CategoryFruits/>

     <div className={Style.overlap}></div>

    <Online/>
     <Footer/>
        </>
    )
}


export default FreshFruits