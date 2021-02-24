import { Container } from './style'
import Account from '../Account'
import { SearchIcon } from '../icons'
export function Header() {
	return (
		<Container>
			<div className='input-container'>
				<label htmlFor='search'>
					<SearchIcon className='search-icon' />
				</label>
				<input className='search-bar' name='search' id='search' />
			</div>
			<button className='ball'> </button>
			<button className='ball'> </button>
			<Account />
		</Container>
	)
}
