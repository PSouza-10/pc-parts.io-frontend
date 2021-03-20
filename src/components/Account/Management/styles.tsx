import styled from 'styled-components'
import { Logout } from '../../icons'

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;

	.optionList {
		font-size: 0.9rem;
	}

	.options {
	}
`

export const ConfigOptions = styled.section`
	display: flex;
	padding: 2rem;
	flex: 1;
	flex-direction: column;
	.form-wrapper {
		flex: 1;
		h2 {
			margin-top: 0.6rem;
		}
		.input-wrapper {
			margin: 0 1rem;
			margin-top: 1rem;
		}
		.dropdown-wrapper {
			margin: 0;
		}
	}

	.sales {
		span {
			display: flex;
			text-align: center;
			justify-content: space-between;
		}
	}

	.save {
		display: flex;
		padding: 1rem;
		flex-basis: 15%;
		.save-button {
			padding: 0 0.5em;
			font-size: 1.2em;

			border: 2px solid var(--action-blue);
			color: var(--action-blue);
			margin-left: auto;
			&:hover {
				background-color: var(--action-blue);
				color: white;
			}
			transition: all 0.3s ease;
		}
	}
`

export const LogoutIcon = styled(Logout)`
	fill: #c44;
`
