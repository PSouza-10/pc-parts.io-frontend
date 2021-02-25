import { Container } from './style'
import Account from '../Account'
import SearchBar from '../Searchbar'
import { PriceWatch, MyCart } from '../index'
export function Header() {
	return (
		<Container>
			<SearchBar />
			{/* <button className='ball'> </button>
			<button className='ball'> </button> */}
			<PriceWatch />
			<MyCart />
			<Account />
		</Container>
	)
}
