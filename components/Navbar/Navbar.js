import style from './Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={style.nav}>
            <a href="/"><h1 id={style.title}>Cycle</h1></a>
        </div>
    )
}

export default Navbar;