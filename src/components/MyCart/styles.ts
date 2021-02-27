import styled, { css } from 'styled-components'

export const Container = styled.button`
	margin-right: 1rem;

	height: 2.6rem;
	width: 2.6rem;

	transition: background-color 0.2s;

	&:hover {
		background-color: #ffffff96;
	}
	svg {
		height: 100%;
		width: 100%;
	}
	img {
		border-radius: 50%;
	}
`

export const BodyContainer = styled.div`
	flex: 1;
	overflow-y: auto;
	padding: 0 25px;
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;

	.body-wrapper {
		width: 100%;
		height: 150px;

		padding: 5px 0;
		margin-bottom: 20px;

		border-bottom: 1px solid #fff;

		display: flex;

		> img {
			margin-right: 10px;
			border-radius: 10px;
		}

		.text-container {
			flex: 1;
			padding-right: 5px;
			display: flex;
			flex-direction: column;

			justify-content: space-between;

			> span {
				display: flex;
				justify-content: space-between;
				align-items: center;

				> h3 {
					font-size: 1.05rem;

					&::before {
						content: '->';
						color: var(--action-red);
						font-size: 1.7rem;
						margin-right: 5px;
					}
				}
			}

			> h4 {
				font-size: 1rem;

				span {
					color: var(--action-red);

					svg {
						color: var(--active-red);
					}
				}
			}

			svg {
				width: 1rem;
				height: 1rem;

				cursor: pointer;
				transition: fill 0.2s;

				&:hover {
					fill: var(--action-red);
				}
			}
		}
	}

	&::-webkit-scrollbar {
		background-color: transparent;
		width: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: var(--action-blue);
		border-radius: 0.3rem;
	}

	${({ theme: { xl, lg, md, sm } }) => css`
		@media (max-width: ${sm}) {
			.body-wrapper {
				> img {
					width: 100px;
					height: 100px;
				}
			}
		}
	`}
`

export const FooterContainer = styled.section`
	display: flex;
	height: 5.05rem;
	justify-content: space-between;
	align-items: flex-end;

	.buyButton,
	.removeButton {
		padding: 0.5rem;
		font-size: 1.2rem;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
		border: 2px solid var(--action-blue);
		color: var(--action-blue);
		margin: auto;

		cursor: pointer;

		&:hover {
			background-color: var(--action-blue);
			color: white;
		}
		transition: all 0.3s ease;
	}

	.removeButton {
		border: 2px solid var(--action-red);
		color: var(--action-red);

		&:hover {
			background-color: var(--action-red);
			color: white;
		}
	}
`
