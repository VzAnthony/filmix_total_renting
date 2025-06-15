import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.png"
import styles from "./Footer.styles.module.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_main}>
                <div className={styles.footer_brand}>
                    <img src={logo} alt="Logo" className={styles.footer_logo} />
                    <span className={styles.footer_title}>Movie Explorer</span>
                </div>
                <nav className={styles.footer_links}>
                    <Link to="/">Home</Link>
                    <Link to="/favorites">Favorites</Link>
                    <a href="mailto:contacto@movieexplorer.com">Contact</a>
                    <a href="https://github.com/AnthonyMorenoDev" target="_blank" rel="noopener noreferrer">GitHub</a>
                </nav>
                <div className={styles.footer_api}>
                    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="TMDb" className={styles.footer_api_logo} />
                        <span>Dates for TMDb</span>
                    </a>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <div className={styles.footer_social}>
                    <a href="https://github.com/AnthonyMorenoDev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/vzanthony" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>
                <div className={styles.footer_copyright}>
                    © {new Date().getFullYear()} Movie Explorer. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer