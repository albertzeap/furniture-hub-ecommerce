import React, { useEffect, useState } from "react";
import OrderApi from "../apis/OrderApi";

export const Orders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // OrderApi.getOrder(setOrderList, 1);

    }, [])


    return(
        <div className="container py-5 h-100">
           
        </div>
    );  



}