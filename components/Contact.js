// styles
import styles from '@/styles/Contact.module.scss'

// components
import ContactForm from './ContactForm'

const Contact = ({ contactText }) => {
	return (
		<section id='contact' className={`${styles.contact} grid-container`}>
			<div className={styles.contactText}>
				<h2>Get In Touch</h2>
				<p>{contactText}</p>
			</div>
			<ContactForm />
		</section>
	)
}

export default Contact
