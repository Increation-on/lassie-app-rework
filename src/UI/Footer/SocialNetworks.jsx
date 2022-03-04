import styles from '../styles/Footer.module.css'

const SocialNetworks = () => {
    return (
        <div className={styles.footer__col}>
            <h3 className={styles.footer__title}>Социальные сети</h3>
            <ul className={`${styles.footer__socials} ${styles.socials}`}>
                <li className={styles.socials__item}>
                    <a href="#" className={`${styles.socials__name} ${styles.socials__name_vk}`}>
                        <span className={styles.icon_vkontakte}></span>
                    </a>
                </li>
                <li className={styles.socials__item}>
                    <a href="#" className={`${styles.socials__name} ${styles.socials__name_ok}`}>
                        <span className={styles.icon_odnoklassniki}></span>
                    </a>
                </li>
                <li className={styles.socials__item}>
                    <a href="#" className={`${styles.socials__name} ${styles.socials__name_fb}`}>
                        <span className={styles.icon_facebook}></span>
                    </a>
                </li>
                <li className={styles.socials__item}>
                    <a href="#" className={`${styles.socials__name} ${styles.socials__name_tw}`}>
                        <span className={styles.icon_twitter_bird}></span>
                    </a>
                </li>
            </ul>
            <p className={styles.footer__text}>Следи за новостями и акциями
                <br />в социальных сетях. Будь первым!
            </p>
        </div>
    )
} 

export default SocialNetworks;