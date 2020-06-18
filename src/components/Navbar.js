import React from 'react';
import { Flex, Image, Link } from '@chakra-ui/core';
const logo = process.env.PUBLIC_URL + '/logologo.png';
const Navbar = () => {
  return(
    <Flex 
      width="100%"
      alignItems="center"
      justifyContent="space-between"  
      padding = "0.5em 1em"
      position="fixed"
      top="0"
    >
      <Flex
        flexDirection="row"
        alignContent="center"
        alignItems="center"
      >
        <Image 
          src={logo} 
          size="10"
        />
      </Flex>

      <Flex
        display={["none", "flex", "flex", "flex" ]} 
        flexDirection="row"
        alignContent="center"
        alignItems="center"
        color="white" 
      >
      <Link padding="2" >Astronomia</Link>
      <Link padding="2">El espacio</Link>
      <Link padding="2">Las ciencias exactas</Link>
      <Link padding="2">Contacto</Link>
      </Flex>

    </Flex>
  );
}

export default Navbar;