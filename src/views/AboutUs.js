import { Box, Avatar, makeStyles, Grid } from '@material-ui/core';
import React from 'react';
const backgroundImg = process.env.PUBLIC_URL + '/sun.png';
const image = process.env.PUBLIC_URL + '/contact-in-person.png';
const frontImg = process.env.PUBLIC_URL + '/front.png';

const useStyle = makeStyles( () => ({
    aboutUsBack:{
        backgroundImage: `url(${backgroundImg})`,
        width:"100%",
        height:"100vh",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
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
        height:"100vh",
        padding:"2.3em"
    }

} ) );
const AboutUs = () => {
  const { title, avatar, avatarDetail, aboutUsBack, avatarName, profile, container, debug, information } = useStyle();

  return(
    <section className={aboutUsBack}>
        <Grid container className={ container } >
            <Grid item alignItems="baseline" xs={12} sm={9} > 
                <h1 className={title}>About Us</h1>
            </Grid>

            <Grid container item direction="row" xs={12} sm={9} >

                <p className={information}>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    In leo odio, venenatis bibendum metus et, 
                    consequat cursus mi. Mauris finibus dignissim porta. 
                    Cras aliquet, dolor at egestas scelerisque, 
                    quam odio fringilla quam, vel laoreet enim urna sed urna. 
                    Proin at enim id sem malesuada dignissim. 
                </p>
                
                <Grid item container direction="column" justify="center" alignItems="center" sm={3} className={ profile }>
                    <Avatar alt="Remy Sharp" src={ image } className={ avatar } />
                    <h2 className={ avatarName } >El Eli</h2>
                    <h3 className={ avatarDetail } >Ingeniero de software</h3>            
                </Grid>

                <Grid item container direction="column" justify="center" alignItems="center" sm={3} className={ profile }>
                    <Avatar alt="Remy Sharp" src={ image } className={ avatar } />
                    <h2 className={ avatarName } >El Yarch</h2>
                    <h3 className={ avatarDetail } >El fanboy del universo</h3>            
                </Grid>
            </Grid>

        </Grid>
        
    </section>
  );
}

export default AboutUs;