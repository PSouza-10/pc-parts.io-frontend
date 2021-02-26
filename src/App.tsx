import React, { useState, useEffect, useContext } from 'react'
import { Home, Sidebar, Chat, List } from './components'
import { Header } from './components/Header'
import { AuthContext } from './Context/Auth'

function App() {
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
