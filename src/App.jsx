import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/section/login/Login";
import Protect_router from "./protect_users/Protect_router";
import Home from "./components/comp/home/Home";
import Shop from "./components/comp/shop/Shop";
import Buy from "./components/comp/shop/Buy";
import Buys from "./components/comp/shop/Buys";
import Order from "./components/comp/shop/Order";
import Success from "./components/comp/shop/Success";
import ErrorPage from "./components/section/ErrorPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<Protect_router />}>
                    <Route element={<Main />}>
                        <Route path="/" element={<Home/>} />
                        <Route path="shop" element={<Shop/>} />
                        <Route path="/shop/buy-product" element={<Buy/>} />
                        <Route path="/shop/buy-products" element={<Buys/>} />
                        <Route path="shop/buy-product/order-now" element={<Order/>} />
                        <Route path="shop/buy-products/order-now" element={<Order/>} />
                        <Route path="shop/buy-product/success" element={<Success/>} />
                        <Route path="/contact" element={<h1>Contact page</h1>} />
                        <Route path="*" element={<ErrorPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;