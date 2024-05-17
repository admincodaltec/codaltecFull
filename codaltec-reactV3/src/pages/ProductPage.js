import React from 'react';
import {Header} from '../components/header/Header';
import {Product} from '../components/product/Product';
import {Footer} from '../components/footer/Footer';

function ProductPage() {
	return (
		<React.Fragment>
			<Header></Header>
			<Product></Product>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default ProductPage;
