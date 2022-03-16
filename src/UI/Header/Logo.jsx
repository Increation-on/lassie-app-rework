import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Logo = (props) => {

    const location = props.location;

    return (
        <div className={`${styles.header__col} ${styles.header__col_logo}`}>
            <NavLink to="/main" className={location==='/main'||location==='/'?styles.header__logo_dis:null}>
                <img src={require('../../img/header/logo.png')} alt="logo" />
            </NavLink>
        </div>
    )
}

export default Logo;     
