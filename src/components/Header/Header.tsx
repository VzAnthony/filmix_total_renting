import { HiOutlineMenu } from "react-icons/hi";
import logo from '../../assets/logo.png'
import styles from './Header.styles.module.css'
import Sidebar from "../Sidebar/Sidebar.container";

interface HeaderProps {
    showSidebar: boolean
    toggleSidebar: () => void
}

const Header = ({
    showSidebar,
    toggleSidebar
}: HeaderProps) => {

    const navItems = ['Home', 'Top Movies', 'Favorites', "Genders", "Releases"]

    return (
        <header className={styles.header}>
            <HiOutlineMenu className={styles.menu} onClick={toggleSidebar} />
            <picture className={styles.picture}>
                <img className={styles.logo} src={logo} alt="logo" />
            </picture>

            <nav>
                <ul className={styles.nav_items}>
                    {navItems.map(item => <li><a href="#">{item}</a></li>)}
                </ul>

                {showSidebar && <Sidebar toggleSidebar={toggleSidebar} NavItems={navItems} />}

            </nav>
        </header>
    )
}

export default Header