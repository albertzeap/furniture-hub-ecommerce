import React, { useEffect, useState } from "react";
import OrderApi from "../apis/OrderApi";

export const OrderSummary = () => {

    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        OrderApi.getOrderByUserId(setOrderList, 1);

    }, [])


    return(
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-8 col-xl-6">
                    <div className="card border-top border-bottom border-3" >
                        <div className="card-body p-5">

                            <p className="lead fw-bold mb-5">Purchase Reciept</p>

                            <div className="row">
                                <div className="col mb-3">
                                    <p className="small text-muted mb-1">Date</p>
                                    {orderList.length > 0 ? <p>{orderList[orderList.length - 1].date}</p> :<p>...</p> }
                                </div>
                                <div className="col mb-3">
                                    <p className="small text-muted mb-1">Order No.</p>
                                    {orderList.length > 0 ? <p>{orderList[orderList.length - 1].id}</p> :<p>...</p> }
                                </div>
                            </div>

                            <div className="mx-n5 px-5 py-4" >

                                {orderList.length > 0 ? orderList[orderList.length - 1].products.map((product,i) => (
                                    <div key={i} className="row">
                                    <div className="col-md-8 col-lg-9">
                                        <p>{product.productName}</p>
                                    </div>
                                    <div className="col-md-4 col-lg-3">
                                        <p>${product.price}.00</p>
                                    </div>
                                </div>
                                )) : <></>}
                                {/* <div className="row">
                                    <div className="col-md-8 col-lg-9">
                                        <p>BEATS Solo 3 Wireless Headphones</p>
                                    </div>
                                    <div className="col-md-4 col-lg-3">
                                        <p>$299.99</p>
                                    </div>
                                </div> */}
                                {/* <div className="row">
                                    <div className="col-md-8 col-lg-9">
                                        <p className="mb-0">Shipping</p>
                                    </div>
                                    <div className="col-md-4 col-lg-3">
                                        <p className="mb-0">£33.00</p>
                                    </div>
                                </div> */}
                            </div>

                            <div className="row my-4">
                                <div className="col-md-4 offset-md-8 col-lg-3 offset-lg-9">
                                    {orderList.length > 0 ? <p className="lead fw-bold mb-0">${orderList[orderList.length - 1].totalPrice}.00</p> : <p>...</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  



}