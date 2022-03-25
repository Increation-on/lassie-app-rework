import MainPage from './../pages/main/MainPage';
import ErrorPage from '../pages/error/ErrorPage';
import About from '../pages/about/About';
import Delivery from '../pages/delivery/Delivery';
import Payment from '../pages/payment/Payment';
import OrderPage from './../pages/order/OrderPage';
import CatalogPage from '../pages/catalog/CatalogPage';
import ProductPage from '../pages/product/ProductPage';



export const router = [
    { path:'/main', Component: MainPage,  id:1 },
    { path:'/catalog', Component: CatalogPage, id:2 },
    { path:"/", Component: MainPage, id:3 },
    { path:"*", Component: ErrorPage, id:4 },
    { path:"/about", Component: About, id:5 },
    { path:"/delivery", Component: Delivery, id: 6 },
    { path:"/payment", Component: Payment, id: 7 },
    { path:"/order", Component: OrderPage, id:8 },
    { path:"/product/:id", Component: ProductPage, id:9 },
    { path:"/product", Component: ProductPage, id:10 },
    
]


