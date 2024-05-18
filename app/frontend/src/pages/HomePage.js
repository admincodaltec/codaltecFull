import React from 'react';
import {Header} from '../components/header/Header';
import {SliderHome} from '../components/sliderHome/SliderHome';
import {BusinessHome} from '../components/businessHome/BusinessHome';
import {PostHome} from '../components/postHome/PostHome';
import {Footer} from '../components/footer/Footer';

function HomePage() {
	return (
		<React.Fragment>
			<Header></Header>
			<SliderHome></SliderHome>
			<BusinessHome></BusinessHome>
			<PostHome></PostHome>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default HomePage;
