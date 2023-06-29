import { createContext, useState } from 'react'
export const NavContext = createContext()

export const NavContextProvider = ({ children }) => {
	const [navigation, setNavigation] = useState()
	const [servicesNav, setServicesNav] = useState()

	return (
		<NavContext.Provider
			value={{
				navigation,
				setNavigation,
				servicesNav,
				setServicesNav
			}}
		>
			{children}
		</NavContext.Provider>
	)
}
