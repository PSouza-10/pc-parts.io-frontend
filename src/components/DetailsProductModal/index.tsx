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
						<img src={modalProps.img} alt='Intel' />
						<h2>R${modalProps.price}</h2>
						<div className='DescriptionContainer'>
							<h3>Descrição do produto: </h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book. It has survived not only five centuries,
								but also the leap into electronic typesetting,
								remaining essentially unchanged. It was
								popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages,
								and more recently with desktop publishing
								software like Aldus PageMaker including versions
								of Lorem Ipsum.
							</p>
						</div>

						<div className='ProfileContainer'>
							<img
								src='https://avatars.githubusercontent.com/u/56007750?s=460&u=a33d23af691a85e76316046cbfaedde9e8b90067&v=4'
								alt='Profile'
								className='ProfileImage'
							/>
							<p className='username'>Gabriel Takuya Yamamoto</p>
						</div>
					</LeftSide>
					<RightSide>
						<div className='AboutContainer'>
							<h3>Informações sobre o produto: </h3>
							<p>ClocK: 5000ghz</p>
							<p>Threads: 400</p>
							<p>Cores: 200 </p>
						</div>
					</RightSide>
				</Container>
			</Modal>
		)
	)
}
