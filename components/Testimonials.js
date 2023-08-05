// styles
import styles from '@/styles/Testimonials.module.scss'

// components
import Image from 'next/image'

const Testimonials = ({
	testimonialName,
	testimonialTitle,
	testimonialCompany,
	testimonialQuote,
	testimonialPhoto,
	testimonialLogo
}) => {
	return (
		<>
			<section id='testimonials' className={styles.testimonials}>
				<div className={styles.title}>
					<div>
						<p>
							Our clients love their
							<br />
							remote support team
						</p>
					</div>
				</div>

				<div className={styles.testimonial}>
					<div className={styles.TestimonialCard}>
						<div className={styles.header}>
							<div className={styles.photo}>
								<Image
									src={'https:' + testimonialPhoto.fields.file.url}
									fill
									sizes='(max-width: 768px) 100vw, 768px'
									alt={`Photo of service`}
									priority={false}
								/>
							</div>
							<div>
								<p>{testimonialName}</p>
								<p style={{ fontSize: '1rem', lineHeight: '1.4rem' }}>
									{testimonialTitle}
								</p>
								<p style={{ fontSize: '1rem', lineHeight: '1.4rem' }}>
									{testimonialCompany}
								</p>
							</div>
						</div>
						<p>“{testimonialQuote}”</p>
						<div className={styles.logo}>
							<Image
								src={'https:' + testimonialLogo.fields.file.url}
								fill
								sizes='(max-width: 768px) 100vw, 768px'
								style={{ objectFit: 'contain' }}
								alt={`Photo of service`}
								priority={false}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Testimonials
