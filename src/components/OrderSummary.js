import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { supabase } from "../apis/supabaseApi";
import { format } from 'date-fns';

export const OrderSummary = () => {

    const [orderList, setOrderList] = useState([]);
    const [showOrder, setShowOrder] = useState(false);
    const activeUser = useSelector((state) => state.user);
    

    useEffect(() => {
        getOrderByUserId();
    }, [activeUser.userId])


    const parseDate = (date) => {
        const dateTime = new Date(date);
        const formattedDate = format(dateTime, 'MM/dd/yyyy');
        const formattedTime = format(dateTime, 'HH:MM');

        console.log(formattedDate + formattedTime);

        return formattedDate + " @ " + formattedTime;
    }

    async function getOrderByUserId(){

        const { data , error } = await supabase.from('orders').select().eq('userId', activeUser.userId); 
        setOrderList(data);

        setTimeout(()=> {
            setShowOrder(true);
        }, 2000)

        if(error){
            console.error("Error retrieving orders: ", error);
        }
    }

    return(
        <div className="container py-5 h-100">


            {showOrder ? (

                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-6">
                        <div id="summaryCard" className="card border-top border-bottom border-3" >
                            <div className="card-body p-5">

                                <p id="receipt"className="lead fw-bold mb-5">Order Summary</p>

                                <div className="row">
                                    <div className="col mb-3">
                                        <p className="small text-muted mb-1">Date</p>
                                        {orderList.length > 0 ? <p id="date">{parseDate(orderList[orderList.length - 1].date)}</p> :<p>...</p> }
                                    </div>
                                    <div className="col mb-3">
                                        <p className="small text-muted mb-1">Order No.</p>
                                        {orderList.length > 0 ? <p>{orderList[orderList.length - 1].id}</p> :<p>...</p> }
                                    </div>
                                </div>

                                <div className="mx-n5 px-5 py-4" >
                                    <div className="border-bottom mb-3">
                                        <p className="fw-bold">Products</p>
                                    </div>
                                    {orderList.length > 0 ? orderList[orderList.length - 1].products.map((product,i) => (
                                        <div key={i} className="row">
                                        <div className="col-md-8 col-lg-9">
                                            <p>{product.productName}</p>
                                        </div>
                                        <div className="col-md-4 col-lg-3">
                                            <p>${product.price}</p>
                                        </div>
                                    </div>
                                    )) : <></>}
                                
                                    <div className="row">
                                        <div className="col-md-8 col-lg-9">
                                            <p className="mb-0">Discount</p>
                                        </div>
                                        <div className="col-md-4 col-lg-3">
                                            {orderList.length > 0 ? <p className="mb-0">-${orderList[orderList.length - 1].totalPrice > 2000 ? orderList[orderList.length - 1].totalPrice * 0.1 : 0 }.00</p> : <p>...</p> }
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="row my-4">
                                    <div className="col-md-4 offset-md-8 col-lg-3 offset-lg-9">
                                        <strong>Total Price</strong>
                                        {orderList.length > 0 ? <p id="totalPrice" className="lead fw-bold mb-0">${orderList[orderList.length - 1].totalPrice > 2000 ? orderList[orderList.length - 1].totalPrice * 0.9 : orderList[orderList.length - 1].totalPrice  }</p> : <p>...</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ):(
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="loadingio-spinner-bean-eater-4fuw7dno1rg"><div className="ldio-4oz2t7k5bu4">
                    <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
                    </div></div>

                    <p>Processing your order...</p>

                </div>
            )}
        </div>
    );  



}