import styled from 'styled-components'

export const SearchContainer = styled.div`
	height: 2.6rem;

	transition: max-width 0.3s ease;
	max-width: 0;
	background-color: var(--base-color);
	left: 20px;
	position: absolute;
	width: 65%;
	z-index: 1;
	@media (max-width: ${({ theme: { sm } }) => sm}) {
		width: 100%;
	}
	.inner {
		display: flex;
		align-items: center;
		border-radius: 1.2em;
		transition: all 0.3s ease;
		background-color: var(--box-color);

		.close-icon {
			display: none;
			height: 22px;
			width: 22px;
			margin-right: 6px;
			cursor: pointer;
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
			border: none;
			background: inherit;
			font-size: 1rem;
			transition: all 0.3s ease;
			max-width: 0;
			width: 100%;
			&:focus {
				max-width: 100%;
				padding: 0.3rem 1rem 0.3rem 0.3rem;
			}
		}
	}
	&:focus-within {
		max-width: calc(100% - 40px);
		.inner {
			background-color: var(--box-color);
			border: 1px solid #576db8;
		}
		.close-icon {
			display: initial;
		}
	}
`
