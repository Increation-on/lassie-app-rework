import styles from '../styles/Header.module.css';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';

const Header = (props) =>{
    return (
        <div className={styles.header}>
           <HeaderTop/>
           <HeaderMiddle/>
           <HeaderBottom/>
        </div>
    )
}

export default Header;