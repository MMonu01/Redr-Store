import React from 'react'
import {Link} from 'react-router-dom'
import Style from '../../Styles/SingleFruitsStyle/snav.module.css'

const Shortnav = ({product_name})=>{
    return(
        <>
        <header className={Style.header} >
            <span className={Style.span1}><Link to="/">{"Home >"}</Link></span> {"  "}
            <span className={Style.span2}>{"FRUITS & VEGETABLES >"} </span>{"  "}
            <span className={Style.span3}><Link to="/products/freshfruits">{"FRESH FRUITS >"}</Link></span>{"  "}
            <span>{product_name}</span>
        </header>
     
        </>
    )
}


export default Shortnav