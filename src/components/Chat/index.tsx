import { Container, Header } from './style'
import { ChatIcon } from '../icons'
import { useState } from 'react'
import { Modal } from '../Modal'
import Dropdown, { DropDownitems } from '../Dropdown'
export function Chat() {
	const [openChatModal, setOpenChatModal] = useState(false)

	const handleOpenChatModal = () => setOpenChatModal(!openChatModal)

	const [selectedItem, setSelectedItem] = useState(1)

	const problems: DropDownitems[] = [
		{
			itemId: 1,
			content: 'Selecione algum problema',
			selected: true,
		},
		{
			itemId: 2,
			content: 'Defeito',
			selected: false,
		},
		{
			itemId: 3,
			content: 'Produto não chegou como esperado',
			selected: false,
		},
		{
			itemId: 4,
			content: 'Produto atrasado',
			selected: false,
		},
		{
			itemId: 5,
			content: 'Outro...',
			selected: false,
		},
	]
	return (
		<>
			<Modal
				toggleVisibility={handleOpenChatModal}
				visible={openChatModal}
				header={{
					title: 'Suporte técnico',
				}}
				transition='bottom'
				size={{
					right: '25vw',
					left: '25vw',
					top: '10vh',
					bottom: '10vh',
				}}
			>
				<Header>
					<Dropdown
						selected={selectedItem}
						items={problems}
						layer={1}
						setSelected={(val) => setSelectedItem(val)}
					/>

					<textarea placeholder='Descreva o seu problema de forma detalhada...' />

					<div className='buttonContainer'>
						<button className='denyButton'>Cancelar</button>
						<button className='confirmButton'>Enviar</button>
					</div>
				</Header>
			</Modal>

			<Container onClick={handleOpenChatModal}>
				<ChatIcon />
			</Container>
		</>
	)
}
