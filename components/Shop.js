// styles
import styles from '@/styles/Shop.module.scss'

// components
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

const Shop = ({ shopText, shopTitle, shopSamples }) => {
	return (
		<>
			<section id='shop' className={`${styles.shop} grid-container`}>
				<h2>{shopTitle}</h2>
				<div className={styles.shopText}>
					<p>{shopText}</p>

					<div className={styles.links}>
						<Link href='#' scroll={false} passHref>
							<Button buttonWhite={false}>Download Free Assets</Button>
						</Link>

						<Link href='#' scroll={false} passHref>
							<Button buttonWhite={false}>Buy Assets</Button>
						</Link>
					</div>
				</div>
			</section>
			<section className={styles.shopSamples}>
				{shopSamples.map((sample, index) => {
					return (
						<div key={index} className={styles.samplePhoto}>
							<Image
								src={'https:' + sample.fields.file.url}
								fill
								sizes='(max-width: 768px) 100vw, 768px'
								alt={`Photo of shop item`}
								priority={false}
							/>
						</div>
					)
				})}
			</section>
		</>
	)
}

export default Shop
