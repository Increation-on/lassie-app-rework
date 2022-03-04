import styles from '../styles/Header.module.css';

const Search = () => {
    return (
        <form className={`${styles.header__search} ${styles.search}`}>
            <input type="search" name="seacrh" placeholder="Поиск по алфавиту" className={styles.search__input} />
            <button type="submit" className={styles.search__btn}>
                <span className={`${styles.search__btn_icon} ${styles.icon_search}`}></span>
            </button>
        </form>
    )
}

export default Search;