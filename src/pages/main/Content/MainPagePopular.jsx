import styles from '../styles/Main.module.css';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../../store/asyncActions/asyncProducts';

const MainPagePopular = () => {

    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts());  
    }, []);

    return (
        <section className={styles.popular}>
            <div className={styles.container}>
                <h1 className={styles.heading}>
                    <span className={styles.heading__text}>Популярные товары</span>
                </h1>
                <ul className={styles.goods}>
                    {products.map((el)=>{
                        return <Card key={el.id} price={el.price} name={el.title} img={el.img} />
                    })}
                </ul>
            </div>
        </section>
    )
}

export default MainPagePopular;