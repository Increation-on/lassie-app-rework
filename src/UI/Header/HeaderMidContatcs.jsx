import styles from '../styles/Header.module.css';

const HeaderMidContatcs = (props) => {
    return (
        <div  className={`${styles.header__col} ${styles.header__col_contacts}`}>
            <div className={styles.contacts}>
                <a href="#" className={styles.contacts__tel}>{props.tel}</a>
                <div className={styles.contacts__info}>{props.info}</div>
            </div>
        </div>
    )
}

export default HeaderMidContatcs;