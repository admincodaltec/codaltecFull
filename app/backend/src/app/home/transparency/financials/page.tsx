import HeaderHome from '@/layouts/HeaderHome';
import FooterHome from '@/layouts/FooterHome';
import BannerHeader from '@/components/home/BannerHeader';
import styles from '@/styles/Transparency.module.css';

export default function Financials() {
	return (
		<>
			<HeaderHome />
			<main className={`${styles.transparency__content} min-h-[80vh]`}>
				<BannerHeader title='ESTADOS FINANCIEROS' />
			</main>
			<FooterHome />
		</>
	);
}
