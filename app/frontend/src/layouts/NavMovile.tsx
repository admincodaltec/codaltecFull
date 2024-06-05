import Link from 'next/link';
import {useLocale} from 'next-intl';
import {useTranslations} from 'next-intl';
import styles from '@/styles/HeaderHome.module.css';

export default function NavMovile() {
	const currentLocale = useLocale();
	const tHeader = useTranslations('header');

	return (
		<div className={styles.header__nav_movile}>
			<img src='/assets/Logos/Codaltec_Icono.svg' alt='Logo CODALTEC' />
			<nav>
				<ul className={styles.header__nav_ul}>
					<li>
						<Link className={styles.header__movile_item} href={`/${currentLocale}/home`}>
							{tHeader('inicio')}
						</Link>
					</li>
					<li>
						<Link className={styles.header__movile_item} href={`/${currentLocale}/about-us`}>
							{tHeader('nosotros')}
						</Link>
					</li>
					<li>
						<Link className={styles.header__movile_item} href={`/${currentLocale}/portfolio`}>
							{tHeader('portafolio')}
						</Link>
					</li>
					<li>
						<Link className={styles.header__movile_item} href={`/${currentLocale}/posts`}>
							{tHeader('noticias')}
						</Link>
					</li>
					<li>
						<Link className={styles.header__movile_item} href={`/${currentLocale}/investigation`}>
							{tHeader('investigación')}
						</Link>
					</li>
					<li>
						<Link className={styles.header__movile_item} href={`/${currentLocale}/transparency`}>
							{tHeader('transparencia')}
						</Link>
					</li>
					<li>
						<Link
							className={styles.header__movile_item}
							href={`/${currentLocale}/atention-citizen`}
						>
							{tHeader('atention')}
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
