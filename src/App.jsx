import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/section/login/Login";
import Protect_router from "./protect_users/Protect_router";
import Home from "./components/comp/home/Home";
import Shop from "./components/comp/shop/Shop";

function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<Protect_router />}>
                    <Route element={<Main />}>
                        <Route path="/" element={<Home/>} />
                        <Route path="shop" element={<Shop/>} />
                        <Route path="/contact" element={<h1>Contact page</h1>} />
                        <Route path="*" element={<h1>Page Not  </h1>} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;