import {Metadata} from 'next';
import HeaderHome from '@/layouts/HeaderHome';
import FooterHome from '@/layouts/FooterHome';
import PostSection from '@/layouts/PostSection';

export const metadata: Metadata = {
	title: 'Noticia',
};

interface PostProps {
	params: {
		slug: string;
	};
}

export default function Post({params}: PostProps) {
	return (
		<>
			<HeaderHome />
			<main>
				<PostSection params={params} />
			</main>
			<FooterHome />
		</>
	);
}
