import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { router } from "../../router/routes";
import { useSelector } from "react-redux";

import MainPage from '../../pages/main/MainPage';
import ErrorPage from '../../pages/error/ErrorPage';
import About from '../../pages/about/About';
import Delivery from '../../pages/delivery/Delivery';
import Payment from '../../pages/payment/Payment';
import OrderPage from './../../pages/order/OrderPage';
import CatalogPage from '../../pages/catalog/CatalogPage';
import ProductPage from "../../pages/product/ProductPage";


const Breadcrumbs = (props) => {

    const catalogHead = useSelector(state=> state.category.category);

    const routes = [
        { path:'/main', Component: MainPage, breadcrumb: "Главная",  id:1 },
        { path:'/catalog', Component: CatalogPage, breadcrumb: props.item, id:2 },
        { path:"/", Component: MainPage, breadcrumb: "Главная", id:3 },
        { path:"*", Component: ErrorPage, id:4 },
        { path:"/about", Component: About, id:5 },
        { path:"/delivery", Component: Delivery, id: 6 },
        { path:"/payment", Component: Payment, id: 7 },
        { path:"/order", Component: OrderPage, breadcrumb:"Корзина", id:8 },
        { path:"/product/:id", Component: ProductPage, breadcrumb: catalogHead, id:9 },
        { path:"/product", Component: ProductPage, breadcrumb: props.item, id:10 },
        
    ]

    const breadcrumbs = useBreadcrumbs(routes);
    

    return (
        <ul style={{ marginTop: "20px", marginLeft: "20px" }} className="breadcrumbs">
            {breadcrumbs.map(({match,breadcrumb}) => {
                return   <li key = {match.pathname} className="breadcrumbs__item">
                            <Link to={match.pathname} className="breadcrumbs__name">{breadcrumb}</Link>
                        </li>        
            })}
        </ul>
    )

}
export default Breadcrumbs;