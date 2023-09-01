import styles from '../CSS/Footer.module.css';
import LinkedIn from '../Assets/linkedin.png';
import Github from '../Assets/github.png';
import PersonalWebsite from '../Assets/personalwebsite.png';

const Footer=()=>{
    return(
        <footer className={styles.footer}>
            <div className={styles.icons}>
                <a  target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/marc-mansour-8616b81b6'>
                    <img className={styles.icon} src={LinkedIn} alt='LinkedIn'/>
                </a>
                <a  target="_blank" rel='noreferrer' href='https://github.com/CluelessArguer/Weather'>
                    <img className={styles.icon} src={Github} alt='Github'/>
                </a>
                <a  target="_blank" rel='noreferrer' href='https://marcmansour.ca'>
                    <img className={styles.icon} src={PersonalWebsite} alt='Website'/>
                </a>
            </div>
            Developed by Marc Mansour.  Many Icons by <a className={styles.link} target="_blank" rel='noreferrer' href="https://icons8.com">Icons8</a>
        </footer>
    )
}

export default Footer;