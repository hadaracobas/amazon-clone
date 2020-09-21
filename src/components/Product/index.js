import React from "react";
import "./index.css";

function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>{" "}
      {/* end .product__info */}
      <img src={image} />
      <button type="button">Add to basket</button>
    </div>
  );
}

export default Product;
