import { Container, EyeIcon } from './styles'

export function Card() {
	return (
		<Container>
			<img
				src='https://img.terabyteshop.com.br/produto/p/processador-intel-core-i7-10700-290ghz-470ghz-turbo-10-geracao-8-cores-16-thread-lga-1200-bx8070110700_95187.jpg'
				alt='Ibagens'
			/>

			<div className='text'>
				<h4>Processador Intel Core i7 10700</h4>
				<h3>R$ 2.439,00</h3>
			</div>

			<div className='button-container'>
				<button>Comprar</button>
				<button className='eye-button'>
					<EyeIcon />
				</button>
			</div>
		</Container>
	)
}
