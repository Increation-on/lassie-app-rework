import styles from '../styles/Footer.module.css';

const FooterBottom = (props) => {
    return (
        <div className={styles.footer__bottom}>
            <div className={`${styles.container} ${styles.footer__container}`}>
                <div className={styles.footer__bottom_col}>
                    <p className={styles.footer__text}>Официальный интернет-магазин Lassie® в России</p>
                </div>
                <div className={styles.footer__bottom_col}>
                    <div className={styles.footer__text_group}>
                        <a href="tel:+78003331204" className={styles.footer__text}>8 (800) 333-12-04 </a>
                        <span className={styles.footer__text}>(горячая линия)</span>
                    </div>
                    <div className={styles.footer__text_group}>
                        <a href="tel:+78003331204" className={styles.footer__text}>8 (495) 215-04-35</a>
                        <span className={styles.footer__text}>(ежедневно с 9:00 до 24:00)</span>
                    </div>
                    <a href="mailto:order@lassieshop.ru" className={`${styles.footer__text} ${styles.footer__text_block}`}>order@lassieshop.ru</a>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom;