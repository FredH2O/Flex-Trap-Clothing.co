import saleProducts from "./saleProduct";
import "./Sale.css";
import { shuffle } from "lodash";
import { useState, useEffect, useLayoutEffect } from "react";
function Sale({ onAddToCart }) {
  const [shuffledProducts, setShuffledProducts] = useState([]);
  useEffect(() => {
    setShuffledProducts(shuffle(saleProducts));
  }, []);
  return (
    <div className="container px-4 px-lg-5 mt-5 pt-5">
      <div
        id="card-container"
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center"
      >
        {shuffledProducts.map((item, index) => (
          <div
            id="card-container"
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            className="col mb-5"
            key={index}
          >
            <div className="card h-100">
              <img className="card-img-top" src={item.image} alt={item.title} />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{item.title}</h5>
                  <span className="price-tag old-price">€{item.oldPrice}</span>
                  <br />
                  <span className="price-tag new-price">€{item.newPrice}</span>
                </div>
                <div className="text-center description">
                  {item.description}
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <button
                    onClick={() => onAddToCart(item)}
                    type="button"
                    className="btn btn-success"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sale;
