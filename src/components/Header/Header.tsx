import { HiOutlineMenu } from "react-icons/hi";
import logo from '../../assets/logo.png'
import styles from './Header.styles.module.css'
import Sidebar from "../Sidebar/Sidebar.container";
import { Link } from "react-router-dom";

interface HeaderProps {
    showSidebar: boolean
    toggleSidebar: () => void
    navList: { name: string, path: string }[]
}

const Header = ({
    showSidebar,
    toggleSidebar,
    navList
}: HeaderProps) => {

    return (
        <header className={styles.header}>
            <HiOutlineMenu className={styles.menu} onClick={toggleSidebar} />
            <picture className={styles.picture}>
                <img className={styles.logo} src={logo} alt="logo" />
            </picture>

            <nav>
                <ul className={styles.nav_list}>
                    {navList.map(({ name, path }) => <li key={name}><Link to={path}>{name}</Link></li>)}
                </ul>

                {showSidebar && <Sidebar toggleSidebar={toggleSidebar} NavList={navList} />}

            </nav>
        </header>
    )
}

export default Header