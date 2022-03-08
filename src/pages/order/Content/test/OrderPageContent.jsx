import styles from '../../styles/Order.module.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import OrderPageFormRow from './OrderPageFormRow';

const OrderPageContent = () => {

    const {
        handleSubmit,
    } = useForm({
        mode: 'onBlur'
    });

    const onFormSubmit = (data) => {
        console.log(JSON.stringify(data));
    }


    return (
        <div className={styles.container}>
            <ul className={styles.breadcrumbs}>
                <li className={styles.breadcrumbs__item}>
                    <Link to='/main' className={styles.breadcrumbs__name}>Главная</Link>
                </li>
                <li className={styles.breadcrumbs__item}>
                    <a href="#" className={styles.breadcrumbs__name}>Аксессуары</a>
                </li>
                <li className={styles.breadcrumbs__item}>
                    <a href="#" className={styles.breadcrumbs__name}>Головные уборы</a>
                </li>
            </ul>
            <h1 className={styles.title}>Оформление заказа</h1>
            <form onSubmit={handleSubmit(onFormSubmit)} className={`${styles.form} ${styles.form_validate} ${styles.order_page__form}`}>
                <fieldset className={styles.form__fieldset}>
                    <legend className={styles.form__title}>Информация о покупателе</legend>
                    {/* rework input size!!! */}

                    <OrderPageFormRow
                        formClass={`${styles.form__col} ${styles.form__col_width_375}`}
                        htmlForName='order_name'
                        type='text'
                        text='Фамилия, Имя, отчество'
                    />
                    <OrderPageFormRow
                        formClass={`${styles.form__col} ${styles.form__col_width_220}`}
                        htmlForName='order_email'
                        text="Электронная почта"
                        type='email'
                        patternValue={/([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/}
                        patternMessage="Пожалуйста, введите корректный адрес электронной почты"
                    />
                    <div className={styles.form__col}>
                        <div className={styles.form__info}>Мы не рассылаем спам и не передаем информацию третьим лицам</div>
                    </div>
                    <OrderPageFormRow
                        formClass={`${styles.form__col} ${styles.form__col_width_220}`}
                        htmlForName='order_phone'
                        text="Контактный телефон"
                        type='tel'
                        patternMessage="Пожалуйста, введите корректный номер телефона"
                    />
                    <div className={styles.form__col}>
                        <div className={styles.form__info}>Необходим для подтверждения заказа</div>
                    </div>
                    <OrderPageFormRow
                        formClass={`${styles.form__col} ${styles.form__col_width_220}`}
                        htmlForName='order_town'
                        text="Город"
                        type='text'
                    />
                    <OrderPageFormRow
                        formClass={`${styles.form__col} ${styles.form__col_width_220}`}
                        htmlForName='order_street'
                        text="Улица"
                        type='text'
                    />
                    <OrderPageFormRow
                        formClass={`${styles.form__col} ${styles.form__col_width_220}`}
                        htmlForName='order_mail_index'
                        text="Почтовый индекс"
                        type='number'
                    />
                    <OrderPageFormRow
                        formClass={`${styles.form__col} ${styles.form__col_width_220}`}
                        htmlForName='order_home_number'
                        text="Номер дома"
                        type='number'
                    />
                    <OrderPageFormRow
                        formClass={`${styles.form__col} ${styles.form__col_width_220}`}
                        htmlForName='order_frame'
                        text="Корпус"
                        type='number'
                    />
                    <OrderPageFormRow
                        formClass={`${styles.form__col} ${styles.form__col_width_220}`}
                        htmlForName='order_frame'
                        text="Номер квартиры"
                        type='number'
                    />
                </fieldset>
            </form>
        </div>
    )
}

export default OrderPageContent;