import styles from '../styles/Footer.module.css';
import { copyrightWorktimeTel, copyrightWorktime, copyrightTitle, copyrightHotlineNumber,copyrightHotline, copyrightMail } from '../../configs/copyright';

const FooterBottom = (props) => {
    return (
        <div className={styles.footer__bottom}>
            <div className={`${styles.container} ${styles.footer__container}`}>
                <div className={styles.footer__bottom_col}>
                    <p className={styles.footer__text}>{copyrightTitle}</p>
                </div>
                <div className={styles.footer__bottom_col}>
                    <div className={styles.footer__text_group}>
                        <a href="tel:+78003331204" className={styles.footer__text}>{copyrightHotlineNumber}</a>
                        <span className={styles.footer__text}>{copyrightHotline}</span>
                    </div>
                    <div className={styles.footer__text_group}>
                        <a href="tel:+78003331204" className={styles.footer__text}>{copyrightWorktimeTel}</a>
                        <span className={styles.footer__text}>{copyrightWorktime}</span>
                    </div>
                    <a href="mailto:order@lassieshop.ru" className={`${styles.footer__text} ${styles.footer__text_block}`}>{copyrightMail}</a>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom;