import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/asyncActions/asyncProducts";

const Products = () => {

    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts());  
    }, []);


    return (
        <div>
            {products.map((el) => {
                return <div key={el.id}>
                        <h3>{el.title}</h3>
                        <p> price: {el.price}</p>
                        <img src={`${el.img}`} alt='cloth' />
                    </div>
            })}
        </div>
    )
}

export default Products;