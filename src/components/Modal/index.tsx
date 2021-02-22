import { Overlay, ModalContainer, IModalSize } from './style'
const defaultSize = {
	top: '5vh',
	bottom: '5vh',
	right: '5vw',
	left: '5vw',
}
interface ModalProps {
	visible: boolean
	handleOpenModal: () => any
	size: IModalSize
}

export const Modal: React.FC<ModalProps> = ({
	visible,
	handleOpenModal,
	children,
	size = defaultSize,
}) => {
	return (
		<>
			<Overlay visible={visible} onClick={handleOpenModal} />
			<ModalContainer visible={visible} size={size}>
				{children}
			</ModalContainer>
		</>
	)
}
