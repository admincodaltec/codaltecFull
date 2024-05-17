import React from 'react';
import {Header} from '../components/header/Header';
import {Post} from '../components/post/Post';
import {Footer} from '../components/footer/Footer';

function PostPage() {
	return (
		<React.Fragment>
			<Header></Header>
			<Post></Post>
			<Footer></Footer>
		</React.Fragment>
	);
}

export default PostPage;
