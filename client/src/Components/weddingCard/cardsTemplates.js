import React from "react";
import "./weddingCard.css";
import "./imgs/1.jpg";
import { Link } from "react-router-dom";

const weddingCard = () => {
  return (
    <div className="row templates-container">
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <Link to={{ pathname: "/weddingCard" }}>
          <div className="template">
            <img src="/imgs/1.jpg" className="card-img-top" alt="" />
          </div>
        </Link>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <Link to={{ pathname: "/weddingCard" }}>
          <div className="template">
            <img src="/imgs/2.jpg" className="card-img-top" alt="" />
          </div>
        </Link>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <Link to={{ pathname: "/weddingCard" }}>
          <div className="template">
            <img src="/imgs/3.jpg" className="card-img-top" alt="" />
          </div>
        </Link>
      </div>
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <Link to={{ pathname: "/weddingCard" }}>
          <div className="template">
            <img src="/imgs/4.jpg" className="card-img-top" alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default weddingCard;
