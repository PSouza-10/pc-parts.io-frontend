import styled from "styled-components"

export const Container = styled.div<{ open: boolean }>`
  background-color: var(--base-color);
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ open }) => (open ? "100vh" : "60px")};
  z-index: 1;
  border-top: 2px solid var(--green);

  transition: all 0.3s ease;

  .footer-bar {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    h2 {
      margin-left: auto;
    }
    .open-selected {
      padding: 5px 5px;
      height: 50px;
      cursor: pointer;
      background-color: transparent;
      svg {
        height: 40px;
        width: 40px;

        transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
        transition: all 0.3s ease;
      }
      &:hover {
        background-color: var(--white-fade);
      }
    }
  }
`
