// styles
import styles from '@/styles/Footer.module.scss'

// components
import Link from 'next/link'
import Image from 'next/image'

// hooks
import { useNavContext } from '@/hooks/useNavContext'

const Footer = () => {
	const year = new Date().getFullYear()

	// navigation
	const { navigation, servicesNav } = useNavContext()

	return (
		<footer className={styles.footer}>
			<div className={`grid-container ${styles.footerContainer}`}>
				<div className={styles.footerColumn}>
					{navigation && (
						<ul className={styles.footerMenu}>
							<Link href='#about-us' scroll={false} passHref>
								<li>{navigation.about}</li>
							</Link>

							<Link href='#podcast' scroll={false} passHref>
								<li>{navigation.podcast}</li>
							</Link>

							<Link href='#shop' scroll={false} passHref>
								<li>{navigation.shop}</li>
							</Link>

							<Link href='#contact' scroll={false} passHref>
								<li>{navigation.contact}</li>
							</Link>
						</ul>
					)}
				</div>
				<div className={styles.footerColumn}>
					{servicesNav && (
						<ul className={styles.footerMenu}>
							{servicesNav.map((service, index) => (
								<Link key={index} href='#' scroll={false} passHref>
									<li>{service.fields.title}</li>
								</Link>
							))}
						</ul>
					)}
				</div>
				<div className={styles.footerColumn}>
					<ul>
						<Link
							href='https://www.instagram.com/desophynyc/'
							scroll={false}
							passHref
						>
							<li>Instagram</li>
						</Link>

						<Link
							href='https://www.linkedin.com/company/desophy/'
							scroll={false}
							passHref
						>
							<li>LinkedIn</li>
						</Link>

						<Link
							href='https://www.facebook.com/desophy/'
							scroll={false}
							passHref
						>
							<li>Facebook</li>
						</Link>
					</ul>
				</div>
				<div className={`${styles.logoCredit} ${styles.footerColumn}`}>
					<Link href='/' scroll={false} passHref>
						<div className={styles.logo}>
							<Image
								src='logo-white.svg'
								width={90}
								height={22}
								alt='DarkLeap Logo'
								priority={true}
							/>
						</div>
					</Link>
					<p className={styles.credit}>
						Inspired by Culture
						<br /> & Storytelling
					</p>
					<p className={styles.credit}>
						© {year} DeSophy. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
