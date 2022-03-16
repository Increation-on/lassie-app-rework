import styles from '../styles/Header.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';


const HeaderTop = (props) => {

    const [menu, setMenu] = useState([]);
    
    useEffect( () =>{
        axios.get(`/mocks/headerTopNav.json`).then(response=>{
            const data = response.data;
            setMenu(data);
        })
    }, []);

    return (
            <div className={styles.header__top}>
                <div className={`${styles.container} ${styles.header__container} ${styles.header__container_top}`}>
                    <div className={`${styles.header__col} ${styles.header___col_top_left}`}>
                        <span className={`${styles.header__icon} ${styles.icon_mail}`}>
                        </span>
                        <a href="#" className={styles.link}>Подписаться</a>
                    </div>
                    <div className={`${styles.header__col} ${styles.header__col_top_right}`}>
                        <ul className={`${styles.header__top_menu} ${styles.menu}`}>
                            {menu.map((el)=>{
                                return <li key={el.id} className={styles.menu__item}>
                                    <NavLink to={el.path} className={`${styles.link} ${styles.menu__name}`}>{el.title}</NavLink>
                                </li>
                            })}
                        </ul>
                        <Search/>
                    </div>
                </div>
            </div>
    )
}

export default HeaderTop;