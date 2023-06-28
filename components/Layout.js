import { Heebo } from 'next/font/google'

const heebo = Heebo({ subsets: ['latin'] })

// Components
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<main className={heebo.className}>
			<Nav />
			{children}
			<Footer />
		</main>
	)
}

export default Layout
