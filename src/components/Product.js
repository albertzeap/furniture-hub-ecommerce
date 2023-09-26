import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { ProductList } from "./ProductList";



import "../styles/theme.css"


export const Product = () => {

    const [show,setShow] = useState(false);

    const AddedModal = () => {
        if(show){
            return (
                <div className="row sticky-top">
                    <div className="col"></div>
                    <div className="col">
                        <Alert variant="success" onClose={() => setShow(false)} dismissible>
                            <Alert.Heading>Added to cart</Alert.Heading>
                        </Alert>
                    </div>
                    <div className="col"></div>
                </div>
            )
        }
    }
 
    return (
        <div className="container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="text-center">Welcome to Our Furniture Store</h1>
                    <p className="text-center">Discover the best quality furniture for your home.</p>
                </div>
            </section>
            <br/>
            <br/>
            <section>
                <h2 className="text-center">Our Products</h2>
            </section>
                <AddedModal/>
            <div className="row justify-content-center">
                <ProductList setShow={setShow}/>
            </div>
        </div>
    );
}