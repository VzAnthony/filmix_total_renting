import ReactModal from "react-modal"
import type { InterfaceModalProps } from "./Modal.type"
import styles from "./Modal.styles.module.css"

const Modal = ({
    isOpen,
    onClose,
    children
}: InterfaceModalProps) => {
    return (
        <ReactModal  
          shouldCloseOnEsc 
          isOpen={isOpen} 
          onRequestClose={onClose} 
          className={styles.modal_content} 
          overlayClassName={styles.modal_overlay}>
            <>
                {children}
            </>
        </ReactModal>
    )
}

export default Modal
