import { Grid } from '@material-ui/core';
import React from 'react';
import CardFeature from '../components/CardFeature/CardFeature';
import { learnMoreStyle } from './Styles';

const hubble = process.env.PUBLIC_URL + '/hubble.png';
const stars = process.env.PUBLIC_URL + '/stars.png';

const LearnMore = () => {
  const { title, container, sectionView } = learnMoreStyle();

  return (
    <section className={sectionView} id={'learnMore'} >
      <Grid container className={container} >
        <Grid item xs={12} sm={12} >
          <h1 className={title}> Conoce más </h1>
        </Grid>

        <Grid container item direction="row" justify="center" xs={12} sm={12} >

          <CardFeature imagePath={hubble} />

          <CardFeature imagePath={stars} />

        </Grid>

      </Grid>

    </section>
  );
}

export default LearnMore;