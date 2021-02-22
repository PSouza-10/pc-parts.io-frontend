import { Overlay, ModalContainer } from './style'

interface ModalProps {
	visible: boolean
	handleOpenModal: () => any
}

export const Modal: React.FC<ModalProps> = ({
	visible,
	handleOpenModal,
	children,
}) => {
	return (
		<>
			<Overlay visible={visible} onClick={handleOpenModal} />
			<ModalContainer visible={visible}>{children}</ModalContainer>
		</>
	)
}
