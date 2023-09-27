import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { supabase } from "../apis/supabaseApi";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';


export const Orders = () => {

    const activeUser = useSelector((state) => state.user);
    const [orders, setOrders] = useState([]);
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();

    const checkIsValid = () => {
        console.log(activeUser.id);
        if(!activeUser.id){
            navigate("/");
        }
    }

    const parseDate = (date) => {
        const dateTime = new Date(date);
        const formattedDate = format(dateTime, 'MM/dd/yyyy');
        const formattedTime = format(dateTime, 'HH:MM');

        console.log(formattedDate + formattedTime);

        return formattedDate + " @ " + formattedTime;
    }

    useEffect(() => {

        // checkIsValid();
        getOrderByUserId();
    
    }, [activeUser.userId])

    async function getOrderByUserId(){

        const { data , error } = await supabase.from('orders').select().eq('userId', activeUser.userId); 
        setOrders(data);

        if(error){
            console.error("Error retrieving orders: ", error);
        }
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }


    return(
        
        <div className="container">
            <section>
                <h1 className="text-center">Your Order History</h1>
                <p className="text-center">Below is a list of your past orders. You can view details of each order by clicking on the order ID.</p>
            </section>
            <br/>
            <section>
                <table id="orderHistoryTable" className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Items Bought</th>
                            <th scope="col">Total Price</th>
                            <th scope="col">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <th scope="row">
                                    <button className="btn btn-link" onClick={handleToggle}>{order.id}</button>
                                </th>

                                <td>{parseDate(order.date)}</td>
                                <td>{order.products.length}</td>

                                {order.totalPrice > 2000 ? (
                                <td>${order.totalPrice * 0.9}</td>
                                ) : (
                                <td>${order.totalPrice}</td>
                                )}

                                {toggle === true ? (
                                <td>

                                    {order.products.map((product, i) => (
                                    <div key={i} className="row">

                                        <div className="col-md-8 col-lg-9">
                                            <p>{i+1}. {product.productName}</p>
                                        </div>

                                        <div className="col-md-4 col-lg-3">
                                            <p>${product.price}</p>
                                        </div>
                                    </div>
                                    ))}
                                </td>
                                ) : (
                                <td>...</td>
                                )}
                            </tr>
                            ))}

                        </tbody>
                    </table>
            </section>

            

        
        </div>
    );  



}