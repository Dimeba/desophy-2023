import { useState } from 'react'

// styles
import styles from '@/styles/Nav.module.scss'

// Components
import Hamburger from './Hamburger'
import Link from 'next/link'
import Image from 'next/image'

// hooks
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useNavContext } from '@/hooks/useNavContext'

const Nav = () => {
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

	// navigation
	const { navigation, showPodcast, showShop } = useNavContext()

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

					{navigation && (
						<ul className={hiddenMenuClass}>
							<Link href='#about-us' scroll={false} passHref>
								<li onClick={() => closeMenu()}>{navigation.about}</li>
							</Link>

							<Link href='#services' scroll={false} passHref>
								<li onClick={() => closeMenu()}>{navigation.services}</li>
							</Link>

							{showPodcast && (
								<Link href='#podcast' scroll={false} passHref>
									<li onClick={() => closeMenu()}>{navigation.podcast}</li>
								</Link>
							)}

							{showShop && (
								<Link href='#shop' scroll={false} passHref>
									<li onClick={() => closeMenu()}>{navigation.shop}</li>
								</Link>
							)}

							<Link href='#contact' scroll={false} passHref>
								<li onClick={() => closeMenu()}>{navigation.contact}</li>
							</Link>
						</ul>
					)}
				</div>
			</header>
		</nav>
	)
}

export default Nav
