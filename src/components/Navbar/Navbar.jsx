import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Wishlist from "components/Wishlist/Wishlist";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [resp, setResp] = useState("close");
  const [wish, setWish] = useState("open-wish");
  const navigate = useNavigate();

  const checkAccount = () => {
    let token = JSON.parse(localStorage.getItem("URtoken"));
    if (token !== null) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="nav-all">
      <div className="navbar">
        <i className="bi bi-list" onClick={() => setResp("open")}></i>
        <div onClick={()=> navigate("/")} className="nav-img">
          <img
            src="https://grandcarrentalv1.b-cdn.net/wp-content/themes/grandcarrental/images/logo@2x_white.png"
            alt=""
          />
        </div>
        <ul className="nav-ul">
          <Link to="/" className="nav-li">
            Home
          </Link>
          <Link to="/cars" className="nav-li">
            Cars
          </Link>
          <Link to='/brands' className="nav-li">Brands</Link>
          <Link to="/about" className="nav-li">
            About
          </Link>
          <Link to="/blog" className="nav-li">
            Blogs
          </Link>
          <Link to="/contact" className="nav-li">
            Contact
          </Link>
        </ul>
        <ul className="icon-ul">
          <li className="nav-li">
            <i
              className="bi bi-heart"
              onClick={() =>
                wish === "open-wish"
                  ? setWish("close-wish")
                  : setWish("open-wish")
              }
            ></i>
            <Wishlist wish={wish} />
          </li>
          <li onClick={() => checkAccount()} className="nav-li">
            <i className="bi bi-person-circle"></i>
          </li>
        </ul>
        <div className={`responsiv-nav ${resp}`}>
          <ul className="resp-ul">
            <Link to="/" className="resp-li">
              Home
            </Link>
            <Link to="/cars" className="resp-li">
              Carsfdfsadfasf
            </Link>
            <Link to="/Brand" className="resp-li">
              Brands
            </Link>
            <Link to="/about" className="resp-li">
              About
            </Link>
            <Link to="/blog" className="resp-li">
              Blogs
            </Link>
            <Link to="/contact" className="resp-li">
              Contact
            </Link>
          </ul>
          <i
            onClick={() => setResp("close")}
            className="bi bi-x-square-fill"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
