import React from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import axios from 'axios'
import { Button, Td,Th,Table,Tr,Tbody,Thead,TableCaption, TableContainer,Tfoot } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Style from '../Styles/Cart.module.css'

const Cart = ()=>{

const {userCart} = React.useContext(AuthContext)
const [order,setOrder] = React.useState(false)

console.log(order,"order placement status")
const PutData = (data)=>{
    return axios({
        method:"post",
        baseURL:`https://server-unwieldy-record-8334.onrender.com/orders`,
        data:data,
headers:{
"Content-Type":"application/json"
}
        
    })
}

const HandleOrder = ()=>{
    setOrder(true)
    PutData(userCart)
}


let totalpayment = 0
for(let i=0; i<userCart.cart.length;i++){
    totalpayment += userCart.cart[i].total_price
}


    return(<>

    <div style={{height:"78px",width:"100px"}}></div>

{order?(<div style={{textAlign:"center"}}>
<Button style={{background:"rgb(144, 214, 40)",color:"white"}} onClick={HandleOrder} variant='solid'>Order Successfully Placed 
    <FontAwesomeIcon style={{marginLeft:"5px"}} icon={faCircleCheck}></FontAwesomeIcon>
    </Button>
</div>):null}


    

   <div className={Style.userInfo}>


  
  
    <div>Customer Name:</div>    <div>{userCart.name}</div>
  <div>Mobile Number:</div>  <div>{userCart.mobile}</div>
  <div>Email:</div>  <div>{userCart.email}</div>
  
   </div>

<TableContainer className={Style.TableContainer} >
  <Table variant='striped' colorScheme='teal' className={Style.Titem}>
    <TableCaption style={{width:"100px",fontSize:"20px"}}  className={Style.Caption} placement="top">CART ITEM DASHBOARD</TableCaption>
    <Thead>
      <Tr>
        <Th>ITEM DESCRIPTION</Th>
        <Th>UNIT PRICE</Th>
        <Th>QUANTITY</Th>
        <Th>SAVING</Th>
        <Th>TOTAL</Th>
      </Tr>
    </Thead>
    <Tbody>

    {userCart.cart.map((el)=>(

<Tr key={el.id}>
<Td>{el.product_name}</Td>
<Td>{el.price}</Td>
<Td>{el.quantity}</Td>
<Td>{Math.floor(el.total_price/10)}</Td>
<Td>{el.total_price}</Td>
</Tr>
))}
      
      
    </Tbody>
    <Tfoot>
    <Tr>
        <Th>TOTAL BILL</Th>
       <Th></Th>
       <Th></Th>
       <Th></Th>
       <Th>{totalpayment}</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>



  
           
    <div className={Style.OrderButton} style={{marginButton:'200px'}}> {order?null:( <Button colorScheme='red' onClick={HandleOrder} variant='outline'>Place Order
  </Button>)} 
   </div>

    </>)
}

export default Cart