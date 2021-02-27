import styled from 'styled-components'
import { Logout } from '../../icons'

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;

	.optionList {
		width: 20%;
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
