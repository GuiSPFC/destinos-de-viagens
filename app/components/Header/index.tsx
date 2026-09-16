import Link from "next/link";
import styles from "./Header.module.css"

const Header = () => {
    return(
        <header className={styles.header}>
            <Link href="/" className={styles.logo}> 
                <h1>Viagens para realizar</h1> 
            </Link>
            <nav className={styles.nav}>
                <Link href="/" className={styles.navLink}>Inicio</Link>
                <Link href="/destinos" className={styles.navLink}>Destinos</Link>
            </nav>
        </header>
    )
}

export default Header;