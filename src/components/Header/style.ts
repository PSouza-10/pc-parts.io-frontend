import styled from 'styled-components'

export const Container = styled.header`
	display: flex;
	justify-content: flex-end;
	padding: 1rem 20px;
	align-items: center;
	position: relative;

	.ball {
		margin-right: 1rem;
		border-radius: 50%;
		height: 36px;
		width: 36px;
		background-color: #fff;
		transition: background-color 0.2s;

		&:hover {
			background-color: #ffffff96;
		}
	}
`
