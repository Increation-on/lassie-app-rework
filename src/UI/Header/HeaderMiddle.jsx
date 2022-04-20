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


    return (
        <div className="header__middle">
            <div className="container header__container header__container_middle">
                <Logo location={location.pathname} />
                <div className="header__contacts">
                    <span className="header__icon icon-comment"></span>
                    <HeaderMidContatcs tel={midTelFirst} info={midInfoFirst} />
                    <HeaderMidContatcs tel={midTelSecond} info={midInfoSecond} />
                    <div className="header__col header__col_contacts">
                        <div className="contacts">
                            <a href="#" className="link">Контактная иформация</a>
                        </div>
                    </div>
                </div>
                <div className="header__col header__col_basket">
                    <span className="header__icon icon-bag"></span>
                    <div className="header__basket">
                        <div className="text">
                            {!totalAmount && !totalPrice ? "Ваша корзина пуста" : "В вашей корзине"}
                        </div>
                        {!totalAmount && !totalPrice ? null : <Link to="/order" className="link">
                            {totalAmount} {totalAmount == 1 ? "товар" :
                                totalAmount > 1 && totalAmount <= 4 ? "товара" :
                                    totalAmount > 4 ? "товаров" : null} на {totalPrice} руб.</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMiddle;