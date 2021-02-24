import styled from 'styled-components'

export const Container = styled.header`
	display: flex;
	justify-content: flex-end;
	padding-top: 1rem;
	align-items: center;

	//Seletor de filho direto
	& > .input-container {
		height: 2.3rem;

		display: flex;
		align-items: stretch;
		margin-right: 1rem;
		transition: all 0.3s ease;
		border-radius: 1.2em;

		label {
			cursor: pointer;
			padding: 3px 3px;

			.search-icon {
				height: 28px;
				width: 28px;
			}
		}
		.search-bar {
			width: 0;
			background: none;
			border: none;

			font-size: 1rem;
			transition: all 0.3s ease;

			&:focus {
				width: 50vw;
				padding: 0.3rem 1rem 0.3rem 0.3rem;
			}
		}

		&:focus-within {
			border: 1px solid #576db8;
			background-color: var(--box-color);
		}
	}
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
