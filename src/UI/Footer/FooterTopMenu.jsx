import styles from '../styles/Footer.module.css';

const FooterTopMenu = (props) => {
    return (       
            <ul className={styles.list}>
                <li className={styles.list__item} key={props.id}>
                    <a href="#" className={styles.footer__text}>{props.title}</a>
                </li>
            </ul>
    )
}

export default FooterTopMenu;