import React from 'react';
import {Header} from '../components/header/Header';
import {Posts} from '../components/posts/Posts';
import {Footer} from '../components/footer/Footer';

function PostsPage() {
	return (
		<React.Fragment>
			<Header></Header>
			<Posts></Posts>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default PostsPage;
