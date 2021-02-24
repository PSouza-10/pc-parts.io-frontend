import React, { useState, useEffect, useContext } from 'react'
import { Home, Sidebar, Chat } from './components'
import { Header } from './components/Header'
import { AuthContext } from './Context/Auth'
function App() {
	const { handleNewToken } = useContext(AuthContext)

	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const token = params.get('token')

		if (token) {
			handleNewToken(token)
		}
	}, [])

	return (
		<div className='App'>
			<Sidebar />
			<main className='right'>
				<Header />
				<Home />
			</main>
			<Chat />
		</div>
	)
}

export default App
