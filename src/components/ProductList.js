import React, { useEffect, useState } from "react";
import ProductApi from "../apis/ProductApi";

import { useSelector, useDispatch } from 'react-redux'
import { add } from "../redux/cartSlice";

import "../styles/theme.css"

export const ProductList = () => {

    // Begin with an empty state of products
    const [productList, setProductList] = useState([]);

    useEffect(()=> {
        
        ProductApi.getProducts(setProductList);
        console.log("This component has mounted!");
    }, [])

    const cart = useSelector((state) => state.cartList);
    const dispatch = useDispatch();

    const addToCart = (product) => {
        alert("Added " + product.productName);
        dispatch(add(product));

        console.log(cart)
    }

    return(
        <div className="container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="text-center">Welcome to Our Furniture Store</h1>
                    <p className="text-center">Discover the best quality furniture for your home.</p>
                </div>
            </section>
            <br/>
            <br/>
            <section>
                <h2 className="text-center">Our Products</h2>
            </section>

            <div className="row justify-content-center">

              
                {
                    productList.map((product) => (

                        <div key={product.id} id="productCard" className="card text-start text-center m-3 align-content-center" style={{width: "18rem"}}>
                            <img className="card-img-top" src={product.image} alt="Title" style={{height: "15rem"}}/>
                            <div className="card-body">
                                <h4 id="productName" className="card-title" style={{color: "#3D2813"}}>{product.productName}</h4>
                                <p className="card-text text-muted" style={{height: "5rem"}}>{product.description}</p>
                                <h5 className="card-text" >${product.price}.00</h5>
                                <button id="addToCart" className="btn" onClick={() => addToCart(product)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                </svg>
                                </button>
                            </div>
                        </div>
                        
                    ))
                }                
            </div>
        </div>
    );
}