import React from 'react';
import { Box, PseudoBox, Icon, Text } from '@chakra-ui/core';
const banner = process.env.PUBLIC_URL + '/gaya_vialactea.jpg';

const HeroBanner = ()=>{
  return(
    <Box
    backgroundImage= {`linear-gradient(179.68deg, rgba(10, 57, 91, 0) 90.09%, #FFFFFF 110.8%), 
      radial-gradient(50% 50% at 50% 50%, #0A395B 0%, rgba(0, 0, 0, 0.15) 100%),
      url(${banner})`}
    width="100%"
    height="100%"
    backgroundSize="cover"
    display="flex"
    flexDir="column"
    alignItems="center"
    justifyContent="center"
    >
      <Text 
        width="50%"
        textAlign="center"
        fontWeight="bold"
        color="white"
        fontSize={["sm", "md", "lg", "5xl"]} 
      >
        “En algún lugar, algo increíble está esperando a ser descubierto”
      </Text>
      <PseudoBox 
        border="1px"
        borderColor="white"
        as="button" 
        backgroundColor="#027DC1" 
        color="white"
        borderRadius="25px"
        py={2}
        px={4}
        _active={{ bg: "blue.700" }}
      >
        Who are you?
        <Icon marginLeft="0.3em" name="moon" />
      </PseudoBox>
    </Box>
  );
}

export default HeroBanner;