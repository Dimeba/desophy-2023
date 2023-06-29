import { NavContext } from '@/context/NavContext'
import { useContext } from 'react'

export const useNavContext = () => {
	const context = useContext(NavContext)

	if (!context) {
		throw Error('useNavContext must be inside NavContextProvider')
	}

	return context
}
