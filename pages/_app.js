import '@/styles/globals.scss'

// components
import Layout from '@/components/Layout'

// context
import { NavContextProvider } from '@/context/NavContext'

export default function App({ Component, pageProps }) {
	return (
		<NavContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</NavContextProvider>
	)
}
