import React from 'react';
import {Header} from '../components/header/Header';
import {Portfolio} from '../components/portfolio/Portfolio';
import {Footer} from '../components/footer/Footer';

function PortfolioPage() {
	return (
		<React.Fragment>
			<Header></Header>
			<Portfolio></Portfolio>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default PortfolioPage;
