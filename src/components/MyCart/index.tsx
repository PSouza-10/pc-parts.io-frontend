import { Container, BodyContainer, FooterContainer } from './styles'
import { useState } from 'react'
import { Modal } from '../Modal'
import { CartIcon, TrashIcon } from '../icons'
export function MyCart() {
	const [openCartModal, setOpenCartModal] = useState(false)
	const handleCartModal = () => setOpenCartModal(!openCartModal)

	const placeholderItems = [
		{
			nome: 'Processador pika quad quadro AMD',
			image:
				'https://img.terabyteshop.com.br/produto/p/processador-amd-ryzen-3-3200g-36ghz-40ghz-turbo-4-core-4-thread-cooler-wraith-stealth-am4_76128.jpg',
			quantidade: 500,
			preço: 1000,
		},
		{
			nome: 'Processador pika Eight Three Intel',
			image:
				'https://img.terabyteshop.com.br/produto/p/processador-amd-ryzen-5-3600-36ghz-42ghz-turbo-6-core-12-thread-cooler-wraith-stealth-am4_76288.jpg',
			quantidade: 500,
			preço: 1000,
		},
		{
			nome: 'Memória super memoravel',
			image:
				'https://img.terabyteshop.com.br/produto/p/processador-amd-ryzen-7-5800x-38ghz-47ghz-turbo-8-cores-16-threads-am4-sem-cooler_108383.jpg',
			quantidade: 1500,
			preço: 1000,
		},
		{
			nome: 'Processador pika quad quadro AMD',
			image:
				'https://img.terabyteshop.com.br/produto/p/placa-mae-asus-prime-a320m-k-ddr4-am4_42557.png',
			quantidade: 500,
			preço: 1000,
		},
		{
			nome: 'Processador pika quad quadro AMD',
			image:
				'https://img.terabyteshop.com.br/produto/p/placa-mae-asrock-x570-phantom-gaming-x-wifi-chipset-x570-amd-am4-atx-ddr4-90-mxban0-a0uayz_87312.jpg',
			quantidade: 500,
			preço: 1000,
		},
		{
			nome: 'Processador pika quad quadro AMD',
			image:
				'https://img.terabyteshop.com.br/produto/p/processador-intel-core-i9-10900ka-370-ghz-530ghz-turbo-10-geracao-10-cores-20-threads-cache-20mb-lga1200-bx8070110900ka_105056.png',
			quantidade: 500,
			preço: 1000,
		},
		{
			nome: 'Processador pika Eight Three Intel',
			image:
				'https://img.terabyteshop.com.br/produto/p/placa-mae-asrock-x570-phantom-gaming-x-wifi-chipset-x570-amd-am4-atx-ddr4-90-mxban0-a0uayz_87312.jpg',
			quantidade: 500,
			preço: 1000,
		},
		{
			nome: 'Memória super memoravel',
			image:
				'https://img.terabyteshop.com.br/produto/p/placa-mae-asrock-x570-phantom-gaming-x-wifi-chipset-x570-amd-am4-atx-ddr4-90-mxban0-a0uayz_87312.jpg',
			quantidade: 1500,
			preço: 1000,
		},
		{
			nome: 'Processador pika quad quadro AMD',
			image:
				'https://img.terabyteshop.com.br/produto/p/processador-intel-core-i3-10100-360ghz-430ghz-turbo-10-geracao-4-cores-8-threads-lga-1200-s-video-bx8070110100f_111481.png',
			quantidade: 500,
			preço: 1000,
		},
		{
			nome: 'Processador pika quad quadro AMD',
			image:
				'https://img.terabyteshop.com.br/produto/p/processador-intel-core-i3-10100-360ghz-430ghz-turbo-10-geracao-4-cores-8-threads-lga-1200-s-video-bx8070110100f_111481.png',
			quantidade: 500,
			preço: 1000,
		},
	]
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
					{placeholderItems.map(
						({ nome, image, quantidade, preço }) => (
							<div className='body-wrapper'>
								<img src={image} alt='Pinto' />

								<div className='text-container'>
									<h4>
										{nome} <br />
										Quantidade: {quantidade}
									</h4>
									<span>
										<h3>R$: {preço}</h3>
										<TrashIcon />
									</span>
								</div>
							</div>
						)
					)}
				</BodyContainer>

				<FooterContainer>
					<section className='icon'></section>
					<a className='buyButton'> Comprar</a>
					<a className='removeButton'> Remover tudo</a>
				</FooterContainer>
			</Modal>
		</>
	)
}
