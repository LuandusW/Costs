import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <Container>
                    <Link to="/">
                        <img src={logo} alt='Costs' />
                    </Link>
                    <ul className={styles.list}>
                        <li className={styles.item}><Link to='/'>Home</Link></li>
                        <li className={styles.item}><Link to='/company'>Compañía</Link></li>
                        <li className={styles.item}><Link to='/contact'>Contacto</Link></li>
                        <li className={styles.item}><Link to='/Newproject'>Nuevo Proyecto</Link></li>
                    </ul>
                </Container>
            </ul>
        </nav>
    )
}

export default Navbar;