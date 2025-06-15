export interface InterfaceModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}