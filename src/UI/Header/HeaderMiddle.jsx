import styles from '../styles/Header.module.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const { REACT_APP_PORT } = process.env;


const HeaderMiddle = (props) => {

    const [contacts, setContacts] = useState([]);
    const url = `http://localhost:${REACT_APP_PORT}`;

    useEffect(() => {
        axios.get(`${url}/contacts`).then(response => {
            const data = response.data;
            setContacts(data);
        })
    }, []);

    const amount = useSelector(state => state.amount.amount);
    const totalPrice = useSelector(state => state.totalPrice.totalPrice);

    return (
        <div className={styles.header__middle}>
            <div className={`${styles.container} ${styles.header__container} ${styles.header__container_middle}`}>
                <div className={`${styles.header__col} ${styles.header__col_logo}`}>
                    <NavLink to="/" className={`${styles.header__logo} ${styles.logo}`}>
                        <img src={require('../../img/header/logo.png')} alt="logo" />
                    </NavLink>
                </div>
                <div className={styles.header__contacts}>
                    <span className={`${styles.header__icon} ${styles.icon_comment}`}></span>
                    {contacts.map((el) => {
                        return <div key={el.tel} className={`${styles.header__col} ${styles.header__col_contacts}`}>
                            <div className={styles.contacts}>
                                <a href="#" className={styles.contacts__tel}>{el.tel}</a>
                                <div className={styles.contacts__info}>{el.info}</div>
                            </div>
                        </div>
                    })}
                    <div className={`${styles.header__col} ${styles.header__col_contacts}`}>
                        <div className={styles.contacts}>
                            <a href="#" className={styles.link}>Контактная иформация</a>
                        </div>
                    </div>
                </div>
                <div className={`${styles.header__col} ${styles.header__col_basket}`}>
                    <span className={`${styles.header__icon} ${styles.icon_bag}`}></span>
                    <div className={styles.header__basket}>
                        <div className={styles.text}>{!amount && !totalPrice ? <span>Ваша корзина пуста</span> : <span>В вашей корзине</span>}</div>
                        {!amount && !totalPrice ? null : <a href="#" className={styles.link}>
                            {amount} {amount == 1 ? <span>товар</span> :
                                amount > 1 && amount <= 4 ? <span>товара</span> :
                                    amount > 4 ? <span>товаров</span> : null} на {totalPrice} руб.</a>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMiddle;