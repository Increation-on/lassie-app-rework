import HDDM from "./HeaderDropdownMenu";
import { useState, useEffect } from 'react';
import axios from 'axios';


const HeaderBottom = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios.get(`mocks/hBN.json`).then(response => {
            const data = response.data;
            setMenu(data);
        })
    }, []);

    
    const buttonMenu = [...menu].reverse();

    
    return (
        <div className="header__bottom">
            <div className="container">
                <nav className="header__nav navigation">
                    <ul className="header__menu menu menu_width_full">
                        {menu.map(el => {
                            return  <li key={el.id} className="menu__item">
                                        {el.sale?
                                            <a href="#" className="header__sale-wrapper menu__name">
                                                <span className="header__sale">{el.title}</span></a>:
                                            <a href="#" className="menu__name">{el.title}</a>
                                        }
                                        <HDDM item = {el.item} menuId={el.id} />
                                    </li>
                        })} 
                    </ul>
                    <button className="burger-btn header__nav-btn js-nav-btn"><span className="burger-btn__switch">Развернуть меню </span>
                    </button>
                    <div className="navigation__collapse">
                        <ul className="navigation__collapse-menu vertical-menu">
                            {buttonMenu.map(el=> {
                                return <li key={el.id} className="navigation__collapse-item vertical-menu__item">
                                            <a href="#" className="vertical-menu__name">{el.title}</a>
                                        </li>
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default HeaderBottom;