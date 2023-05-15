import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";
import { Register } from "./components/Register";
import { Login } from "./components/Login";


import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
      </div>


      <Routes>
        <Route path="/" exact element={<ProductList/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
