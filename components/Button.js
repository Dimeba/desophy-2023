// styles
import styles from '@/styles/Button.module.scss'

const Button = props => {
	return (
		<button className={styles.button} type={props.type}>
			<div
				className={
					props.buttonWhite
						? styles.preButtonLineWhite
						: styles.preButtonLineColor
				}
			></div>
			<p
				className={
					props.buttonWhite ? styles.buttonTextWhite : styles.buttonTextColor
				}
			>
				{props.children}
			</p>

			<div className={styles.arrow}>
				<div
					className={
						props.buttonWhite ? styles.arrowHeadWhite : styles.arrowHeadColor
					}
				></div>
			</div>
		</button>
	)
}

export default Button
