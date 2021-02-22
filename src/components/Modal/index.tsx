import { Overlay, ModalContainer, IModalSize } from './style'
import { FlattenSimpleInterpolation } from 'styled-components'
import { useEffect } from 'react'
import { MdClose } from 'react-icons/md'
const defaultSize = {
	top: '5vh',
	bottom: '5vh',
	right: '5vw',
	left: '5vw',
}

interface ModalProps {
	visible: boolean
	toggleVisibility: () => any
	size?: IModalSize
	useOverlay?: boolean
	lockBody?: boolean
	header?: {
		title: string
		CSS?: FlattenSimpleInterpolation
	}
	transition?: string
}

export const Modal: React.FC<ModalProps> = ({
	visible,
	toggleVisibility,
	children,
	size = defaultSize,
	useOverlay = true,
	lockBody = true,
	header = {},
	transition = '',
}) => {
	useEffect(() => {
		if (lockBody) {
			document.body.style.overflowY = visible ? 'hidden' : 'initial'
		}
	}, [visible])

	return (
		<>
			{useOverlay && (
				<Overlay visible={visible} onClick={toggleVisibility} />
			)}
			<ModalContainer
				visible={visible}
				size={size}
				headerCSS={header.CSS}
				transition={transition}
			>
				{header && (
					<header className='modal-header'>
						<h1 className='modal-header-title'>{header.title}</h1>
						<button
							className='modal-header-close'
							onClick={toggleVisibility}
						>
							<MdClose />
						</button>
					</header>
				)}
				{children}
			</ModalContainer>
		</>
	)
}
