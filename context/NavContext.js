import { createContext, useState } from 'react'
export const NavContext = createContext()

export const NavContextProvider = ({ children }) => {
	const [navigation, setNavigation] = useState()
	const [servicesNav, setServicesNav] = useState()
	const [showPodcast, setShowPodcast] = useState()
	const [showShop, setShowShop] = useState()

	return (
		<NavContext.Provider
			value={{
				navigation,
				setNavigation,
				servicesNav,
				setServicesNav,
				showPodcast,
				setShowPodcast,
				showShop,
				setShowShop
			}}
		>
			{children}
		</NavContext.Provider>
	)
}
