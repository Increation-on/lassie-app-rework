import Order from './Content/Order';
import OrderPageContent from './Content/test/OrderPageContent';
import styles from './styles/Order.module.css';

const OrderPage = () => {
    return (
        <main className={`${styles.content} ${styles.order_page}`}>
            {/* <Order/> */}
            <OrderPageContent/>      
        </main>
    )
}

export default OrderPage;