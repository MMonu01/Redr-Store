import {NavLink,Link} from 'react-router-dom'
import React from 'react'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import { ThemeContext } from '../Contexts/ThemeContext'
import Styles from '../Styles/Navbar.module.css'

import { Button } from '@chakra-ui/react'
import { AuthContext } from '../Contexts/AuthContext'
import SideNavbar from './SideNavbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faCircleUser,faBasketShopping,faCheck} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
const Navbar = ()=>{
const {theme,toggleTheme} = React.useContext(ThemeContext)
const {authState,loginUser,logoutUser,userCart,text,setText} = React.useContext(AuthContext)
const [itemCount ,setItemCount]  = React.useState(0)



const HandleText = (e)=>{
    setText(e.target.value)
}

React.useEffect(()=>{
    if(authState.isAuth){

        let count = 0
        for(let i=0; i<userCart.cart.length; i++){
            count += Number(userCart.cart[i].quantity)
        }
        setItemCount(count)
    }else{
        setItemCount(0)
    }
},[userCart.cart])

    return(
        <div className={Styles.Container} style={{position:"fixed"}}>
    <div>
        <Link to="/">

        <img src='https://i.ibb.co/FhRDjK7/Redrblack.png' style={{height:"70px",width:"70px",marginLeft:"20px"}} alt="logo"/>
        </Link>
    </div>
    <div>
     <div>{<SideNavbar/>}</div>
  <div className={Styles.SearchContainer}>
  <input  type='search' className={Styles.Search}  value={text} onChange={HandleText}  placeholder="Search for Products"/>
  <div style={{display:"flex",alignItems:"center"}}>

<Link to="/products/freshfruits" style={{background:"red"}}>
  <FontAwesomeIcon icon={faMagnifyingGlass}  style={{padding:"14px 12px 12px 12px",cursor:"pointer",color:"white",fontSize:"17px",backgroundColor:"red"}} ></FontAwesomeIcon></Link>
  </div>
  </div>
    </div>
 <Link to="/cart">
        <div className={Styles.basket}><div><FontAwesomeIcon  icon={faBasketShopping}  style={{fontSize:"20px",cursor:"pointer"}}></FontAwesomeIcon><sup>{itemCount}</sup>
        </div></div>
        </Link>
    <div className={Styles.logsin}>
 <div> <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon></div>

        <div>{authState.isAuth===true?(authState.token.name):(<Signup/>)}</div>
        <div>{authState.isAuth===true?(<Button onClick={logoutUser}>Logout</Button>):(<Login/>)}</div>
    </div>
 


</div>
    )
}

export default Navbar



    {/* <div><button style={{backgroundColor:theme==="Light"?"white":"black",color:theme==="Light"?"black":"white"}} onClick={toggleTheme}>{theme==="light"?"Dark Mode":"Light Mode"}</button></div> */}