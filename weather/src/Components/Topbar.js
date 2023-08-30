
import styles from '../CSS/Navbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMeteor} from '@fortawesome/free-solid-svg-icons';

const Topbar=()=>{
    return (
        <nav className={styles.navbar}>
            <FontAwesomeIcon className={styles.icon} icon={faMeteor} />
        </nav>
    );
}

export default Topbar;