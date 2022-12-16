import React from 'react'
import {Link} from 'react-router-dom'
import Style from '../../Styles/FreshFuitsStyle/Shortnav.module.css'

const Shortnav = ()=>{
    return(
        <>
        <header className={Style.header}>
            <span className={Style.span1}><Link to="/">{"Home >"}</Link></span> {"  "}
            <span className={Style.span2}>{"FRUITS & VEGETABLES >"} </span>{"  "}
            <span className={Style.span3}>{"FRESH FRUITS"} </span>{"  "}
        </header>
     
        </>
    )
}


export default Shortnav