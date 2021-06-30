import { Button, Box } from '@material-ui/core';
import React from 'react';
import { heroBannerStyles } from './Styles';

const HeroBanner = () => {
	const { bannerBox, bannerButton, bannerText, autorText } = heroBannerStyles();
	return (
		<Box className={bannerBox} id={"home"}>

			<h1 className={bannerText}>
				“En algún lugar, algo increíble está esperando a ser descubierto”
			</h1>

			<span className={autorText}>-Carl Sagan</span>

			<Button
				variant="contained"
				className={bannerButton}
			>
				Acerca de nosotros
			</Button>
		</Box>
	);
}

export default HeroBanner;