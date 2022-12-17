import Style from '../../Styles/SingleFruitsStyle/DisplayFruits.module.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruck,faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../Contexts/AuthContext'



const DisplayFruits = ({adminId,id,image,product_name,quantity,price,discount,total_price,status,rating,description,weight})=>{
    const {userCart,setUserCart} = React.useContext(AuthContext)
    const [Quantity,setQuantity] = React.useState(quantity)
const [bag,setBag] = React.useState( {
    "id": id,
    "adminId": adminId,
    "product_name": product_name,
    "quantity": quantity,
    "price": price,
    "total_price": price*quantity,
    "status": "In process"
  })

  const HandleBag = ()=>{


// ----------------------------------------------------
let x = userCart.cart
    let arr = []
    let matid = []
    for(let i=0; i<x.length; i++){
if(x[i].id!==bag.id){
    arr.push(x[i])
    matid.push(x[i].id)
}else{
    let obj = []
    for(let j=0; j<arr.length; j++){
        if(bag.id!==arr[j].id){
            obj.push(arr[j])
        }
    }
arr = obj
}
}
arr.push(bag)
// ------------------------------------






setUserCart({...userCart,cart:arr})
  }
  

const HandleQuantity = (val)=>{
  setBag({...bag,quantity:val.target.value,total_price:val.target.value*price})        
}

// console.log(bag)
// const PatchUser = ()=>{
//     fetch(`http://localhost:3000/user/${}/orders`,{
//         method:"PATCH",
//         body:JSON.stringify({}),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     })
// }






// console.log(Quantity)

    return(
<>
    <div className={Style.Container}>
    <div className={Style.CategorySide}>


        <div className={Style.List}>
        <div  className={Style.headie}>Category</div>
        <hr style={{marginBottom:"12px"}} />

        <ul>
            <li>Fruits & Vegetables</li>
            <li>
                <ul style={{marginLeft:"10px"}}>
                    <li style={{color:"#94be51"}}>Fresh Fruits</li>
                    <li>
                        <ul className={Style.subCategory}>
                            <li>Apples & Pomegranate</li>
                            <li>Banana, Sapota & Papaya</li>
                            <li>Kiwi, Melon, Citrus Fruit</li>
                            <li>Mangoes</li>
                            <li> Seasonal Fruits</li>
                        </ul>
                        
                    </li>
                </ul>
            </li>
        </ul>
        </div>
{/* -------------------------- */}
<div>
<div className={Style.headie}>Brand</div>
<hr style={{marginBottom:"12px"}} />


<div className={Style.Fresho}>
<ul>
    <li>Fresho</li>
    <li>Fresho Apples & Pomegranate</li>
</ul>
    
</div>
</div>
</div>








    <div className={Style.ImageSide}>
<img src={image} alt="Image Not Available"/>

 </div>

<div className={Style.CartSide}>
<h3 className={Style.Fresh}>Fresho</h3>
<p className={Style.nameweight}>{product_name} {", "} {weight}</p>
<p className={Style.mrp}>MRP: <span>{Math.floor(price*discount/100) +price}</span></p>
<p className={Style.price}>Price: Rs {price}</p>
<p className={Style.save}>You Save: {discount}%</p>
<p className={Style.taxes}>(Inclusive of all taxes)</p>
<div className={Style.basket}>
    <input type='number' placeholder='1' onChange={HandleQuantity}/>
    <button className={Style.Add} onClick={HandleBag} >ADD TO BASKET</button>
    <button className={Style.SaveItem}>SAVE</button>
</div>

<p className={Style.time}><FontAwesomeIcon style={{fontSize:"18px"}} icon={faTruck}></FontAwesomeIcon><span>Standard: Tomorrow 9:00AM - 1:30PM</span></p>
<p className={Style.combo}>+1 More Combo <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></p>
</div>



</div>
</>

)

}
export default DisplayFruits


