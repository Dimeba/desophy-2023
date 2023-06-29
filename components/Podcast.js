// styles
import styles from '@/styles/Podcast.module.scss'

// components
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const Podcast = ({ podcastText, episode }) => {
	return (
		<section id='podcast' className={`${styles.podcast} grid-container`}>
			<div className={styles.podcastText}>
				<h2>Blog & Podcast</h2>
				<p>{podcastText}</p>
			</div>

			<div className={styles.episode}>
				<div className={styles.episodeText}>
					<h3>{episode.fields.title}</h3>
					<p className={styles.episodeDate}>{episode.fields.date}</p>
					<Link href='#' scroll={false} passHref>
						<Button>Register Now</Button>
					</Link>
				</div>
				<div className={styles.episodePhotos}>
					<div className={styles.episodePhoto}>
						<Image
							src={'https:' + episode.fields.hostPhoto.fields.file.url}
							fill
							sizes='(max-width: 768px) 100vw, 768px'
							alt={`Photo of `}
							priority={false}
						/>
					</div>
					<div className={styles.episodePhoto}>
						<Image
							src={'https:' + episode.fields.guestPhoto.fields.file.url}
							fill
							sizes='(max-width: 768px) 100vw, 768px'
							alt={`Photo of `}
							priority={false}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Podcast
