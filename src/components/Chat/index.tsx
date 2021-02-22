import { Container } from './style'
import { ChatIcon } from '../icons'
import { useState } from 'react'
import { Modal } from '../Modal'
export function Chat() {
	const [openModal, setOpenModal] = useState(false)

	const handleOpenModal = () => setOpenModal(!openModal)

	return (
		<>
			<Modal toggleVisibility={handleOpenModal} visible={openModal} />
			<Container>
				<ChatIcon />
			</Container>
		</>
	)
}
