import Link from 'next/link'
import Image from 'next/image'

// styles
import styles from '@/styles/Footer.module.scss'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<div className={`grid-container ${styles.footerContainer}`}>
				<div className={styles.footerColumn}>
					<ul className={styles.footerMenu}>
						<Link href='#about-us' scroll={false} passHref>
							<li>About Us</li>
						</Link>

						<Link href='#podcast' scroll={false} passHref>
							<li>Blog & Podcast</li>
						</Link>

						<Link href='#shop' scroll={false} passHref>
							<li>Shop & Download</li>
						</Link>

						<Link href='#contact' scroll={false} passHref>
							<li>Get In Touch</li>
						</Link>
					</ul>
				</div>
				<div className={styles.footerColumn}>
					<ul className={styles.footerMenu}>
						<Link href='#' scroll={false} passHref>
							<li>Branding</li>
						</Link>

						<Link href='#' scroll={false} passHref>
							<li>Marketing</li>
						</Link>

						<Link href='#' scroll={false} passHref>
							<li>Research</li>
						</Link>

						<Link href='#' scroll={false} passHref>
							<li>CGI</li>
						</Link>
					</ul>
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
