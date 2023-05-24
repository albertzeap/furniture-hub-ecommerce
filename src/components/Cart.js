import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { remove, empty } from "../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import OrderApi from "../apis/OrderApi";

export const Cart = () => {

    const [orderList, setOrderList] = useState([]);
    const cartList = useSelector((state) => state.cartList);
    const activeUser = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        OrderApi.getOrders(setOrderList);
    },[])

    const removeFromCart = (product) => {
        alert(product.productName);
        dispatch(remove(product));

        console.log(cartList);
    }

    const handleCheckout = () => {
        let id = orderList.length + 1;
        if(id === orderList.length || cartList.totalPrice === 0){
            alert("Cart is empty");
        } else{
            
            OrderApi.createOrder(id, activeUser.userId, new Date().toLocaleDateString("en-US"),cartList.products, cartList.totalPrice);
            dispatch(empty());

            setTimeout(() => {
                navigate("/orderSummary")
            }, 1000);
        }
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
                                            <h5 className="mb-0">${product.price}.00</h5>
                                        </div>
                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <button className="btn btn-danger" onClick={() => removeFromCart(product)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash2-fill" viewBox="0 0 16 16">
                                                    <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
                                                </svg>
                                            </button>
                                        
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        
                    } 

                    

                    <div className="card sticky-bottom">
                        <div className="card-body">
                            <div className="row d-flex justify-content-between">
                                <h5 className="text-muted">Total Price: <span className="text-black">${cartList.totalPrice}.00</span></h5>
                            </div>
                            <br/>
                            <div className="row d-flex justify-content-between align-items-center">
                                {activeUser.userId === 0 ? <Link to="/login" className="btn btn-primary btn-block btn-lg">Proceed to Pay</Link> : <button onClick={handleCheckout} className="btn btn-primary btn-block btn-lg">Proceed to Pay</button> }
                                
                            </div>
                        </div>
                    </div>     
                </div>


            </div>    
            
        </div>
    );
}