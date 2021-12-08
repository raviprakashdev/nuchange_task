import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ProductCard = (props) => {

   const addToCart = () => {
     alert("you have added :-"+name+ " to cart ");
     
   };

    const { name,id,price,available,category,vendor } = props.product;
    return (
        <div className="item">
            <img className="ui  image" src={user} alt="user" />
            <div className="content">
                <Link
                    to={{
                        pathname: `/product/${id}`,
                        state: { product: props.product },
                    }}
                >
                    <div className="header">Name: {name}</div>
                    <div>Price: {price}</div>
                    <div>Available: {available}</div>
                    <div>
                        Stock: {available > 0 ? "In Stock" : "Out Of Stock"}
                    </div>
                    <div>Category: {category}</div>
                    <div>Vendor: {vendor}</div>
                </Link>
            </div>
            <button
                className="ui button blue right"
                onClick={() => addToCart()}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
