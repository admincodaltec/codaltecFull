import React from 'react';
import {Header} from '../components/header/Header';
import {AboutUsMore} from '../components/aboutUsMore/AboutUsMore';
import {Footer} from '../components/footer/Footer';

function AboutUsMorePage() {
	return (
		<React.Fragment>
			<Header></Header>
			<AboutUsMore></AboutUsMore>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default AboutUsMorePage;
