import OrderPageContent from './Content/OrderPageContent';
import styles from './styles/Order.module.css';

const OrderPage = () => {
    return (
        <main className={`${styles.content} ${styles.order_page}`}>
            <OrderPageContent/>
        </main>
    )
}

export default OrderPage;