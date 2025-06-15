import ReactModal from "react-modal"
import type { InterfaceModalProps } from "./Modal.type"
import styles from "./Modal.styles.module.css"
import { IoCloseOutline } from "react-icons/io5"

const Modal = ({
    isOpen,
    onClose,
    children
}: InterfaceModalProps) => {
    return (
        <ReactModal isOpen={isOpen} onRequestClose={onClose} className={styles.modal_content} overlayClassName={styles.modal_overlay}>
            <>
                <IoCloseOutline className={styles.close} onClick={onClose} />
                {children}
            </>
        </ReactModal>
    )
}

export default Modal