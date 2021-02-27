import { useState } from 'react'
import { Container, BodyContainer, FooterContainer } from './styles'
import { Modal } from '../Modal'
import { CartIcon, TrashIcon } from '../icons'
import items from './items'
export function MyCart() {
	const [openCartModal, setOpenCartModal] = useState(false)
	const handleCartModal = () => setOpenCartModal(!openCartModal)

	const [cartItems, setCart] = useState(items)

	const deleteAll = () => {
		setCart([])
	}

	const deleteItem = (id: number) => {
		const filteredItems = cartItems.filter((item) => item.id !== id)
		setCart(filteredItems)
	}

	return (
		<>
			<Container onClick={handleCartModal}>
				<CartIcon />
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
				<BodyContainer>
					{cartItems.map(({ nome, image, quantidade, preço, id }) => (
						<div className='body-wrapper'>
							<img src={image} alt='Pinto' />

							<div className='text-container'>
								<h4>
									{nome} <br />
									Quantidade: {quantidade}
								</h4>
								<span>
									<h3>R$: {preço}</h3>
									<TrashIcon onClick={() => deleteItem(id)} />
								</span>
							</div>
						</div>
					))}
				</BodyContainer>

				<FooterContainer>
					<section className='icon'></section>
					<button className='buyButton'> Comprar</button>
					<button className='removeButton' onClick={deleteAll}>
						Remover tudo
					</button>
				</FooterContainer>
			</Modal>
		</>
	)
}
