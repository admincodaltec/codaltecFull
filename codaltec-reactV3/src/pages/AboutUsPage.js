import React from 'react';
import {Header} from '../components/header/Header';
import {AboutUs} from '../components/aboutUs/AboutUs';
import {Footer} from '../components/footer/Footer';

function AboutUsPage() {
	return (
		<React.Fragment>
			<Header></Header>
			<AboutUs></AboutUs>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default AboutUsPage;
