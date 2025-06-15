import { HiOutlineMenu } from "react-icons/hi";
import logo from '../../assets/logo.png'
import Sidebar from "../Sidebar/Sidebar.container";
import { Link } from "react-router-dom";
import type { InterfaceHeaderProps } from "./Header.type";
import styles from './Header.styles.module.css'

const Header = ({
    showSidebar,
    toggleSidebar,
    navList
}: InterfaceHeaderProps) => {

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
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
            </div>
        </header>
    )
}

export default Header