import { IoCloseOutline } from "react-icons/io5";
import styles from './Sidebar.styles.module.css'

interface SidebarProps {
    NavItems: string[]
    toggleSidebar: () => void
}

const Sidebar = ({
    NavItems,
    toggleSidebar
}: SidebarProps) => {

    return (
        <div className={styles.sidebar}>
            <IoCloseOutline className={styles.close} onClick={toggleSidebar} />
            <ul className={styles.nav_items}>
                {NavItems.map(item => <li><a href="#">{item}</a></li>)}
            </ul>
        </div>
    )
}

export default Sidebar