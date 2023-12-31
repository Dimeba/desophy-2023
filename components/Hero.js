// styles
import styles from '@/styles/Hero.module.scss'

// components
import Button from './Button'
import Link from 'next/link'

const Hero = ({ title, subtitle }) => {
	return (
		<div className={styles.hero}>
			<video
				className={styles.heroVideo}
				loop
				poster='/hero.jpg'
				autoPlay
				muted
			>
				<source src='/hero-video.mp4' type='video/mp4' />
			</video>
			<div className={styles.videoOverlay}></div>
			<div className={`grid-container ${styles.heroContainer}`}>
				<div className={styles.heroContent}>
					<div className={styles.titleContainer}>
						<p className={styles.subtitle}>{subtitle}</p>
						<p>{title}</p>
					</div>

					<div className={styles.buttons}>
						<Link href='#services' scroll={false} passHref>
							<Button buttonWhite={true}>Discover Our Services</Button>
						</Link>
						<Link href='#contact' scroll={false} passHref>
							<Button buttonWhite={true}>Let's Talk</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
