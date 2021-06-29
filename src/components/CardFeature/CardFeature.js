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
                    <div>
                    <Typography gutterBottom variant="h6" component="h5">
                        Yel laoreet enim urna sed urna 
                    </Typography>
                    <div>
                    <Button size="small" color="inherit" variant="outlined">
                        Learn more
                    </Button>
                    </div>
                    </div>
            </FiCardContent>
        </FiCard>
    );
};

export default CardFeature;