import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./productCard";

const ProductList = (props) => {
    console.log(props);
    const inputEl = useRef("");

    const deleteConactHandler = (id) => {
        props.getproductId(id);
    };

    const renderproductList = props.products.map((product) => {
        return (
            <ProductCard
                product={product}
                // clickHander={deleteConactHandler}
                key={product.id}
            />
        );
    });
    const getSearchterm = () => {
        props.searchKeyWord(inputEl.current.value);
    };
    return (
        <div className="main">
            <div className="ui search">
                <div className="ui icon input">
                    <input
                        ref={inputEl}
                        type="text"
                        placeholder="Search products"
                        className="prompt"
                        value={props.term}
                        onChange={getSearchterm}
                    />
                    <i className="search-icon"></i>
                </div>
            </div>
            <div className="ui celled list">{renderproductList.length > 0
                ? renderproductList
                : "No products Available"}</div> 
        </div>
    );
};

export default ProductList;
