import Style from '../../Styles/HomeStyle/BestSellers.module.css'

import React from 'react'

const BestSellers = ()=>{

   const [data,setData] = React.useState([])


   React.useEffect(()=>{
GetData()
   },[])

   const GetData  = ()=>{
fetch('https://server-unwieldy-record-8334.onrender.com/admin')
.then((res)=>res.json())
.then((res)=>setData(res.products[0].Best_Sellers))
.catch((err)=>console.log(err))
   }
    return(
        <div className={Style.Container}>
    <div className={Style.head} >
 Best Sellers
    </div>
    <hr className={Style.hr}/>




{/* slider------------------------------------------ */}
    <div className={Style.slider}>
{/* <div>     <i className={`${Style.left} fa-solid fa-chevron-left`} ></i></div> */}

        <div className={Style.child}>
        {data.map((el)=>(
            <div key={el.id} style={{minWidth:"220px"}}>
<div key={el.image}><img src={el.image} alt={el.image}/>
<div className={Style.details}>
<p>{el.product_name}</p>
<p className={Style.weightprice}><span>{el.weight}{" - Rs "}{el.price}</span></p>
<div style={{background:"rgb(245, 244, 244)",padding:"7px"}}>

<div className={Style.strikeContainer}><p className={Style.mrp}>MRP</p> <span className={Style.strike}>Rs{Math.floor(el.price*(el.discount+100)/100)}</span> <span>{` Rs ${el.price}`}</span></div>

<div className={Style.tomorrow}><i className={` ${Style.truck} fa-solid fa-truck`}></i><p className={Style.Delivery}>Standard Delivery: Tomorrow</p></div>
<p className={Style.time}>9:00AM - 1:30PM</p>


<div className={Style.qsb}>
     <div >
     <span className={Style.qty}>Qty</span>

<input type="text" className={Style.input} placeholder="1" />

     </div>
<button className={Style.basket}>
    ADD <i className="fa-solid fa-basket-shopping"></i></button></div>
</div>
</div>
</div>
</div>
        ))}
        
     </div>


{/* <div><i className={`${Style.right} fa-solid fa-chevron-right`}></i></div> */}
    </div>

     
    </div>
        )
}

export default BestSellers

