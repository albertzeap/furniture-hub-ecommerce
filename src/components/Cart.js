import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { remove } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export const Cart = () => {

    const[cart, setCart] = useState([]);
    const cartList = useSelector((state) => state.cartList);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(cartList);
    },[])

    const removeFromCart = (product) => {
        alert(product.productName);
        dispatch(remove(product));

        console.log(cartList);
    }


    return(
        <div className="container">
            <section>
                <h1 className="text-center">Your Cart</h1>
            </section>

            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-10">

               
                    {
                        
                        cartList.products.map((product, i) => (
                            
                            <div key={i} className="card rounded-3 mb-4">
                                <div className="card-body p-4">
                                    <div className="row d-flex justify-content-between align-items-center">
                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                            <img
                                                src={product.image}
                                                className="img-fluid rounded-3" 
                                                alt="Cotton T-shirt"
                                            />
                                        </div>

                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                            <p className="lead fw-normal mb-2">{product.productName}</p>
                                            <p><span className="text-muted">{product.description}</span></p>
                                        </div>
                                    
                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 className="mb-0">${product.price}</h5>
                                        </div>
                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                            {/* <button className="btn btn-danger" onClick={() => removeFromCart(product)}>Remove</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        
                    } 

                    

                    <div className="card sticky-bottom">
                        <div className="card-body">
                            <div className="row d-flex justify-content-between">
                                <h5 className="text-muted">Total Price: <span className="text-black">${cartList.totalPrice} </span></h5>
                            </div>
                            <br/>
                            <div className="row d-flex justify-content-between align-items-center">
                                <Link to="/orderSummary" className="btn btn-primary btn-block btn-lg">Proceed to Pay</Link>
                            </div>
                        </div>
                    </div>     
                </div>


            </div>    
            
        </div>
    );
}