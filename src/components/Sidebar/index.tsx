import { Container, Item, Overlay, Toggle } from "./style";
import { items } from "./items";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
export function Sidebar() {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
    document.body.style.overflowY = !isOpen ? "hidden" : "initial";
  };
  return (
    <>
      <Overlay visible={isOpen} onClick={toggle} />
      <Toggle onClick={toggle}>
        <MdMenu className='toggle-icon' />
      </Toggle>
      <Container open={isOpen}>
        {items.map(({ texto, tipo, image, accentColor }) => (
          <Item accentColor={accentColor}>
            <span className='icon-wrapper'>{image}</span>
            <h2 className='text'>{texto}</h2>
          </Item>
        ))}
      </Container>
    </>
  );
}
