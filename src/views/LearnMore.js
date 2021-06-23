import { Grid, Paper, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { learnMoreStyle } from './Styles';

const hubble = process.env.PUBLIC_URL + '/hubble.png';

const LearnMore = () => {
  const { debug, title, container, sectionView, initStCard, cardFeature } = learnMoreStyle();

  return(
    <section className={sectionView}>
        <Grid container className={ container } >
            <Grid item xs={12} sm={12} > 
                <h1 className={title}> Conoce más </h1>
            </Grid>

            <Grid container item direction="row" xs={12} sm={12} >
                <Card className={ initStCard }>
                    <CardMedia
                        className={ cardFeature }
                        component="img"
                        alt="Contemplative Reptile"
                        image={ hubble }
                        title="Contemplative Reptile"
                        />
                    <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                    </CardContent>
                </Card>

            </Grid>

        </Grid>
        
    </section>
  );
}

export default LearnMore;