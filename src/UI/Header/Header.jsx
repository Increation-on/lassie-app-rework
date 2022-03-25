import styles from '../styles/Header.module.css';
import { useLocation } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';
import Breadcrumbs from './Breadcrumbs';
import { useState } from 'react';






const Header = (props) =>{

    const [navValue, setNavValue] = useState(null);

    const getNavItem = (value) => { 
        setNavValue(value)
    }

    
    const location = useLocation();
    const pathName = location.pathname;


    return (
        <div className={styles.header}>
           <HeaderTop/>
           <HeaderMiddle/>
           <HeaderBottom getNav = {getNavItem} />
           {pathName !== "/main" && pathName !== "/"?
                <Breadcrumbs item={navValue}/>
            :null}
            {/* <Breadcrumbs item={navValue}/> */}
        </div>
    )
}

export default Header;