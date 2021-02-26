import React from 'react'
import { Home, Sidebar, Chat } from './components'
import { Header } from './components/Header'

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
