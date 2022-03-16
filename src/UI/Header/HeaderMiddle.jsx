import styles from '../styles/Header.module.css';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';
import { midInfoFirst, midInfoSecond, midTelFirst, midTelSecond } from '../../configs/contacts';
import HeaderMidContatcs from './HeaderMidContatcs';


const HeaderMiddle = (props) => {

    const location = useLocation();
    
    const totalPrice = useSelector(state => state.totalPrice.totalPrice);
    const totalAmount = useSelector(state => state.totalAmount.totalAmount);


    localStorage.setItem("totalAmount", totalPrice);
    localStorage.setItem("totalPrice", totalAmount);

    const totalP = localStorage.getItem('totalPrice');
    const totalA = localStorage.getItem('totalAmount');
    

    return (
        <div className={styles.header__middle}>
            <div className={`${styles.container} ${styles.header__container} ${styles.header__container_middle}`}>
                <Logo location={location.pathname} />
                <div className={styles.header__contacts}>
                    <span className={`${styles.header__icon} ${styles.icon_comment}`}></span>
                    <HeaderMidContatcs tel={midTelFirst} info={midInfoFirst} />
                    <HeaderMidContatcs tel={midTelSecond} info={midInfoSecond} />
                    <div className={`${styles.header__col} ${styles.header__col_contacts}`}>
                        <div className={styles.contacts}>
                            <a href="#" className={styles.link}>Контактная иформация</a>
                        </div>
                    </div>
                </div>
                <div className={`${styles.header__col} ${styles.header__col_basket}`}>
                    <span className={`${styles.header__icon} ${styles.icon_bag}`}></span>
                    <div className={styles.header__basket}>
                        <div className={styles.text}>{!totalAmount && !totalPrice ? <span>Ваша корзина пуста</span> : <span>В вашей корзине</span>}</div>
                        {!totalAmount && !totalPrice ? null : <Link to="/order" className={styles.link}>
                            {totalAmount} {totalAmount == 1 ? <span>товар</span> :
                                totalAmount > 1 && totalAmount <= 4 ? <span>товара</span> :
                                    totalAmount > 4 ? <span>товаров</span> : null} на {totalPrice} руб.</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMiddle;