import React, { useEffect, useState } from "react";
import OrderApi from "../apis/OrderApi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Orders = () => {

    const activeUser = useSelector((state) => state.user);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        OrderApi.getOrderByUserId(setOrders, activeUser.userId);

    }, [])


    return(
        
        <div className="container py-5 h-100">
            <section>
                <h1 className="text-center">Your Orders</h1>
            </section>
           <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Items Bought</th>
                    <th scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                 
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <th scope="row"><button className="btn btn-link">{order.id}</button></th>
                            <td>{order.date}</td>
                            <td>{order.products.length}</td>
                            {order.totalPrice > 2000 ? <td>${order.totalPrice * 0.9}.00</td> : <td>${order.totalPrice}.00</td> }
                            
                        </tr>
                    ))}

                </tbody>
            </table>

        
        </div>
    );  



}