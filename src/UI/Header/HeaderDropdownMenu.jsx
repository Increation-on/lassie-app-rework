import styles from '../styles/Header.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';

const HeaderDropdownMenu = (props) => {

   const items = props.items;
   console.log(items);
    

    return (
        <ul className={styles.dropdown_menu}>
            <li className={styles.dropdown_menu__content}>
                <div className={styles.dropdown_menu__img}>
                    <img src={require('../../img/header/header-submenu-1.jpg')} alt="child" />
                </div>
                <div className={styles.dropdown_menu__menu_col}>
                    <ul className={styles.vertical_menu}>
                        {/* {items.map(item => {
                            return <li key={item.id} className={styles.vertical_menu__item}>
                                {item.type.length > 0 ? <span className={styles.vertical_menu__name}>{item.title}</span> :
                                    <a href="#" className={styles.vertical_menu__name}>{item.title}</a>}
                                <ul className={styles.vertical_menu__submenu}>
                                    <li className={styles.vertical_menu__submenu_item}>
                                        {item.type.map(el => {
                                            return <a href="#" key={el.id} className={`${styles.link} ${styles.vertical_menu__submenu_name}`}>{el.title}</a>
                                        })}
                                    </li>
                                </ul>
                            </li>
                        })} */}
                    </ul>

                    {items.map(el => {
                        return <div>
                            <ul>
                                <li style={{fontSize:"20px"}}>{el.title}</li>
                                <ul>
                                    {el.type.map(el=>{
                                      return <li style={{color:"red"}}>{el.title}</li>
                                    })}
                                </ul>
                            </ul>
                        </div>
                    })}
                </div>
                {/* <div className={styles.dropdown_menu__menu_col}>
                    <ul className={styles.vertical_menu}>
                        {data.map(el => {
                            console.log(el)
                            return <li key={el.id} className={styles.vertical_menu__item}>
                                {el.type1 ? <span className={styles.vertical_menu__name}>{el.title}</span> :
                                    <a href="#" className={styles.vertical_menu__name}>{el.title}</a>}
                                <ul className={styles.vertical_menu__submenu}>
                                    <li className={styles.vertical_menu__submenu_item}>
                                        <a href="#" className={`${styles.link} ${styles.vertical_menu__submenu_name}`}>
                                            {el.type1}
                                        </a>
                                    </li>
                                    <li className={styles.vertical_menu__submenu_item}>
                                        <a href="#" className={`${styles.link} ${styles.vertical_menu__submenu_name}`}>
                                            {el.type2}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        })}
                    </ul>
                </div> */}
            </li>
        </ul>
    )
}

export default HeaderDropdownMenu;