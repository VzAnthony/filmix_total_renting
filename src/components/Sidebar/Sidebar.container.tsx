import Sidebar from './Sidebar'
import type { InterfaceSidebarProps } from './Sidebar.type'

const SidebarContainer = ({
    NavList,
    toggleSidebar
}: InterfaceSidebarProps) => {
    return (
        <Sidebar toggleSidebar={toggleSidebar} NavList={NavList} />
    )
}

export default SidebarContainer 