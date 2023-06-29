// styles
import styles from '@/styles/Services.module.scss'

// components
import Link from 'next/link'
import Image from 'next/image'

const ServiceCard = props => {
	return (
		<Link href='#' scroll={false} passHref>
			<div className={styles.service}>
				<div className={styles.servicePhoto}>
					<Image
						src={'https:' + props.image.fields.file.url}
						fill
						sizes='(max-width: 768px) 100vw, 768px'
						alt={`Photo of service`}
						priority={false}
					/>
				</div>
				<p className={styles.serviceTitle}>{props.title}</p>
				<div className={styles.descriptionBackground}></div>
				<div className={styles.description}>
					<p>{props.description}</p>
				</div>
			</div>
		</Link>
	)
}

export default ServiceCard
