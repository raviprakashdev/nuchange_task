import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import ProductList from "./productList";
import productDetail from "./productDetail";

function App() {
    const LOCAL_STORAGE_KEY = "products";
    const [products, setproducts] = useState([
        {
            name: "Potato",

            id: 1,

            price: 30,

            available: 1,

            vendor: "Himachal Pvt Ltd",

            category: "Vegtables",
        },

        {
            name: "Banana",

            id: 2,

            price: 50,

            available: 1,

            category: "Fruits",

            vendor: "Organic farms",
        },

        {
            name: "Drumsticks",

            id: 3,

            price: 20,

            available: 0,

            category: "Vegetables",

            vendor: "Mallikarjuna farms",
        },

        {
            name: "Orange",

            id: 4,

            price: 25,

            available: 1,

            vendor: "Nagpur farms",

            category: "Fruits",
        },
    ]);
    const [searchTerm, setsearchterm] = useState("");
    const [searchResults, setsearchResults] = useState([]);

    const searchHandler = (searchTerm) => {
        setsearchterm(searchTerm);
        if (searchTerm !== "") {
            const newproductList = products.filter((product) => {
                return Object.values(product)
                    .join(" ")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });
            console.log(newproductList);
            setsearchResults(newproductList);
        } else {
            setsearchResults(products);
        }
    };

 

    useEffect(() => {
    }, [products]);

    return (
        <div className="ui container">
            <Router>
                <Header />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <ProductList
                                {...props}
                                products={
                                    searchTerm.length < 1
                                        ? products
                                        : searchResults
                                }
                                term={searchTerm}
                                searchKeyWord={searchHandler}
                            />
                        )}
                    />

                    <Route path="/product/:id" component={productDetail} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
