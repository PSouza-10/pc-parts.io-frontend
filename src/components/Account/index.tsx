import { Container } from './style'
import { useState } from 'react'
import { Modal } from '../Modal'
import { AccountForm } from '../AccountForm'
export default function Account() {
	const [openAccountModal, setOpenAccountModal] = useState(false)

	const handleLoginModal = () => setOpenAccountModal(!openAccountModal)
	return (
		<>
			<Container onClick={handleLoginModal}> </Container>
			<Modal
				toggleVisibility={handleLoginModal}
				visible={openAccountModal}
				header={{
					title: 'Entrar',
				}}
				transition='bottom'
			>
				<AccountForm />
			</Modal>
		</>
	)
}
