import { Button, Box, makeStyles } from '@material-ui/core';
import React from 'react';
const banner = process.env.PUBLIC_URL + '/gaya_vialactea.jpg';

const useStyles = makeStyles( () => ( {
    bannerBox:{
        backgroundImage: `linear-gradient(179.68deg, rgba(10, 57, 91, 0) 100.09%, #FFFFFF 110.8%), radial-gradient(50% 50% at 50% 50%, #0A395B 0%, rgba(0, 0, 0, 0.15) 100%), url(${banner})`,
        width:"100%",
        height:"100vh",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    bannerText:{
        color:"#ffffff",
        fontFamily: "Open Sans, sans-serif",
        fontWeight:"bold",
        width:"56%",
        textAlign:"center",
        fontSize:"2.5em"
    },
    autorText:{
        color:"#ffffff"
    },
    bannerButton:{
        borderRadius:"3%",
        background:"#027DC1",
        border: "1px solid white",
        marginTop:"1em"
    }

    } )
);
const HeroBanner = () => {
    const{ bannerBox, bannerButton, bannerText, autorText } = useStyles();
  return(
    <Box className={bannerBox}>
        
        <h1 className={bannerText}>
            “En algún lugar, algo increíble está esperando a ser descubierto”
        </h1>
            
        <span className={autorText}>-Carl Sagan</span>

        <Button
            variant="contained"
            className= { bannerButton }
        >
            Acerca de nosotros
        </Button>
    </Box>    
  );
}

export default HeroBanner;