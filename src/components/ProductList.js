import React, { useEffect, useState } from "react";
import ProductApi from "../apis/ProductApi";

import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from "../redux/cartSlice";

export const ProductList = () => {

    // Begin with an empty state of products
    const [productList, setProductList] = useState([]);

    useEffect(()=> {
        
        ProductApi.getProducts(setProductList);
        console.log("This component has mounted!");
    }, [])

    const cart = useSelector((state) => state.cartList.value);
    const dispatch = useDispatch();

    const addToCart = (product) => {
        alert(product.productName);
        dispatch(add());

        console.log(cart)
    }

    return(
        <div className="container">
            <section>
                <h1 className="text-center">Product View</h1>
                <h1 className="text-center">{cart}</h1>

            </section>

            <div className="row justify-content-center">

              
                {
                    productList.map((product) => (

                        <div key={product.id} className="card text-start text-center m-3" style={{width: "18rem"}}>
                            <img className="card-img-top" src={product.image} alt="Title" style={{height: "15rem"}}/>
                            <div className="card-body">
                                <h4 className="card-title">{product.productName}</h4>
                                <p className="card-text" style={{height: "5rem"}}>{product.description}</p>
                                <p className="card-text">${product.price}</p>
                                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to cart</button>
                            </div>
                        </div>
                        
                    ))
                }                
            </div>
        </div>
    );
}