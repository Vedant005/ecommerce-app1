import React, { useContext } from "react";

import "./Product.css"

import { FaHeart } from "react-icons/fa6";
import {  useWish } from "../contexts/WishlistContext.js";
import {  useNavigate} from "react-router-dom";
import { CartContext } from "../contexts/CartContext.js";
export default function Product({product}){
   const {addToCart}= useContext(CartContext);
    // const {singleProduct}= useProduct()
   
     const {addToWishListHandler}=useWish(); 
   const {
    _id,
    title,
  
    price,
   
    img
  } = product
  const navigate=useNavigate();

    return(
        <div >
         
            <div className="product-container"
            key={_id}
            >
                   
           
                   {/* <span className="wishlist-icon">
                        <FaHeart/>
                    </span> */}
            
                <div className="card-img"
                 
                 >
                    
                     <img className="image-tag" 
                     src={`${img}`} alt="product"
                     onClick={() => navigate(`/product/${_id}`)} />

                  <button className="wishlist-icon" onClick={()=>addToWishListHandler(product)}><FaHeart/></button>

                </div>
                                
            <div>
                <h2>{title}</h2>
                <p>
                  

                    <span className="stirke-through">{price} ||</span>
                    <span>% OFF</span>
                </p>
                {/* {cart.find((item) => item._id === product._id) ? <div className="addToCartBtn" >
                <button onClick={()=>navigate("/cart")} className="goToCart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Go to Cart </button>
            </div> : <div className="addToCartBtn">
            <button onClick={addtoCart}>Add To Cart</button>
                         </div>
                                                } */}
                  
                  {/* <div>
                    <button onClick={addtoCart}>Add to cart</button>
                  </div>

            */}

            <button onClick={()=>addToCart(product)}>Add to cart</button>
            </div>
               </div>
            </div>
            
              
            
    )
              }