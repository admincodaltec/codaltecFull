import React from 'react';
import {HeaderWelcome} from '../components/headerWelcome/HeaderWelcome';
import {FooterWelcome} from '../components/footerWelcome/FooterWelcome';
import video from '../styles/homeTranslate.mp4';

function WelcomePage() {
	return (
		<React.Fragment>
			<div className='welcome__page'>
				<HeaderWelcome></HeaderWelcome>
				<main className='main__page'>
					<video muted autoPlay loop src={video} type='video/mp4'></video>
				</main>
				<FooterWelcome></FooterWelcome>
			</div>
		</React.Fragment>
	);
}

export default WelcomePage;
