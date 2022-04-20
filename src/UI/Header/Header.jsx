import styles from '../styles/Header.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';
import Breadcrumbs from './Breadcrumbs';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLocationAction } from '../../store/reducers/productInfoReducer';


const Header = (props) => {

    const [navValue, setNavValue] = useState(null);

    const getNavItem = (value) => { 
        setNavValue(value)
    }

    const location = useLocation();

    const dispatch = useDispatch();

    const pathName = location.pathname;

    const [route, setRoute] = useState({from: pathName, to: pathName })

    

    useEffect(() => {
        setRoute(prev=>({to:location.pathname, from: prev.to}));
    },[location]);
    

    useEffect(()=>{
        dispatch(addLocationAction(route));
    }, [route]);



    return (
        <div className={styles.header}>
           <HeaderTop/>
           <HeaderMiddle/>
           <HeaderBottom getNav = {getNavItem} />
           {pathName !== "/main" && pathName !== "/"?
                <Breadcrumbs item={navValue}/>
            :null}
        </div>
    )
}

export default Header;