import MainPage from './../pages/main/MainPage';
import ErrorPage from '../pages/error/ErrorPage';
import About from '../pages/about/About';
import Delivery from '../pages/delivery/Delivery';
import Payment from '../pages/payment/Payment';
import OrderPage from './../pages/order/OrderPage';
import CatalogPage from '../pages/catalog/CatalogPage';
import ProductPage from '../pages/product/ProductPage';
import ProductCard from '../pages/main/Content/ProductCard';


export const router = [
    { path:'/main', Component: MainPage },
    { path:'/catalog', Component: CatalogPage },
    { path:"/", Component: MainPage },
    { path:"*", Component: ErrorPage },
    { path:"/about", Component: About },
    { path:"/delivery", Component: Delivery },
    { path:"/payment", Component: Payment },
    { path:"/order", Component: OrderPage },
    { path:"/product/:id", Component: ProductPage },
    { path:"/card", Component: ProductCard }

]