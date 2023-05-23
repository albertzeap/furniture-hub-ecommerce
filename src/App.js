import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Cart } from "./components/Cart";


import 'bootstrap/dist/css/bootstrap.css';
import { OrderSummary } from "./components/OrderSummary";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        
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
