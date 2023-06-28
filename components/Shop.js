// styles
import styles from '@/styles/Shop.module.scss'

// components
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

const Shop = ({ shopText, shopSamples }) => {
	return (
		<>
			<section id='shop' className={`${styles.shop} grid-container`}>
				<h2>Shop & Download</h2>
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
				{shopSamples.map(sample => {
					return (
						<div key={sample.sys.id} className={styles.samplePhoto}>
							<Image
								src={'https://' + sample.fields.file.url}
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
