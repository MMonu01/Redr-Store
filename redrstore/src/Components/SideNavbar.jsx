import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
   Button,
    Box,
    Stack
 
   
  } from '@chakra-ui/react'
  import { AuthContext } from '../Contexts/AuthContext'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Styles from '../Styles/Navbar.module.css'


const SideNavbar = ()=>{

        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
        const [show, setShow] = React.useState(false)
const {authState,logoutUser} = React.useContext(AuthContext)

        const handleClick = () => setShow(!show)







        return (
          <>
            <Box ref={btnRef} onClick={onOpen}>
            <FontAwesomeIcon className={Styles.menu} icon={faBars}></FontAwesomeIcon>
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

                   {authState.isAuth===true?(<Box style={{textAlign:"center",background:"#40a944",color:"white",padding:"8px 0",borderRadius:"5px"}}>{authState.token.name}</Box>):(<Signup/>)}
                   sljssjs
       {authState.isAuth===true?(<Button onClick={logoutUser}>Logout</Button>):(<Login/>)}



        </Stack>

                </DrawerBody>
      
                
                 
              </DrawerContent>
            </Drawer>
          
          </>
        )
        
      
}


export default SideNavbar