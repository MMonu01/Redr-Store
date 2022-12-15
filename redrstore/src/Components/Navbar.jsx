import {NavLink} from 'react-router-dom'
import React from 'react'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import { ThemeContext } from '../Contexts/ThemeContext'
import Styles from '../Styles/Navbar.module.css'
import {Link} from 'react-router-dom'

import { Input,InputGroup,InputRightElement,Button } from '@chakra-ui/react'
import { AuthContext } from '../Contexts/AuthContext'
import SideNavbar from './SideNavbar'

const Navbar = ()=>{
const {theme,toggleTheme} = React.useContext(ThemeContext)
console.log(theme)
const {authState,loginUser,logoutUser} = React.useContext(AuthContext)
    return(
        <div className={Styles.Container}>
    <div>
        <Link to="/">

        <img src='https://i.ibb.co/FhRDjK7/Redrblack.png' style={{height:"70px",width:"70px"}} alt="logo"/>
        </Link>
    </div>
    <div>
     <div>{<SideNavbar/>}</div>
  <div className={Styles.SearchContainer}>
  <input  type='search' className={Styles.Search}  placeholder="Search for Products"/>
  <div>

  <i style={{padding:"12px",color:"white",fontSize:"17px",marginTop:"-1px",backgroundColor:"red"}}  className="fa-solid fa-magnifying-glass"></i>
  </div>
  </div>
    </div>
 
    <div className={Styles.logsin}>
 <div><i className="fa-solid fa-circle-user"></i></div>
        
        <div>{authState.isAuth===true?(authState.token.name):(<Signup/>)}</div>
        <div>{authState.isAuth===true?(<Button onClick={logoutUser}>Logout</Button>):(<Login/>)}</div>
    </div>
    {/* </div> */}


</div>
    )
}

export default Navbar


   {/* <InputGroup>
    <InputRightElement
      pointerEvents='none'
      children={<i className="fa-solid fa-magnifying-glass"></i>}
    />
    <Input type='tel' className={Styles.Search} htmlSize={50} placeholder='Search for Products..' />
  </InputGroup> */}

     {/* <div className={Styles.Container}> */}
    {/* <div>Basket <i className="fa-solid fa-basket-shopping" style={{fontSize:"40px"}}></i></div> */}

    {/* <div><button style={{backgroundColor:theme==="Light"?"white":"black",color:theme==="Light"?"black":"white"}} onClick={toggleTheme}>{theme==="light"?"Dark Mode":"Light Mode"}</button></div> */}