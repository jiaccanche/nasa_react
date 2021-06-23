import { makeStyles } from '@material-ui/core';

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
        height:"100vh",
        padding:"3em"
    }

} ) );
