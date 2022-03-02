import styles from '../styles/Footer.module.css'
import FooterList from './FooterList';

const FooterTop = () => {

    const buyItems = [
        { name: 'Как купить' },
        { name: 'Пользовательское соглашение' },
        { name: 'Контакты' },
        { name: 'Способы оплаты заказа' },
        { name: 'Доставка' },
        { name: 'Возврат товара' },
        { name: 'Таблица размеров' },
        { name: 'Часто задаваемые вопросы' },
        { name: 'Как правильно одевать ребенка' }
    ];

    const aboutLassie = [
        { name: 'О компании lassie' },
        { name: 'История' },
        { name: 'Качество' },
        { name: 'Уход за вещами' },
        { name: 'Категории Lassie®' },
        { name: 'Символы Lassie®' }
    ];

    const lassieClub = [
        { name: 'Зарегистрироваться' },
        { name: 'Войти в личный кабинет' },
        { name: 'Забыли Ваш пароль?' },
        { name: 'Защита персональной информации' },
    ];


    return (
        <div className={`${styles.container} ${styles.footer__container}`}>
            <div className={styles.footer__col}>
                <h3 className={styles.footer__title}>Покупки</h3>
                {buyItems.map((el) => {
                    return <FooterList key={el.name} name={el.name} />
                })}
            </div>
            <div className={styles.footer__col}>
                <h3 className={styles.footer__title}>Lassie</h3>
                {aboutLassie.map((el) => {
                    return <FooterList key={el.name} name={el.name} />
                })}
            </div>
            <div className={styles.footer__col}>
                <h3 className={styles.footer__title}>Lassie клуб</h3>
                {lassieClub.map((el) => {
                    return <FooterList key={el.name} name={el.name} />
                })}
            </div>
            <div className={styles.footer__col}>
                <h3 className={styles.footer__title}>Социальные сети</h3>
                <ul className={`${styles.footer__socials} ${styles.socials}`}>
                    <li className={styles.socials__item}>
                        <a href="#" className={`${styles.socials__name} ${styles.socials__name_vk}`}>
                            <span className={styles.icon_vkontakte}></span>
                        </a>
                    </li>
                    <li className={styles.socials__item}>
                        <a href="#" className={`${styles.socials__name} ${styles.socials__name_ok}`}>
                            <span className={styles.icon_odnoklassniki}></span>
                        </a>
                    </li>
                    <li className={styles.socials__item}>
                        <a href="#" className={`${styles.socials__name} ${styles.socials__name_fb}`}>
                            <span className={styles.icon_facebook}></span>
                        </a>
                    </li>
                    <li className={styles.socials__item}>
                        <a href="#" className={`${styles.socials__name} ${styles.socials__name_tw}`}>
                            <span className={styles.icon_twitter_bird}></span>
                        </a>
                    </li>
                </ul>
                <p className={styles.footer__text}>Следи за новостями и акциями
                        <br />в социальных сетях. Будь первым!
                    </p>
            </div>
        </div>
    )
}

export default FooterTop;