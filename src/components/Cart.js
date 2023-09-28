import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { remove, empty, add } from "../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";

import Alert from 'react-bootstrap/Alert';
import { supabase } from "../apis/supabaseApi";

export const Cart = () => {

    // const [orderList, setOrderList] = useState([]);
    const [show, setShow] = useState(false);
    const cartList = useSelector((state) => state.cartList);
    const activeUser = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const addToCart = (product) => {
        // setShow(true);

        const productWithQuantity = {
            ...product,
            quantity: 1,
        };
        dispatch(add(productWithQuantity));
    }

    useEffect(() => {
        console.log(cartList);
    },[cartList, addToCart])


    const removeFromCart = (product) => {
        setShow(true);
        dispatch(remove(product));

        console.log(cartList);
    }

    const emptyCart = () => {
        dispatch(empty());
    }

    const handleCheckout = () => {
        if(cartList.totalPrice === 0){
            alert("Cart is empty");
        } else{
            
            createOrder();
            dispatch(empty());

            setTimeout(() => {
                navigate("/orderSummary")
            }, 1000);
          
        }
    }

    async function createOrder(){

        const { error } = await supabase.from('orders').insert({
            userId: activeUser.userId,
            products: cartList.products,
            totalPrice: cartList.totalPrice
        })

        if(error){
            console.error("Error processing order: ", error);
        }
        

    }


    return(
        <div className="container">
            <section>
                <h1 className="text-center">Your Cart</h1>
                <p className="text-center">Browse and manage items in your shopping cart. Review your selections, update quantities, and proceed to checkout to complete your purchase.</p>
            </section>
            <br/>
            {show === true ? 
                <div className="row sticky-top">
                    <div className="col"></div>
                    <div className="col">
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Removed from Cart</Alert.Heading>
                    </Alert>
                    </div>
                    <div className="col"></div>
                </div>
                :
                    <></>
                }

            <div className="row d-flex justify-content-center align-items-center">
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

                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <div className="d-flex justify-content-center">

                                                {/* <button className="btn border border-0 fw-bold">-</button> */}
                                                <input className="text-center form-control" type="number" min="0" max={product.stock} defaultValue={product.quantity} disabled />
                                                {/* <button className="btn border border-0 fw-bold" onClick={() => addToCart(product)}>+</button> */}
                                            </div>
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
                                <div className="d-flex justify-content-between">
                                    <h5 className="text-muted">Total Price: <span className="text-black">${(cartList.totalPrice).toFixed(2)}</span></h5>
                                    <button className="btn btn-danger" onClick={emptyCart}>Empty Cart</button>
                                </div>
                            </div>
                            <br/>
                            <div className="row d-flex justify-content-between align-items-center">
                                {activeUser.userId === 0 ? <Link id="checkoutButton" to="/login" className="btn btn-primary btn-block btn-lg">Proceed to Pay</Link> : <button id="checkoutButton" onClick={handleCheckout} className="btn btn-primary btn-block btn-lg">Proceed to Pay</button> }
                                
                            </div>
                        </div>
                    </div>     
                </div>


            </div>    
            
        </div>
    );
}