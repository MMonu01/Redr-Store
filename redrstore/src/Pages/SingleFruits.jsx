import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Shortnav from '../Components/SingleFruitsComponents/snav'
import DisplayFruits from '../Components/SingleFruitsComponents/DisplayFruits'
import About from '../Components/SingleFruitsComponents/About'
import Footer from '../Components/Footer'

const SingleFruits = ()=>{
const [data,setData] = React.useState({})
const [loading,setLoading] = React.useState(true)
    const {id} = useParams()
    
React.useEffect(()=>{
    setLoading(true)
fetch(`http://localhost:3000/Fresh_Fruits/${id}`)
.then((res)=>res.json())
.then((res)=>{
setLoading(false)
setData(res)
// console.log(res,"osjos")
// console.log(data)
})
.catch((err)=>{console.log(err)})
},[])

    return(
<>
<div style={{height:"71px",width:"100px"}}></div>

{loading?null:<Shortnav product_name={data.product_name}/>}
{loading?"Loading...":(<DisplayFruits {...data} />)}
{loading?null:(<About description={data.description} product_name={data.product_name} />)}
<Footer/>
</>
    )
}


export default SingleFruits