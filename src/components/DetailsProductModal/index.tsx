import { useState } from 'react'
import { Modal } from '../Modal'
import { Container, LeftSide, RightSide } from './styles'
import { CardContent } from '../Card'

interface DetailsProductModalProps {
	modalProps: CardContent | null
	isOpen: boolean
	setOpen: () => void
}

export default function DetailsProductModal({
	modalProps,
	isOpen,
	setOpen,
}: DetailsProductModalProps) {
	const [openProductModal, setOpenProductModal] = useState(false)

	const handleProductModal = () => setOpenProductModal(!openProductModal)

	return (
		modalProps && (
			<Modal
				toggleVisibility={setOpen}
				header={{ title: modalProps.name }}
				visible={isOpen}
				transition='top'
			>
				<Container>
					<LeftSide>
						<div className='UserWrapper'>
							<img src={modalProps.img} alt='Intel' />
							<div className='ProfileContainer'>
								<span>
									<img
										src='https://avatars.githubusercontent.com/u/56007750?s=460&u=a33d23af691a85e76316046cbfaedde9e8b90067&v=4'
										alt='Profile'
										className='ProfileImage'
									/>
									<h1>Gabriel Takuya Yamamoto </h1>
								</span>
								<h2>Takuya.PiquinhaDementa@gmail.com</h2>
								<h3>Vendedor platinium 10+</h3>
							</div>
						</div>

						<div className='Description'>
							<h3>Descrição do produto: </h3>
							<p>
								Vendo processador dos 500 mil ano, usado por
								apenas 1000 milênios, ler o anúncio inteiro!!!
							</p>
						</div>
						{/* <h2>R${modalProps.price}</h2> */}
					</LeftSide>

					<RightSide>
						<div className='AboutContainer'>
							<h3>Informações sobre o produto: </h3>
							<p>Threads: 400</p>
							<p>Cores: 200 </p>
							<p>Clock base: 5000ghz</p>
							<p>Clock máximo: 5000000ghz</p>
							<p>Versão PCI Express: PCIe 4.0</p>
							<p>TDP padrão: 65w</p>
							<p>Memória: Velocidade máxima: 65000mhz</p>
							<p>Tipo: DDR4</p>
							<p>Status: novo</p>
							<h2>
								LEIA O ANUNCIO INTEIRO <br />
								Derrubei o processador no chão, e por causa
								disso ele acabou entortando cerca de 12 pinos no
								canto esquerdo inferior, entretanto, o
								processador está em um perfeito estado
							</h2>
						</div>

						<h2>R${modalProps.price}</h2>
					</RightSide>
				</Container>
			</Modal>
		)
	)
}
