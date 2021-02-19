import { Container, LeftSide } from './styles'

export function Card() {
	return (
		<Container>
			<LeftSide>
				<h1>Nome: A o M e o D</h1>
				<h2>Tipo: Processador</h2>
			</LeftSide>
			<img
				src='https://img.terabyteshop.com.br/produto/p/processador-amd-ryzen-3-3200g-36ghz-40ghz-turbo-4-core-4-thread-cooler-wraith-stealth-am4_76128.jpg'
				alt='Ibagens'
			/>
		</Container>
	)
}
