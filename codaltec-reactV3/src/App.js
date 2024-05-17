import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Welcome from './pages/WelcomePage';
import Home from './pages/HomePage';
import AboutUs from './pages/AboutUsPage';
import AboutUsMore from './pages/AboutUsMorePage';
import Portfolio from './pages/PortfolioPage';
import Product from './pages/ProductPage';
import Posts from './pages/PostsPage';
import Post from './pages/PostPage';
import Investigation from './pages/InvestigationPage';
import Laboratory from './pages/LaboratoryPage';
import Transparency from './pages/TransparencyPage';
import Contracts from './pages/ContractsPage';
import Contract from './pages/ContractPage';
import InternalControl from './pages/InternalControlPage';
import Financial from './pages/FinancialPage';
import Atention from './pages/AtentionPage';
import NotFound from './pages/NotFoundPage';

import './index.css';

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Welcome />} />
					<Route path='/home' element={<Home />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/about-us/more' element={<AboutUsMore />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/product/:productId' element={<Product />} />
					<Route path='/posts' element={<Posts />} />
					<Route path='/post/:postId' element={<Post />} />
					<Route path='/investigation' element={<Investigation />} />
					<Route path='/laboratory' element={<Laboratory />} />
					<Route path='/transparency' element={<Transparency />} />
					<Route path='/contracts' element={<Contracts />} />
					<Route path='/contracts/:contractId' element={<Contract />} />
					<Route path='/internal-control' element={<InternalControl />} />
					<Route path='/financial' element={<Financial />} />
					<Route path='/atention' element={<Atention />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export {App};
