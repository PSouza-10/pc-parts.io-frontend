import { Container } from './style'
import Account from '../Account'
import SearchBar from '../Searchbar'
export function Header() {
	return (
		<Container>
			<SearchBar />
			<button className='ball'> </button>
			<button className='ball'> </button>
			<Account />
		</Container>
	)
}
