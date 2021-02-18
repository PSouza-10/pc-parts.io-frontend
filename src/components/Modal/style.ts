import styled from "styled-components"

export const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  background-color: #00000030;

  z-index: 5;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};

  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

export const ModalContainer = styled.div<{ visible: boolean }>`
  position: absolute;
  background-color: var(--navBar-color);
  color: var(--font-color);
  border-radius: 1rem;

  z-index: 10;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};

  transition: all 0.2s ease;

  top: 28vh;
  bottom: 28vh;
  right: 40vw;
  left: 40vw;

  display: flex;
  flex-direction: column;

  span {
    font-weight: 300;
    font-size: 14px;
  }
`
