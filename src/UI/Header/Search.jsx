import styles from '../styles/Header.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Search = () => {

    const products = useSelector(state => state.products.products);

    const [value, setValue] = useState('');

    const [searchValue, setSearchValue] = useState('');
  
    const filteredProducts =  products.filter(prod=>{
        return prod.title.toLowerCase().includes(value.toLowerCase())
    });
   
    return (
        <form className={`${styles.header__search} ${styles.search}`}>
            <input 
                type="search" 
                name="seacrh"
                value={value} 
                placeholder="Поиск по алфавиту" 
                className={styles.search__input} 
                onChange={e=>setValue(e.target.value)}
                autocomplete="off" 
            />
                <ul className={styles.autocomplete}>
                    {filteredProducts.map(product=>{
                       return  value ?
                         <li key={product.id} className={styles.autocomplete__item}>
                             <Link style={{textDecoration:"none", color:"black"}} 
                                   to={`${product.url}/${product.id}`}
                                   onClick={()=>setValue("")}> {product.title} </Link>
                        </li>
                         : null
                    })}
                   
                </ul>
            <button type="button" onClick={()=>{setSearchValue(value)}}  className={styles.search__btn}>
                <span className={`${styles.search__btn_icon} ${styles.icon_search}`}></span>
            </button>
        </form>
    )
}

export default Search;