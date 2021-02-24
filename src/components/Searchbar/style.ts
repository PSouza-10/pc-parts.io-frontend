import styled from 'styled-components'

export const SearchContainer = styled.div`
	height: 2.3rem;

	transition: all 0.3s ease;
	background-color: var(--base-color);
	left: 20px;
	position: absolute;
	max-width: 0;
	z-index: 1;
	width: 100%;
	.inner {
		display: flex;
		align-items: center;
		border-radius: 1.2em;
		.close-icon {
			display: none;
			height: 22px;
			width: 22px;
			margin-right: 6px;
		}
		label {
			cursor: pointer;
			padding: 3px 6px;
			display: flex;
			align-items: center;
			.search-icon {
				height: 28px;
				width: 28px;
			}
		}
		.search-bar {
			background: none;
			border: none;

			font-size: 1rem;
			transition: all 0.3s ease;
			flex: 1;
			&:focus {
				padding: 0.3rem 1rem 0.3rem 0.3rem;
			}
		}
	}
	&:focus-within {
		max-width: calc(100vw - 40px);
		.inner {
			background-color: var(--box-color);
			border: 1px solid #576db8;
		}
		.close-icon {
			display: initial;
		}
	}
`
