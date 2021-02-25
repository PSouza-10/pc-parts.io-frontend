import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;

	li {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		margin: 5px;
		padding: 2px;
		transition: background-color 0.2s;

		cursor: pointer;

		&:hover {
			background-color: var(--white-fade);
		}
	}

	svg {
		flex-shrink: 0;
		height: 1.2rem;
		width: 1.2rem;
		fill: var(--icon);
		margin-right: 10px;
	}
`
