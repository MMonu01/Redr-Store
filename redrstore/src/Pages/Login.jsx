import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Image,
    Box,
    Stack
 ,Alert,
 AlertTitle,
 AlertDescription,
 AlertIcon
   
    
  } from '@chakra-ui/react'
  import { AuthContext } from '../Contexts/AuthContext'


const Login = ()=>{

        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
        const [show, setShow] = React.useState(false)
const {authState,loginUser} = React.useContext(AuthContext)
const [alertShow,setAlertShow] = React.useState(null)

const [formData,setFormData] = React.useState({
email:"",password:""
})
        const handleClick = () => setShow(!show)


      const HandleLogin = async(e)=>{
e.preventDefault()

try{
  let res = await fetch(`http://localhost:3000/user`)
  res = await res.json()
  let x = false
for(let i=0; i<res.length; i++){
  if(res[i].email===formData.email && res[i].password===formData.password){
   x = true
 loginUser(null)
  }
}
if(x===false){
  console.log("Alert is not working")
setAlertShow("False")
}
else{
  setAlertShow("True")
}


}

catch(err){
console.log(err)
}
      }
console.log(authState)


      const HandleFormData = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
          }






        return (
          <>
            <Button ref={btnRef} onClick={onOpen}>
              Login
            </Button>
            <Drawer 
              isOpen={isOpen}
              onClose={onClose}
              placement='right'
              finalFocusRef={btnRef}
              size="sm"
            >
              <DrawerOverlay />
              <DrawerContent>
{(alertShow==="False"?(<Alert status='error' style={{position:""}} variant='left-accent'>
    <AlertIcon />
    Error: password or email is incorrect
  </Alert>):null) }

          
  



                <DrawerHeader>
                    <Box boxSize="140px">
                <DrawerCloseButton />

                <Image src="https://i.ibb.co/FhRDjK7/Redrblack.png" style={{marginTop:"-25px"}} alt="Redrblack"/> 
                    </Box>

                    Welcome Back!
                </DrawerHeader>
      
                <DrawerBody>
                <form onSubmit={HandleLogin}>
                    <Stack spacing={3}>

                  <Input type="email" value={formData.email} name="email" onChange={HandleFormData} placeholder="Enter your E-mail"/>


{/* password input------------------------- */}
<InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        name="password" value={formData.password} onChange={HandleFormData}
        placeholder='Enter your password'
        />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? (<i style={{fontSize:"20px"}} className="fa-solid fa-eye-slash"></i>) : (<i style={{fontSize:"20px"}} className="fa-solid fa-eye"></i>)}
        </Button>
      </InputRightElement>
    </InputGroup>
{/* ------------------------------- */}
                <Input type="submit" bg="red" color="white" style={{marginTop:"30px"}} value="Login"/>


        </Stack>
                  </form>

                </DrawerBody>
      
                  {/* <Button variant='outline' mr={3} onClick={onClose}> */}
                  {/* </Button> */}
                 
              </DrawerContent>
            </Drawer>
          
          </>
        )
        
      
}


export default Login