import { Container } from './styles'
import { EyeIcon, CartIcon } from '../icons'

export interface CardContent {
	img: string
	name: string
	price: number
}
interface CardProps {
	setModal: (newValue: CardContent) => void
}

export function Card({ setModal }: CardProps) {
	const cardContent: CardContent = {
		img:
			'https://img.terabyteshop.com.br/produto/p/processador-intel-core-i7-10700-290ghz-470ghz-turbo-10-geracao-8-cores-16-thread-lga-1200-bx8070110700_95187.jpg',
		name: 'Processador Intel Core i7 10700',
		price: 2450.6,
	}

	function setModalContent() {
		setModal(cardContent)
	}

	return (
		<Container className='card' onClick={setModalContent}>
			<figure className='img-wrapper'>
				<img src={cardContent.img} alt='Ibagens' />
			</figure>
			<div className='text'>
				<h4>{cardContent.name}</h4>
				<h3>R${cardContent.price}</h3>
			</div>

			<div className='button-container'>
				<button>
					<CartIcon />
				</button>
				<button className='eye-button'>
					<EyeIcon />
				</button>
			</div>
		</Container>
	)
}
