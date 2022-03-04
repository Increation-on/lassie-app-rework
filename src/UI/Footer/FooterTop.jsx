import styles from '../styles/Footer.module.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import SocialNetworks from './SocialNetworks';
import FooterTopMenu from './FooterTopMenu';

const FooterTop = (props) => {

    const [purchases, setPurchases] = useState([]);
    const [lassie, setLassie] = useState([]);
    const [lassieClub, setLassieClub] = useState([]);

    useEffect(() => {
        axios.get('/mocks/footerTopMenu.json').then(response => {
            const data = response.data;
            setPurchases(data[0]);
            setLassie(data[1]);
            setLassieClub(data[2]);
        }).catch(err => alert(err));
    }, []);

    return (
        <div className={`${styles.container} ${styles.footer__container}`}>
            <div className={styles.footer__col}>
                <h3 className={styles.footer__title}>Покупки</h3>
                {purchases.map(el => {
                    return <FooterTopMenu title={el.title} key={el.id} />
                })}
            </div>
            <div className={styles.footer__col}>
                <h3 className={styles.footer__title}>Lassie</h3>
                {lassie.map(el => {
                    return <FooterTopMenu title={el.title} key={el.id} />
                })}
            </div>
            <div className={styles.footer__col}>
                <h3 className={styles.footer__title}>Lassie клуб</h3>
                {lassieClub.map(el => {
                    return <FooterTopMenu title={el.title} key={el.id} />
                })}
            </div>
            <SocialNetworks />
        </div>
    )
}

export default FooterTop;