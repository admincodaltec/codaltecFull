import React from 'react';
import {Header} from '../components/header/Header';
import {Investigation} from '../components/investigation/Investigation';
import {Footer} from '../components/footer/Footer';

function InvestigationPage() {
	return (
		<React.Fragment>
			<Header></Header>
			<Investigation></Investigation>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default InvestigationPage;
