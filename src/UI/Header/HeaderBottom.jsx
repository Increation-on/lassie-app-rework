import { useState } from 'react';
import styles from '../styles/Header.module.css';
import HeaderDropdownMenu from './HeaderDropdownMenu';
import { useEffect } from 'react';
import axios from 'axios';

const HeaderBottom = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get(`mocks/headerBotNav.json`).then(response => {
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
                                <li className={styles.menu__item} key={el.id}>
                                    {el.title === "Распродажа" ? <a href="#" className={`${styles.header__sale_wrapper} ${styles.menu__name}`}>
                                            <span className={styles.header__sale}>{el.title}</span>
                                        </a>
                                     : <a href="#" className={styles.menu__name}>{el.title}</a>}
                                </li>
                            )
                        })}
                        <HeaderDropdownMenu data={menu} />
                    </ul>
                </nav>
            </div>
        </div>
    )
}


<li className={`${styles.header} ${styles.menu__item}`}>
    <a href="javascript:void(0);" className={`${styles.header__sale_wrapper} ${styles.menu__name}`}>
        <span className={styles.header__sale}>Распродажа</span></a>

</li>

export default HeaderBottom;