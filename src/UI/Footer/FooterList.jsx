import styles from '../styles/Footer.module.css';

const FooterList = (props) => {
    return (
        <ul className={styles.list}>
            <li className={styles.list__item} key={props.name}>
                <a href="#" className={styles.footer__text}>{props.name}</a>
            </li>
        </ul>
    )
}

export default FooterList;