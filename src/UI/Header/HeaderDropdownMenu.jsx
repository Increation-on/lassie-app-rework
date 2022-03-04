import styles from '../styles/Header.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HeaderDropdownMenu = (props) => {

    const [mainData, setMainData] = useState([]);


    useEffect(() => {
        axios.get('/mocks/dropDownMenu.json').then(response => {
            const data = response.data;
            setMainData(data);
        })
    }, []);

    // Object.keys(mainData).map((item)=>{
    //     console.log(mainData[item])
    //     mainData[item].map(el=>{
    //         console.log(el.type);
    //     }) 
    // })

    // console.log(Object.keys(mainData))
    // const hed = Object.keys(mainData);
    // console.log(hed[0])
    // console.log(typeof mainData);   




    Object.keys(mainData).map((item) => {
            console.log(item)
        mainData[item].map(el => {
            console.log(item, el.type);
        })
    })

    return (
        <ul className={styles.dropdown_menu}>
            <li className={styles.dropdown_menu__content}>
                <div className={styles.dropdown_menu__img}>
                    <img src={require('../../img/header/header-submenu-1.jpg')} alt="child" />
                </div>
                <div className={styles.dropdown_menu__menu_col}>
                    <ul className={styles.vertical_menu}>
                        {/* {mainData.map(el => {
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
                        })} */}
                        {/* {Object.keys(mainData).map((item) => {
                            mainData[item].map(el => {
                                return <li key={el.id} className={styles.vertical_menu__item}>
                                {el.type ? <span className={styles.vertical_menu__name}>{item}</span> :
                                    <a href="#" className={styles.vertical_menu__name}>{item}</a>}
                                <ul className={styles.vertical_menu__submenu}>
                                    <li className={styles.vertical_menu__submenu_item}>
                                        <a href="#" className={`${styles.link} ${styles.vertical_menu__submenu_name}`}>
                                            {el.type}
                                        </a>
                                    </li>
                                    <li className={styles.vertical_menu__submenu_item}>
                                        <a href="#" className={`${styles.link} ${styles.vertical_menu__submenu_name}`}>
                                            {el.type}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            })
                        })} */}
                        {Object.keys(mainData).map(el=>{
                            return <div>{el}</div>
                        })}
                    </ul>
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