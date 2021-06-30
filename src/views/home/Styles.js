/**
 * Estilos para cada una de las vistas: banner, about us, learn more
 */
import { makeStyles } from '@material-ui/core';

const backgroundImg = process.env.PUBLIC_URL + '/sun.png';
const frontImg = process.env.PUBLIC_URL + '/front.png';

const banner = process.env.PUBLIC_URL + '/gaya_vialactea_effect.png';

export const heroBannerStyles = makeStyles( () => ( {
    bannerBox:{
        //backgroundImage: `linear-gradient(179.68deg, rgba(10, 57, 91, 0) 100.09%, #FFFFFF 110.8%), radial-gradient(50% 50% at 50% 50%, #0A395B 0%, rgba(0, 0, 0, 0.15) 100%), url(${banner})`,
        backgroundImage: `radial-gradient(circle, rgba(10,57,80,0) 95%, rgba(255,255,255,0.6) 100%), url(${banner})`,
        width:"100%",
        height:"100vh",
        backgroundRepeat:"no-repeat",
        backgroundSize:"auto",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    bannerText:{
        color:"#ffffff",
        fontFamily: "Open Sans, sans-serif",
        fontWeight:"bold",
        lineHeight:"150%",
        width:"56%",
        textAlign:"center",
        fontSize:"2.5em",
        "@media (max-width: 900px)": {
            width:"85%",
            fontSize:"2.2em",
          }
    },
    autorText:{
        color:"#ffffff"
    },
    bannerButton:{
        borderRadius:"25px",
        background:"#027DC1",
        border: "1px solid white",
        marginTop:"1em"
    }

    } )
);

export const aboutUsStyle = makeStyles( () => ({
    aboutUsBack:{
        backgroundImage: `url(${backgroundImg})`,
        width:"100%",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        "@media (max-width: 900px)": {
            background:"#ffffff"
        }
    },
    avatar:{
        width:"6em",
        height:"6em",
    },
    avatarName:{
        margin:"0.5em",
        fontSize:"1.1em",
        fontWeight:"900",
        textAlign:"center"
    },
    avatarDetail:{
        margin:"0",
        fontSize:".95em",
        textAlign:"center",
        color:"#0A395B",
        fontWeight:"200"
    },
    information:{
        fontStyle:"300",
        fontSize:"1.4em",
        lineHeight:"178%"
    },
    debug:{
        border:"1px solid red",
        //margin:"10px"
    },
    profile:{
        marginTop:"10px",
        marginBottom:"1.7em"
    },
    title:{
        marginTop:"1.7em",
        fontSize:"2.8em",
        color:"#0A395B"
    },
    container:{
        backgroundImage: `url(${frontImg})`,
        padding:"2.3em"
    }

} ) );


export const learnMoreStyle = makeStyles( () => ({
    initStCard:{
        maxWidth:345
    },
    cardFeature:{
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    debug:{
        border:"1px solid red",
        //margin:"10px"
    },
    sectionView:{
        background:"#0A395B",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        marginTop:"1.7em",
        fontSize:"3.1em",
        fontWeight:"900",
        color:"#ffffff"
    },
    container:{ 
        padding:"3em"
    }

} ) );
