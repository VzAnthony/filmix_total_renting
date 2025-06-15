import type { InterfaceModalProps } from "./Modal.type";
import Modal from "./Modal";

const ModalContainer = ({
    children,
    isOpen,
    onClose,
}: InterfaceModalProps) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {children}
        </Modal>
    );
};

export default ModalContainer;
