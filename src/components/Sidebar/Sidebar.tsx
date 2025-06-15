import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import type { InterfaceSidebarProps } from "./Sidebar.type";
import styles from './Sidebar.styles.module.css'

const Sidebar = ({
    NavList,
    toggleSidebar
}: InterfaceSidebarProps) => {

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