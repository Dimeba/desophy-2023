// styles
import styles from '@/styles/About.module.scss'

// components
import Button from './Button'
import Link from 'next/link'

const About = ({ aboutText, aboutTitle }) => {
	return (
		<section id='about-us' className={`${styles.about} grid-container`}>
			<h2>{aboutTitle}</h2>
			<div className={styles.aboutText}>
				<p>{aboutText}</p>

				<Link href='#contact' scroll={false} passHref>
					<Button buttonWhite={false}>Let's Talk</Button>
				</Link>
			</div>
		</section>
	)
}

export default About
