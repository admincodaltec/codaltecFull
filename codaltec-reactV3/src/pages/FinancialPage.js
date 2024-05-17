import React from 'react';
import {Header} from '../components/header/Header';
import {Financial} from '../components/financial/Financial';
import {Footer} from '../components/footer/Footer';

function FinancialPage() {
	return (
		<React.Fragment>
			<Header></Header>
			<Financial></Financial>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default FinancialPage;
