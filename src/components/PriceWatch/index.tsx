import { Container, LoginContainer } from './styles'
import { useState } from 'react'
import { Modal } from '../Modal'
import { EyeIcon } from '../icons'
import { List } from '../List'
export function PriceWatch() {
	const [openCartModal, setOpenCartModal] = useState(false)
	const handleCartModal = () => setOpenCartModal(!openCartModal)
	return (
		<>
			<Container onClick={handleCartModal}>
				<EyeIcon />
			</Container>
			<Modal
				toggleVisibility={handleCartModal}
				visible={openCartModal}
				header={{
					title: 'Carrinho',
				}}
				transition='bottom'
				size={{
					right: '30vw',
					left: '30vw',
				}}
			>
				<LoginContainer>
					{/* <section className='google-icon'>
						<Google />
					</section>
					<a
						href='http://localhost:5000/account/google'
						target='_blank'
						className='google-login'
					>
						{' '}
						Entrar com o google
					</a> */}
				</LoginContainer>
				<List />
			</Modal>
		</>
	)
}
