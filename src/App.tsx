import React, { useState } from 'react'
import { BsFillChatFill } from 'react-icons/bs'
import { Sidebar, Card } from './components'
import { Modal } from './components/Modal'

function App() {
	const [openModal, setOpenModal] = useState(false)

	const handleOpenModal = () => setOpenModal(!openModal)

	return (
		<div className='App'>
			<Sidebar />

			<div className='container'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>

			<div onClick={handleOpenModal} className='chat'>
				<button>
					<BsFillChatFill size={40} fill='#6E83CF' />
				</button>
			</div>

			<Modal handleOpenModal={handleOpenModal} visible={openModal} />
		</div>
	)
}

export default App
