import styled from 'styled-components'

export const InputContainer = styled.div`
	position: relative;
	height: 2.5rem;
	width: 80%;
	margin: 0 10%;
	--white-fade: #fff5;
	.icon-wrapper {
		svg {
			fill: var(--white-fade);
			height: 1em;
			width: 1em;
		}
	}

	label {
		color: var(--white-fade);
		position: absolute;
		background-color: var(--base-color);
		font-size: 1.2em;
		left: 0.5em;
		top: 0.2em;
		pointer-events: none;
		transition: all 0.2s ease;
		padding: 0.1em 0.2em;
	}
	input {
		background-color: transparent;
		border: none;
		caret-color: var(--action-blue);
		width: 100%;
		height: 100%;
		font-size: 1.2em;
		padding: 0.4em 0.5em;
		position: absolute;
		border: 1px solid var(--white-fade);
		border-radius: 0.4em;
		transition: all 0.2s ease;
	}
	input::placeholder {
		color: var(--white-fade);
	}
	input:focus,
	input:not([value='']) {
		border-color: var(--action-blue);
		color: white;
	}
	input:focus + label,
	input:not([value='']) + label {
		top: -1em;
		font-size: 1em;

		color: var(--action-blue);
	}
`
