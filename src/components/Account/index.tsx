import { Container, LoginContainer } from './style'
import { useState, useContext } from 'react'
import { Modal } from '../Modal'
import { Google, UserIcon } from '../icons'
import { AuthContext } from '../../Context/Auth'
import { List } from '../List'
export default function Account() {
	const [openAccountModal, setOpenAccountModal] = useState(false)
	const { user } = useContext(AuthContext)
	const handleLoginModal = () => setOpenAccountModal(!openAccountModal)
	return (
		<>
			<Container onClick={handleLoginModal}>
				{user?._id ? (
					<img src={user.picture} alt={user.name} />
				) : (
					<UserIcon />
				)}
			</Container>
			<Modal
				toggleVisibility={handleLoginModal}
				visible={openAccountModal}
				header={{
					title: 'Entrar',
				}}
				transition='bottom'
				size={{
					right: '30vw',
					left: '30vw',
				}}
			>
				<LoginContainer>
					<section className='google-icon'>
						<Google />
					</section>
					<a
						href='http://localhost:5000/account/google'
						target='_blank'
						className='google-login'
					>
						{' '}
						Entrar com o google
					</a>
				</LoginContainer>
				<List />
			</Modal>
		</>
	)
}
