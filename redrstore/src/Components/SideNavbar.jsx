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
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Styles from '../Styles/Navbar.module.css'

const SideNavbar = ()=>{

        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
        const [show, setShow] = React.useState(false)


        const handleClick = () => setShow(!show)







        return (
          <>
            <Box ref={btnRef} onClick={onOpen}>
            <i className={`${Styles.menu} fa-solid fa-bars`}></i>
            </Box>
            <Drawer 
              isOpen={isOpen}
              onClose={onClose}
              placement='right'
              finalFocusRef={btnRef}
              size="sm"
            >
              <DrawerOverlay />
              <DrawerContent>
    

                <DrawerHeader style={{marginTop:"40px"}}>
                <DrawerCloseButton />


                </DrawerHeader>
      
                <DrawerBody>
                    <Stack spacing={3}>

<Login/>
<Signup/>



        </Stack>

                </DrawerBody>
      
                
                 
              </DrawerContent>
            </Drawer>
          
          </>
        )
        
      
}


export default SideNavbar