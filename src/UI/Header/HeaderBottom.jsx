import { useState } from 'react';
import styles from '../styles/Header.module.css';
import HeaderDropdownMenu from './HeaderDropdownMenu';
import { useEffect } from 'react';
import axios from 'axios';
const { REACT_APP_PORT } = process.env;


const HeaderBottom = () => {
    const [menu, setMenu] = useState([]);
    const url = `http://localhost:${REACT_APP_PORT}`;

    useEffect(() => {
        axios.get(`${url}/headerBottomMenuItems`).then(response => {
            const data = response.data;
            setMenu(data);
        })
    }, []);


    return (
        <div className={styles.header__bottom}>
            <div className={styles.container}>
                <nav className={`${styles.header__nav} ${styles.navigation}`}>
                    <ul className={`${styles.header__menu} ${styles.menu} ${styles.menu_width_full}`}>
                        {menu.map((el) => {
                            return (
                                <li className={styles.menu__item} key={el.title}>
                                    <a href="#" className={styles.menu__name}>{el.title}</a>
                                    <HeaderDropdownMenu />
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HeaderBottom;