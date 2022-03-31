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
                                        productData = {products[el.id-1]}
                                    />
                    })}
                </ul>
            </div>
        </section>
    )
}

export default MainPagePopular;