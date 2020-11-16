import React from "react";
import Favourite from "../ReusableComponent/favourite";

export default function DisplayResults({ product_data }) {
  return (
    <>
      <div className="card" style={{ width: "19rem" }}>
        <img
          class="card-img-top"
          src={product_data.picture}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{product_data.name}</h5>
          <p className="card-text">{product_data.price}</p>
          <a href={product_data.url} className="btn btn-warning float-right">
            Buy
          </a>
          <a href={product_data.url} className="btn btn-primary float-right">
            Detail
          </a>
          <Favourite/>
        </div>
      </div>
    </>
  );
}

