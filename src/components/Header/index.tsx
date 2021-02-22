import { Container } from './style'
import Account from '../Account'

export function Header() {
	return (
		<Container>
			<input className='search-bar' />
			<button className='ball'> </button>
			<button className='ball'> </button>
			<Account />
		</Container>
	)
}
