import { Container, BodyContainer, FooterContainer } from './styles'
import { useState } from 'react'
import { Modal } from '../Modal'
import items from './items'
import { EyeIcon, TrashIcon, ArrowUpIcon } from '../icons'

export function PriceWatch() {
	const [openCartModal, setOpenCartModal] = useState(false)
	const handleCartModal = () => setOpenCartModal(!openCartModal)

	const [priceWatchItems, setPriceWatchItems] = useState(items)

	const deleteAll = () => {
		setPriceWatchItems([])
	}

	const deleteItem = (id: number) => {
		const filteredItems = priceWatchItems.filter((item) => item.id !== id)
		setPriceWatchItems(filteredItems)
	}

	return (
		<>
			<Container onClick={handleCartModal}>
				<EyeIcon />
			</Container>
			<Modal
				toggleVisibility={handleCartModal}
				visible={openCartModal}
				header={{
					title: 'Estatísticas',
				}}
				transition='bottom'
				size={{
					right: '30vw',
					left: '30vw',
				}}
			>
				<BodyContainer>
					{priceWatchItems.map(
						({
							nome,
							image,
							quantidade,
							preço,
							porcentagem,
							id,
						}) => (
							<div className='body-wrapper'>
								<img src={image} alt='Pinto' />

								<div className='text-container'>
									<h4>
										{nome}
										<br />
										Quantidade: {quantidade}
										<br />
										<span>
											<ArrowUpIcon />
											R$: {porcentagem}
										</span>
									</h4>
									<span>
										<h3>R$: {preço}</h3>

										<TrashIcon
											onClick={() => deleteItem(id)}
										/>
									</span>
								</div>
							</div>
						)
					)}
				</BodyContainer>

				<FooterContainer>
					<section className='icon'></section>
					<button className='removeButton' onClick={deleteAll}>
						Remover tudo
					</button>
				</FooterContainer>
			</Modal>
		</>
	)
}
