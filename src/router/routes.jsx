import Products from '../pages/product/ProductsPage';
import MainPage from './../pages/main/MainPage';
import ErrorPage from '../pages/error/ErrorPage';
import About from '../pages/about/About';
import Delivery from '../pages/delivery/Delivery';
import Payment from '../pages/payment/Payment';
import OrderPage from './../pages/order/OrderPage';


export const router = [
    {path:'/main', Component: MainPage},
    {path:'/product', Component: Products},
    {path:"/", Component: MainPage},
    {path:"*", Component: ErrorPage},
    {path:"/about", Component: About},
    {path:"/delivery", Component: Delivery},
    {path:"/payment", Component: Payment},
    {path:"/order", Component: OrderPage}

]