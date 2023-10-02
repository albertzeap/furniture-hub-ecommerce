import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { ProductList } from "./ProductList";

export const Product = () => {

    const [show,setShow] = useState(false);

    const closeAlert = () => {
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 700)
    }

    const AddedModal = () => {
        if(show){
            return (
                <div className="row fixed-top">
                    <div className="col"></div>
                    <div className="col">
                        <Alert className="slide-in-top" variant="success" show={show} onClose={() => setShow(false)} dismissible >
                            <Alert.Heading>Added to cart</Alert.Heading>
                        </Alert>
                    </div>
                    <div className="col"></div>
                </div>
            )
        }
    }
 
    return (
        <div className="container py-4">
            <section className="hero-section py-4">
                <div className="hero-content">
                    <h1 className="text-center">Welcome to Our Furniture Store</h1>
                    <p className="text-center">Discover the best quality furniture for your home.</p>
                </div>
            </section>
            <AddedModal/>
            <div className="row justify-content-center">
                <ProductList closeAlert={closeAlert}/>
            </div>
        </div>
    );
}