import Sidebar from './Sidebar'

interface SidebarProps {
    NavItems: string[]
    toggleSidebar: () => void
}

const SidebarContainer = ({
    NavItems,
    toggleSidebar
}: SidebarProps) => {
    return (
        <Sidebar toggleSidebar={toggleSidebar} NavItems={NavItems} />
    )
}

export default SidebarContainer 