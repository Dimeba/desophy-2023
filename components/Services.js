// styles
import styles from '@/styles/Services.module.scss'

// components
import ServiceCard from './ServiceCard'

const Services = ({ servicesText, servicesTitle, services }) => {
	return (
		<>
			<section id='services' className={styles.services}>
				{services.map(service => (
					<ServiceCard
						key={service.sys.id}
						title={service.fields.title}
						description={service.fields.description}
						image={service.fields.image}
					/>
				))}
			</section>

			<section className={`${styles.servicesDescription} grid-container`}>
				{/* <h2>{servicesTitle}</h2> */}
				<div className={styles.servicesText}>
					<p>{servicesText}</p>
				</div>
			</section>
		</>
	)
}

export default Services
