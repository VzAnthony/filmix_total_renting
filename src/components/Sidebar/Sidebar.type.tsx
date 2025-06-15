export interface InterfaceSidebarProps {
    NavList: NavList[]
    toggleSidebar: () => void
}

export interface NavList {
    name: string
    path: string
}