import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { add } from "../../redux/cartSlice";
import { supabase } from "../../apis/supabaseApi";
import { SearchBar } from "./SearchBar";

export const ProductList = ({closeAlert}) => {

    // Begin with an empty state of products
    const [productList, setProductList] = useState([]);
    const [search, setSearch] = useState("");
    
    const dispatch = useDispatch();

    useEffect(()=> { 
        getProducts();
    }, [])

    useEffect(() => {
        console.log("Search: ", search)
    }, [search])

    async function getProducts(){
        const { data } = await supabase.from("products").select();
        setProductList(data);
    }
    
    const addToCart = (product) => {
        closeAlert();

        const productWithQuantity = {
            ...product,
            quantity: 1,
        };
        dispatch(add(productWithQuantity));
    }

    const StockView = ({product}) => {
        if(product.stock){
            return (
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <button id="addToCart" className="btn d-flex" onClick={() => addToCart(product)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>
                    </button>
        
                    <div className="text-muted pt-3">Stock: {product.stock}</div>
                </div>
            )
        } else {

            return(
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <button id="addToCart" className="btn d-flex" onClick={() => addToCart(product)} disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>
                    </button>

                    <div className="text-muted pt-3">Out of Stock</div>
                </div>

            )
        }
    }

    const ShowLoader = () => {
        if(productList.length === 0){
            return (

                <div className="d-flex justify-content-center">
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
                
            )
        }
    }

    return(
        <>

            
            <div className="d-flex justify-content-between">
                <div>
                    <h1>Our Products</h1>
                </div>
                <div>
                    <SearchBar setSearch={setSearch}/>
                </div>
            </div>

                <ShowLoader/>

            {
                productList.filter((product) => {
                    if(search === ""){
                        return product;
                    } else if (product.productName.toLowerCase().includes(search.toLowerCase())){
                        return product;
                    }
                }).map((product) => (
                    <div key={product.id} id="productCard" className="card text-start text-center m-3 align-content-center rounded-4" style={{width: "18.5rem"}}>
                            <div className="product-image-container card-header">
                                <img className="card-img-top pt-2 rounded-4" src={product.image} alt="Title" style={{height: "15rem"}}/>
                            </div>
                            <div className="card-body">
                                <h4 id="productName" className="card-title" style={{color: "#3D2813"}}>{product.productName}</h4>
                                <p className="card-text text-muted">{product.description}</p>
                            </div>
                            <div className="card-footer pt-3">
                                <h5 className="card-text" >${product.price}</h5>
                                <StockView product={product}/>
                            </div>
                        </div>
                ))
            }           
          
        </>
    );
}