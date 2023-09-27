import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { supabase } from "../../apis/supabaseApi";
import { format } from 'date-fns';


export const Orders = () => {

    const activeUser = useSelector((state) => state.user);
    const [orders, setOrders] = useState([]);
    const [toggle, setToggle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const parseDate = (date) => {
        const dateTime = new Date(date);
        const formattedDate = format(dateTime, 'MM/dd/yyyy');
        const formattedTime = format(dateTime, 'HH:MM');

        console.log(formattedDate + formattedTime);

        return formattedDate + " @ " + formattedTime;
    }

    useEffect(() => {

        getOrderByUserId();
    
    }, [activeUser.userId])

    async function getOrderByUserId(){

        const { data , error } = await supabase.from('orders').select().eq('userId', activeUser.userId); 
        setOrders(data);

        setTimeout(() => {
            setIsLoading(false);
        }, 1500)

        if(error){
            console.error("Error retrieving orders: ", error);
        }
    }

    const handleToggle = (orderId) => {
       setToggle((prev) => ({
        ...prev,
        [orderId]: !prev[orderId]
       }));
    };

    const DetailedView = ({order}) => {
        if(toggle[order.id]){
            
            const view = order.products.map((product, i) => (
                
                <div key={`${order.id}-${i}`} className="row">

                    <div className="col-md-8 col-lg-9">
                        <p>{i+1}. {product.productName}</p>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <p>${product.price}</p>
                    </div>
                </div>
            ))
            
            return view;
        } 

        return <p>...</p>
    }


    return(
        
        <div className="container">
            <section>
                <h1 className="text-center">Your Order History</h1>
                <p className="text-center">Below is a list of your past orders. You can view details of each order by clicking on the order ID.</p>
            </section>
            <br/>

            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            ):(
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
                                            <button className="btn btn-link" type="button" onClick={() => handleToggle(order.id)}>{order.id}</button>
                                        </th>

                                        <td>{parseDate(order.date)}</td>
                                        <td>{order.products.length}</td>

                                        {order.totalPrice > 2000 ? (
                                            <td>${(order.totalPrice * 0.9).toFixed(2)}</td>
                                        ) : (
                                            <td>${order.totalPrice}</td>
                                        )}

                                        <td>
                                            <DetailedView order={order}/>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                </section>

            )}

            

        
        </div>
    );  



}