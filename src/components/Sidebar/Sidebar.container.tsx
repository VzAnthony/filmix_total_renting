import Sidebar from './Sidebar'

interface SidebarProps {
    NavList: { name: string, path: string }[]
    toggleSidebar: () => void
}

const SidebarContainer = ({
    NavList,
    toggleSidebar
}: SidebarProps) => {
    return (
        <Sidebar toggleSidebar={toggleSidebar} NavList={NavList} />
    )
}

export default SidebarContainer 