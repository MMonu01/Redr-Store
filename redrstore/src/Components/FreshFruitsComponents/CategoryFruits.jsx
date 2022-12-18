import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthContext'
import Style from '../../Styles/FreshFuitsStyle/CategoryFruits.module.css'
import { Input,InputGroup,InputRightAddon } from '@chakra-ui/react'
import {Search2Icon} from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruck,faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import Online from './Online'
import Loader from '../../Pages/Loader'

const GetData = (sort,text)=>{
return axios({
    baseURL:" http://localhost:3000/Fresh_Fruits",
    params:{
        _sort:sort.sort,
        _order:sort.order,
        q:text

    }
})
}



const CategoryFruits = ()=>{

    const [data,setData] = React.useState([])
const [select,setSelect] = React.useState("Popularity")
    const [loading,setLoading] = React.useState(true)
const [sort,setSort] = React.useState({
    sort:"rating",
    order:"desc"

})
const {text} = React.useContext(AuthContext)




const HandleSelect  = (e)=>{
    setSelect(e.target.value)
}

    React.useEffect(()=>{
 InGetData()
    },[select,text])
 


    const InGetData  = ()=>{
        
setLoading(true)

        if(select==="Popularity"){
            setSort({sort:"rating",order:"desc"})
           }
           else if(select==="Price - Low to High"){
               setSort({sort:"price",order:"asc"})
              }
              else if(select==="Price - High to Low"){
               setSort({sort:"price",order:"desc"})
              }
         
              else if(select==="Rupee Saving - High to Low"){
               setSort({sort:"price",order:"desc"})
              }
              else if(select==="Rupee Saving - Low to High"){
               setSort({sort:"price",order:"asc"})
              }

GetData(sort,text)
 .then((res)=>{
    setLoading(false)
    setData(res.data)
 })
 .catch((err)=>{
    setLoading(false)
    console.log(err)
 })
    }
  



    const HandleSearch = ()=>{
        console.log("this is a search engine")
    }

    return (
        <div className={Style.Container}>
        <div className={Style.CategorySide}>


            <div className={Style.List}>
            <div  className={Style.headie}>Category</div>
            <hr />

            <ul>
                <li>Fruits & Vegetables</li>
                <li>
                    <ul style={{marginLeft:"10px"}}>
                        <li style={{color:"#93bc50"}}>Fresh Fruits (154)</li>
                        <li>
                            <ul className={Style.subCategory}>
                                <li>Apples & Pomegranate (48)</li>
                                <li>Banana, Sapota & Papaya (26)</li>
                                <li>Kiwi, Melon, Citrus Fruit (29)</li>
                                <li>Mangoes (4)</li>
                                <li> Seasonal Fruits (98) </li>
                            </ul>
                            
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
{/* -------------------------- */}
<div>
    <div className={Style.headie}>Brand</div>
    <hr />

    <div style={{marginTop:"10px"}} >

    <InputGroup>
   
    <Input placeholder='Search' width="125px" height="30px" />
    <InputRightAddon children={<Search2Icon/>} style={{cursor:"pointer"}} onClick={HandleSearch} height="30px"/>
  </InputGroup>
    </div>
    <div className={Style.firstCheckbox}>
    <label>
        <input type='checkbox'/>
        bb Combo
    </label>
</div>

<div>
<label>
        <input type='checkbox'/>
        Fresho
    </label>
</div>


<div>
<label>
        <input type='checkbox'/>
        USA
    </label>
</div>
    </div>



<div>

    <div  className={Style.headie}>Food Preference</div>
    <hr />


    <div>
<label>
        <input type='checkbox'className={Style.firstCheckbox} />
        
    Vegetarian
    </label>
</div>
        </div>




<div>

<div  className={Style.headie}>Price</div>
<hr />



<div>
<label>
        <input type='checkbox' className={Style.firstCheckbox} />
        Less than Rs 20 (4)
    </label>
</div>


<div>
<label>
        <input type='checkbox'/>
        Rs 21 to Rs 50 (35)
    </label>
</div>


<div>
<label>
        <input type='checkbox'/>
        Rs 51 to Rs 100 (44)
    </label>
</div>


<div>
<label>
        <input type='checkbox'/>
        Rs 101 to Rs 200 (41)
    </label>
</div>


<div>
<label>
        <input type='checkbox'/>
        Rs 201 to Rs 500 (27)
    </label>
</div>


<div>
<label>
        <input type='checkbox'/>
        More than Rs 501 (1)
    </label>
</div>

</div>






<div>
<div  className={Style.headie}>Discount</div>
<hr />


<div>
<label>
        <input type='checkbox' className={Style.firstCheckbox}/>
        15% - 25% (132)
    </label>
</div>

<div>
<label>
        <input type='checkbox'/>
        More than 25% (22)
    </label>
</div>
</div>



<div>
    <div className={Style.headie}>Pack Size</div>
    <hr />

    <div style={{marginTop:"10px"}} >

    <InputGroup>
   
    <Input placeholder='Search' width="125px" height="30px" />
    <InputRightAddon children={<Search2Icon/>} style={{cursor:"pointer"}} onClick={HandleSearch} height="30px"/>
  </InputGroup>
    </div>
    <div className={Style.firstCheckbox}>
    <label>
        <input type='checkbox'/>
        3 items 1.5 kg - 1.7 kg
    </label>
</div>

<div>
<label>
        <input type='checkbox'/>
        3 items 1.5 kg - 1.8 kg
    </label>
</div>


<div>
<label>
        <input type='checkbox'/>
    1 pc
    </label>
</div>

<div>
<label>
        <input type='checkbox'/>
        1 pc 400 - 800g
    </label>
</div>

<div>
<label>
        <input type='checkbox'/>
        1 pc 500 g - 800 g
    </label>
</div>

<div>
<label>
        <input type='checkbox'/>
        1 pc 800 g -1000 g
    </label>
</div>

<div>
<label>
        <input type='checkbox'/>
        2 kg
    </label>
</div>

<div>
<label>
        <input type='checkbox'/>
        3 kg
    </label>
</div>





    </div>







</div>








        <div className={Style.FruitsSide}>

<div className={Style.popularity}>
    <div>
Fresh Fruits (154)</div>
    <div>
        <select value={select} onChange={HandleSelect}>
            <option value="Popularity">Popularity</option>
            <option value="Price - Low to High">Price - Low to High</option>
            <option value="Price - High to Low">Price - High to Low</option>
            {/* <option value="Alphabetical">Alphabetical</option> */}
            <option value="Rupee Saving - High to Low">Rupee Saving - High to Low</option>
            <option value="Rupee Saving - Low to High">Rupee Saving - Low to High</option>
            
        </select>
    </div>
</div>

<div className={Style.allproducts}> <FontAwesomeIcon className={Style.truck} icon={faTruck}></FontAwesomeIcon> ALL PRODUCTS</div>
<hr />



<div className={Style.displayProducts}>

<div className={Style.child}>
    {loading===true?(<Loader/>):(data.map((el)=>(
            <div key={el.id}>
<div key={el.image}><Link to={`/products/freshfruits/${el.id}` } ><img src={el.image} alt={el.image}/></Link>
<div className={Style.details}>
<div style={{fontSize:"12px",color:"rgb(211, 211, 211)"}}>Fresho</div>
<p>{el.product_name}</p>
<p className={Style.weightprice}><span>{el.weight}{" - Rs "}{el.price}</span></p>
<div style={{background:"rgb(245, 244, 244)",padding:"7px"}}>

<div className={Style.strikeContainer}><p className={Style.mrp}>MRP</p> <span className={Style.strike}>Rs{Math.floor(el.price*(el.discount+100)/100)}</span> <span>{` Rs ${el.price}`}</span></div>

<div className={Style.tomorrow}><FontAwesomeIcon className={Style.truck} icon={faTruck}></FontAwesomeIcon><p className={Style.Delivery}>Standard Delivery: Tomorrow</p></div>
<p className={Style.time}>9:00AM - 1:30PM</p>



<div className={Style.qsb}>
     <div >
     <span className={Style.qty}>Qty</span>

<input type="text" className={Style.input} placeholder="1" />

     </div>
<button className={Style.basket}>
    ADD <FontAwesomeIcon  icon={faBasketShopping}></FontAwesomeIcon></button></div>
</div>
</div>
</div>
</div>
        )))
    }
      
     </div>

</div>
        </div>

     </div>

   
    )

}


export default CategoryFruits