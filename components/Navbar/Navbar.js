import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <a href="/"><h1>Resale Value Calculator</h1></a>
        </div>
    )
}

export default Navbar;