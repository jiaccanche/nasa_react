import { Typography, Button } from '@material-ui/core';
import React from 'react';

import {
    FiCard,
    FiCardContent,
    FiCardMedia,
    cardFeatureStyle
  } from "./FullImageCard";

const CardFeature = ({ imagePath }) => {
    const classes = cardFeatureStyle();
    
    return(
        <FiCard className={classes.card}>
          <FiCardMedia
            media="picture"
            alt="Contemplative Reptile"
            image= { imagePath }
            title="Contemplative Reptile"
          />
            <FiCardContent className={classes.fiCardContent}>
                    <Typography variant="h6" gutterBottom>
                        Yel laoreet enim urna sed urna 
                    </Typography>
                    <Button size="medium" color="inherit" variant="outlined">
                        Learn more
                    </Button>
            </FiCardContent>
        </FiCard>
    );
};

export default CardFeature;