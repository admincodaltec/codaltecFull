import React from 'react';
import {Header} from '../components/header/Header';
import {Contract} from '../components/contracts/Contract';
import {Footer} from '../components/footer/Footer';

function ContractPage() {
	return (
		<React.Fragment>
			<Header></Header>
			<Contract></Contract>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default ContractPage;
