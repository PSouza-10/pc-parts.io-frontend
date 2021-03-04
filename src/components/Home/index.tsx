import { useState } from 'react'
import { Card, CardContent } from '../Card'
import { Container } from './styles'

import DetailsProductModal from '../DetailsProductModal'

export function Home() {
	const [modalProps, setModalProps] = useState<CardContent | null>(null)
	const [modalIsOpen, setOpen] = useState(false)

	const nCards = new Array(32).fill(0)
	const toggleModal = () => [setOpen(!modalIsOpen)]
	return (
		<Container>
			<div className='container'>
				{nCards.map((item) => (
					<Card
						setModal={(val) => {
							setModalProps(val)
							toggleModal()
						}}
					/>
				))}
			</div>
			<DetailsProductModal
				modalProps={modalProps}
				isOpen={modalIsOpen}
				setOpen={toggleModal}
			/>
		</Container>
	)
}
