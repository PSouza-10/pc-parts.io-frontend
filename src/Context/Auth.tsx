import { createContext, useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const initialState = {
	token: '',
	user: {
		picture: '',
		name: '',
		_id: '',
		googleId: '',
	},
	isAuthenticated: false,
}

export const AuthContext = createContext<{
	[x: string]: any
}>({})

const AuthProvider: React.FC = ({ children }) => {
	const [authState, setAuth] = useState(initialState)
	const handleNewToken = useCallback(async () => {
		const token = window.location.search.split('token=')[1]

		if (token) {
			localStorage.setItem('token', token)
			const { data: user } = await axios.get(
				'https://pc-parts-server.herokuapp.com/account',
				{
					headers: {
						authorization: token,
					},
				}
			)
			console.log(user)
			if (user) {
				setAuth({
					...authState,
					token: token,
					user: user,
					isAuthenticated: true,
				})
			}
		}
	}, [])

	useEffect(() => {
		handleNewToken()
	}, [handleNewToken])

	async function logout() {
		localStorage.removeItem('token')
		setAuth(initialState)
	}
	return (
		<AuthContext.Provider
			value={{
				...authState,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthProvider
