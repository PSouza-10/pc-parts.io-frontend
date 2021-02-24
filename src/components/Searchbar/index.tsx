import { SearchContainer } from './style'
import { SearchIcon, Close } from '../icons'
import { useRef } from 'react'
const SearchBar: React.FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null)
	const unFocus = () => {
		if (inputRef.current) {
			inputRef.current.blur()
		}
	}

	return (
		<SearchContainer>
			<div className='inner'>
				<label htmlFor='search'>
					<SearchIcon className='search-icon' />
				</label>
				<input
					className='search-bar'
					ref={inputRef}
					name='search'
					id='search'
				/>
				<Close className='close-icon' onClick={() => unFocus()} />
			</div>
		</SearchContainer>
	)
}
export default SearchBar
