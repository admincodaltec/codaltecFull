import React from 'react';
import {Header} from '../components/header/Header';
import {InternalControl} from '../components/internalControl/InternalControl';
import {Footer} from '../components/footer/Footer';

function FinancialPage() {
	return (
		<React.Fragment>
			<Header></Header>
			<InternalControl></InternalControl>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default FinancialPage;
