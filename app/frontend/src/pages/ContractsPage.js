import React from 'react';
import {Header} from '../components/header/Header';
import {Contracts} from '../components/contracts/Contracts';
import {Footer} from '../components/footer/Footer';

function ContractsPage() {
	return (
		<React.Fragment>
			<Header></Header>
			<Contracts></Contracts>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default ContractsPage;
