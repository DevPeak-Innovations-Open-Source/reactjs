import React from "react";
import "./Gridcard.css";
import { assets } from "../../assets/assets";
import view from "../../assets/view.png";
import download from "../../assets/download.png";
import move from "../../assets/Move.png";

const productmenu = [
  {
    menuitem: "View",
    menuimg: view,
  },

  {
    menuitem: "Download",
    menuimg: download,
  },

  {
    menuitem: "Move",
    menuimg: move,
  },
];


const Gridcard = ({ product }) => {
  //  const {id,title} = product;

  return (
    <div className="grid-container">
      <div className="grid-item">
        <div className="white-box"></div>
        <div className="product-content" key={product.id}>
          <div className="product-info">
            <img
              className="product-img"
              src={assets.productimg}
              alt="product img"
            ></img>
            <span className="product-name">{product.title}</span>
          </div>
          <div className="product-menu">
            <img
              src={assets.productmenu}
              alt="product menu"
              className="menu-img"
            ></img>

            <div>

            {productmenu.map((item, index) => {
              return (
                <div className="hover-menu" key={index}>
                  <div className="menu">
                    <img
                      src={item.menuimg}
                      alt={item.menuitem}
                      className="dropdrownimg"
                    />
                    {item.menuitem}
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gridcard;
