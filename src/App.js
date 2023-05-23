import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Cart } from "./components/Cart";
import { ActiveNavbar } from "./components/ActiveNavbar";
import { OrderSummary } from "./components/OrderSummary";

import { useSelector, useDispatch } from 'react-redux'


import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {

  const activeUser = useSelector((state) => state.user);
  console.log(activeUser);

  return (
    <BrowserRouter>
      <div className="app">
        {activeUser.userId == 0 ? <Navbar/> : <ActiveNavbar/> }
        
        <Routes>
          <Route path="/" exact element={<ProductList/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/orderSummary" element={<OrderSummary/>}/>
        </Routes>




      </div>


    </BrowserRouter>
  );
}

export default App;
