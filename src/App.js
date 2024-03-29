import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Cart } from "./components/Cart";
import { ActiveNavbar } from "./components/navbar/ActiveNavbar";
import { OrderSummary } from "./components/order/OrderSummary";
import { Product } from "./components/product/Product";
import { Orders } from "./components/order/Orders";

import { useSelector } from 'react-redux'


import 'bootstrap/dist/css/bootstrap.css';
import '../src/styles/theme.css'


// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {

  const activeUser = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <div className="app">
        {activeUser.userId === 0 ? <Navbar/> : <ActiveNavbar/> }
        
        <Routes>
          <Route path="/" exact element={<Product/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/orderSummary" element={<OrderSummary/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>




      </div>


    </BrowserRouter>
  );
}

export default App;
