import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { add } from "../redux/cartSlice";
import { supabase } from "../apis/supabaseApi";
import { SearchBar } from "./SearchBar";
import { Card, Placeholder } from "react-bootstrap";

export const ProductList = ({setShow}) => {

    // Begin with an empty state of products
    const [productList, setProductList] = useState([]);
    const [showProduct, setShowProduct] = useState(false);
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
        setTimeout(() => {
            setShowProduct(true);
        },500)
    }
    
    const addToCart = (product) => {
        setShow(true);
        dispatch(add(product));
    }

    const StockView = ({product}) => {
        if(product.stock){
            console.log("We have stock")
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
                    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
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
                    <div key={product.id} id="productCard" className="card text-start text-center m-3 align-content-center" style={{width: "18.5rem"}}>
                            
                            <img className="card-img-top" src={product.image} alt="Title" style={{height: "15rem"}}/>
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


           
                        
            {/* <Card  className="text-center m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" style={{ height: '15rem' }} />
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                </Card.Body>
                <Card.Footer className="pt-3">
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                </Card.Footer>
            </Card> */}
            
                
                            
          
        </>
    );
}