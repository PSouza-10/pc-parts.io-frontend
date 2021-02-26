import { createContext, useState, useEffect } from 'react'
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
	async function handleNewToken() {
		const token = window.location.search.split('token=')[1]

		if (token) {
			localStorage.setItem('token', token)
			const { data: user } = await axios.get(
				'http://localhost:5000/account',
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
	}
	useEffect(() => {
		handleNewToken()
	}, [])
	return (
		<AuthContext.Provider
			value={{
				...authState,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthProvider
