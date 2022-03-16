import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../../store/asyncActions/asyncProducts';
import ProductCard from './ProductCard';

const MainPagePopular = () => {

    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts());  
    }, []);

    return (
        <section className="popular">
            <div className="container">
                <h1 className="heading">
                    <span className="heading__text">Популярные товары</span>
                </h1>
                <ul className="goods">
                    {products.map((el)=>{
                        return <ProductCard 
                                        key={el.id}
                                        id={el.id} 
                                        price={el.price} 
                                        name={el.title} 
                                        img={el.img} 
                                        url={el.url} 
                                        sizes = {el.sizes} 
                                        mark={el.mark}
                                        discount={el.discount}
                                    />
                    })}
                </ul>
            </div>
        </section>
    )
}

export default MainPagePopular;