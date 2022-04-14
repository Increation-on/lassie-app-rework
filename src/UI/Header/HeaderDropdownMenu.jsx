import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getCatalogName, getProductDescription } from '../../store/reducers/catalogReducer';
import { useSelector, useDispatch } from 'react-redux';


const HeaderDropdownMenu = (props) => {

    // const [vertMenu, setVertMenu] = useState(null);
    // const [vertSubMenu, vertSubmenu] = useState(null);

    const dispatch = useDispatch();


    const getInfo = (name, description) => {
        dispatch(getCatalogName(name));
        dispatch(getProductDescription(description));
        props.setHeadBotMenuItem(props.navItem);
    }


    return (
        <ul  className="dropdown-menu" >
            <li className="dropdown-menu__content">
                <div className="dropdown-menu__img">
                    <img src={require('../../images/header-submenu-1.jpg')} alt="девочка" />
                </div>
                <div className="dropdown-menu__menu-col">
                    <ul className="vertical-menu">
                        {props.item.map(item => {
                            if (item.id <= 4) {
                                return <li key={item.id} className="vertical-menu__item">
                                            {item.type.length<=0?<Link to={`/catalog`} 
                                                                     className="vertical-menu__name"
                                                                     onClick={()=>{getInfo(item.title, item.description)}}>{item.title}</Link>
                                                              :<span className="vertical-menu__name">{item.title}</span>}
                                        <ul className="vertical-menu__submenu">
                                        {item.type.map(el => {
                                            return <li key={el.id} className="vertical-menu__submenu-item">
                                                        <Link to={`/catalog`} onClick={()=>{getInfo(item.title, item.description)}} className={`link vertical-menu__submenu-name`}>{el.title}</Link>
                                                    </li>
                                        })}
                                    </ul>
                                </li>
                            }
                        })}
                    </ul>
                </div>
                <div className="dropdown-menu__menu-col">
                    <ul className="vertical-menu">
                        {props.item.map(item => {
                            if (props.menuId === 4 || props.menuId === 7) {
                                if (item.id > 4) {
                                    return <li key={item.id} className="vertical-menu__item">
                                            {item.type.length<=0?<Link to={`/catalog`} 
                                                                     className="vertical-menu__name"
                                                                     onClick={()=>{getInfo(item.title, item.description)}}>{item.title}</Link>
                                                              :<span className="vertical-menu__name">{item.title}</span>}
                                            <ul className="vertical-menu__submenu">
                                            {item.type.map(el => {
                                                return <li key={el.id} className="vertical-menu__submenu-item">
                                                            <Link to={`/catalog`} 
                                                            className="link vertical-menu__submenu-name"
                                                            onClick={()=>{getInfo(item.title, item.description)}}>{el.title}</Link>
                                                        </li>
                                            })}
                                        </ul>
                                    </li>
                                }
                            }
                        })}
                    </ul>
                </div>
            </li>
        </ul>
    )
}

export default HeaderDropdownMenu;