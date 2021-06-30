import { Avatar, Grid } from '@material-ui/core';
import React from 'react';
import { aboutUsStyle } from './Styles';

const image = process.env.PUBLIC_URL + '/contact-in-person.png';

const AboutUs = () => {
    const { title, avatar, avatarDetail, aboutUsBack, avatarName, profile, container, information } = aboutUsStyle();

    return (
        <section className={aboutUsBack} id={"about"}>
            <Grid container className={container} >
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

                    <Grid item container direction="column" justify="center" alignItems="center" sm={3} className={profile}>
                        <Avatar alt="Remy Sharp" src={image} className={avatar} />
                        <h2 className={avatarName} >El Eli</h2>
                        <h3 className={avatarDetail} >Ingeniero de software</h3>
                    </Grid>

                    <Grid item container direction="column" justify="center" alignItems="center" sm={3} className={profile}>
                        <Avatar alt="Remy Sharp" src={image} className={avatar} />
                        <h2 className={avatarName} >El Yarch</h2>
                        <h3 className={avatarDetail} >El fanboy del universo</h3>
                    </Grid>
                </Grid>

            </Grid>

        </section>
    );
}

export default AboutUs;