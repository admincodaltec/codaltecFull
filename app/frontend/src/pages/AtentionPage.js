import React from 'react';
import {Header} from '../components/header/Header';
import {Atention} from '../components/atention/Atention';
import {Footer} from '../components/footer/Footer';

function AtentionPage() {
	return (
		<React.Fragment>
			<Header></Header>
			<Atention></Atention>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default AtentionPage;
