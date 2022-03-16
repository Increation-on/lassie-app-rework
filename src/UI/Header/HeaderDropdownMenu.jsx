

const HeaderDropdownMenu = (props) => {


    return (
        <ul className="dropdown-menu">
            <li className="dropdown-menu__content">
                <div className="dropdown-menu__img">
                    <img src={require('../../images/header-submenu-1.jpg')} alt="девочка" />
                </div>
                <div className="dropdown-menu__menu-col">
                    <ul className="vertical-menu">
                        {props.item.map(el => {
                            if (el.id <= 4) {
                                return <li key={el.id} className="vertical-menu__item"><span className="vertical-menu__name">{el.title}</span>
                                    <ul className="vertical-menu__submenu">
                                        {el.type.map(el => {
                                            return <li key={el.id} className="vertical-menu__submenu-item"><a href="#" className="link vertical-menu__submenu-name">{el.title}</a></li>
                                        })}
                                    </ul>
                                </li>
                            }
                        })}
                    </ul>
                </div>
                <div className="dropdown-menu__menu-col">
                    <ul className="vertical-menu">
                        {props.item.map(el => {
                            if (props.menuId == 4 || props.menuId == 7) {
                                if (el.id > 4) {
                                    return <li key={el.id} className="vertical-menu__item"><span className="vertical-menu__name">{el.title}</span>
                                        <ul className="vertical-menu__submenu">
                                            {el.type.map(el => {
                                                return <li key={el.id} className="vertical-menu__submenu-item"><a href="#" className="link vertical-menu__submenu-name">{el.title}</a></li>
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