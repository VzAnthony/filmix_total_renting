import { IoCloseOutline } from "react-icons/io5";
import styles from './Sidebar.styles.module.css'
import { Link } from "react-router-dom";

interface SidebarProps {
    NavList: { name: string, path: string }[]
    toggleSidebar: () => void
}

const Sidebar = ({
    NavList,
    toggleSidebar
}: SidebarProps) => {

    return (
        <div className={styles.sidebar}>
            <IoCloseOutline className={styles.close} onClick={toggleSidebar} />
            <ul className={styles.nav_items}>
                {NavList.map(({ name, path }) => <li key={name}><Link to={path}>{name}</Link></li>)}
            </ul>
        </div>
    )
}

export default Sidebar