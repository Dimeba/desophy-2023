import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

// Components
import Hamburger from './Hamburger'

// styles
import styles from '@/styles/Nav.module.scss'

const Header = () => {
	// Scrolling Header
	const [targetRef, isIntersecting] = useIntersectionObserver()

	// Mobile Menu

	const [menuOpen, setMenuOpen] = useState(false)
	const [menuClass, setMenuClass] = useState(styles.menuBtnClosed)
	const [hiddenMenuClass, setHiddenMenuClas] = useState(styles.hidden)

	const toggleMenu = () => {
		if (!menuOpen) {
			setMenuClass(styles.menuBtnOpen)
			setMenuOpen(true)
			setHiddenMenuClas('')
		} else {
			setMenuClass(styles.menuBtnClosed)
			setMenuOpen(false)
			setHiddenMenuClas(styles.hidden)
		}
	}

	const closeMenu = () => {
		setMenuClass(styles.menuBtnClosed)
		setMenuOpen(false)
		setHiddenMenuClas(styles.hidden)
	}

	return (
		<nav ref={targetRef}>
			<header
				className={isIntersecting ? styles.headerTop : styles.headerScroll}
			>
				<div className={styles.nav}>
					<Link href='/' scroll={false} passHref>
						<div className={styles.logo}>
							<Image
								src={isIntersecting ? 'logo-white.svg' : 'logo-black.svg'}
								width={123}
								height={30}
								alt='DarkLeap Logo'
								priority={true}
							/>
						</div>
					</Link>

					<Hamburger toggleMenu={toggleMenu} menuClass={menuClass} />

					<ul className={hiddenMenuClass}>
						<Link href='#about-us' scroll={false} passHref>
							<li onClick={() => closeMenu()}>About Us</li>
						</Link>

						<Link href='#services' scroll={false} passHref>
							<li onClick={() => closeMenu()}>Our Services</li>
						</Link>

						<Link href='#podcast' scroll={false} passHref>
							<li onClick={() => closeMenu()}>Blog & Podcast</li>
						</Link>

						<Link href='#shop' scroll={false} passHref>
							<li onClick={() => closeMenu()}>Shop & Download</li>
						</Link>

						<Link href='#contact' scroll={false} passHref>
							<li onClick={() => closeMenu()}>Get In Touch</li>
						</Link>
					</ul>
				</div>
			</header>
		</nav>
	)
}

export default Header
