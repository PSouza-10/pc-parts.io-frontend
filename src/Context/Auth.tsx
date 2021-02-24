import { createContext, useState } from 'react'
import axios from 'axios'

const initialState = {
	token: '',
	user: {
		picture: '',
		name: '',
		_id: '',
		googleId: '',
	},
}
interface Context {
	handleNewToken: (token: string) => any
	[x: string]: any
}
export const AuthContext = createContext<Context>({
	handleNewToken: () => '',
})

const AuthProvider: React.FC = ({ children }) => {
	const [authState, setAuth] = useState(initialState)
	const handleNewToken = async (token: string) => {
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
			})
		}
	}

	return (
		<AuthContext.Provider
			value={{
				handleNewToken,
				...authState,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthProvider
