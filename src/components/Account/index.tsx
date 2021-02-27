import { Container, LoginContainer } from './style'
import { useState, useContext } from 'react'
import { Modal } from '../Modal'
import Dropdown from '../Dropdown'
import { Google, UserIcon } from '../icons'
import { AuthContext } from '../../Context/Auth'
import { List } from '../List'
import AccountManagement from './Management'
export default function Account() {
	const [openAccountModal, setOpenAccountModal] = useState(false)
	const { user, isAuthenticated } = useContext(AuthContext)
	const handleLoginModal = () => setOpenAccountModal(!openAccountModal)

	const modalSize = isAuthenticated
		? {}
		: {
				right: '30vw',
				left: '30vw',
		  }

	return (
		<>
			<Container onClick={handleLoginModal}>
				{isAuthenticated ? (
					<img src={user.picture} alt={user.name} />
				) : (
					<UserIcon />
				)}
			</Container>
			<Modal
				toggleVisibility={handleLoginModal}
				visible={openAccountModal}
				header={{
					title: isAuthenticated
						? 'Gerenciamento de Conta'
						: 'Entrar',
				}}
				transition='bottom'
				size={modalSize}
			>
				<LoginContainer>
					{isAuthenticated ? (
						<AccountManagement />
					) : (
						<>
							<section className='google-icon'>
								<Google />
							</section>
							<a
								href='https://pc-parts-server.herokuapp.com/account/google'
								target='_blank'
								className='google-login'
							>
								{' '}
								Entrar com o google
							</a>
						</>
					)}
				</LoginContainer>
			</Modal>
		</>
	)
}
