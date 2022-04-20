import styles from '../styles/Header.module.css';

const HeaderMidContatcs = (props) => {
    return (
        <div  className="header__col header__col_contacts">
            <div className="contacts">
                <a href="#" className="contacts__tel">{props.tel}</a>
                <div className="contacts__info">{props.info}</div>
            </div>
        </div>
    )
}

export default HeaderMidContatcs;