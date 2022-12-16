import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'

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
        
      } from '@chakra-ui/react'

import { ThemeContext } from '../Contexts/ThemeContext'
import { AuthContext } from '../Contexts/AuthContext'
import styles from '../Styles/LoginSignup.module.css'

const Signup = ()=>{
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [show, setShow] = React.useState(false)
const {theme} = React.useContext(ThemeContext)
const {loginUser} = React.useContext(AuthContext)
const [formData,setFormData] = React.useState({
  name:"",username:"",email:"",mobile:"",password:""
})



    const handleClick = () => setShow(!show)

  const HandleSignup = async(e)=>{
e.preventDefault()


try{
  let res = await fetch(`http://localhost:3000/user`,{
method:"POST",
body:JSON.stringify(formData),
headers:{
  "Content-Type":"application/json"
}
  })

  res = await res.json()
if(res.name!=undefined){
  console.log("signup Successful")
  loginUser(res)
}

}

catch(err){
console.log(err)
console.log("NODAjjdss")
}

  }

  const HandleFormData = (e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
  }
console.log(formData)
    
            return (
              <div>
                <Button ref={btnRef} style={{width:"100%"}} onClick={onOpen}>
                  Signup
                </Button>
                <Drawer  bgGradient="radial(gray.300, yellow.400, pink.200)" 
                  isOpen={isOpen}
                  onClose={onClose}
                  placement='right'
                  finalFocusRef={btnRef}
                  size="sm" 
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerHeader>
                        <Box boxSize="140px">
                    <DrawerCloseButton />
    
                    <Image src="https://i.ibb.co/FhRDjK7/Redrblack.png" style={{marginTop:"-25px"}} alt="Redrblack"/> 
                        </Box>
    
                        Get Started!
                    </DrawerHeader>
          
                    <DrawerBody>
                    <form onSubmit={HandleSignup}>
                        <Stack spacing={3}>
    
                      <Input type="text" value={formData.name} name="name" onChange={HandleFormData}  placeholder="Enter your full name"/>
                      <Input type="text" value={formData.username} name="username" onChange={HandleFormData} placeholder="Create a unique username"/>
                      <Input type="email" value={formData.email} name="email" onChange={HandleFormData} placeholder="Enter your E-mail"/>
                      <Input type="number" value={formData.mobile} name="mobile" onChange={HandleFormData} placeholder="Enter your mobile number"/>
                 
    
    
    {/* password input------------------------- */}
    <InputGroup size='md'>
          <Input
            pr='4.5rem' value={formData.password} name="password" onChange={HandleFormData}
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? (<FontAwesomeIcon style={{fontSize:"20px"}} icon={faEyeSlash}></FontAwesomeIcon>) : (<FontAwesomeIcon style={{fontSize:"20px"}} icon={faEye}></FontAwesomeIcon>)}
            </Button>
          </InputRightElement>
        </InputGroup>
    {/* ------------------------------- */}
                    <Input type="submit" bg="red" color="white" style={{marginTop:"30px",cursor:"pointer"}} value="Create an account"/>
    
    
            </Stack>
                      </form>
    
                    </DrawerBody>
          
                      {/* <Button variant='outline' mr={3} onClick={onClose}> */}
                      {/* </Button> */}
                     
                  </DrawerContent>
                </Drawer>
              </div>
            )
            

}


export default Signup