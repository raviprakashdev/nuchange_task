import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const productDetail = (props) => {
   const { name, id, price, available, category, vendor } = props.location.state.product;
  return (
      <div className="main">
          <div className="ui card centered">
              <div className="image">
                  <img src={user} alt="user" />
              </div>
              <div className="content">
                  <div className="header">Name:- {name}</div>
                  <div className="description">Price:- {price}</div>
                  <div className="description">Available:- {available}</div>
                  <div className="description">Category:- {category}</div>
                  <div className="description">Vendor:- {vendor}</div>
              </div>
          </div>
          <div className="center-div">
              <Link to="/">
                  <button className="ui button blue center">
                      Back to product List
                  </button>
              </Link>
          </div>
      </div>
  );
};

export default productDetail;
