import styled from "styled-components"

export const InputContainer = styled.span`
  border-radius: 12%;
  border: 1px solid var(--white-fade);
  position: relative;
  --input-color: var(--white-fade);

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
  }
  input {
    color: var(--white-fade);
  }
  input::placeholder {
    color: var(--white-fade);
  }

  &:hover {
    --input-color: var(--primary);
  }
`
