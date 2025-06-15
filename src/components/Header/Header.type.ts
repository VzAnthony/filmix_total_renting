export interface InterfaceHeaderProps {
    showSidebar: boolean
    toggleSidebar: () => void
    navList: { name: string, path: string }[]
}