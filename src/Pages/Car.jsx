import React, { useEffect, useState } from "react";
import "assets/css/Car.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Car() {
  const [cars, setCars] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    axios
      .get("http://vusalimanoff-001-site1.htempurl.com/api/Cars/getcars")
      .then((resp) => setCars(resp.data));
  }, []);
  
  const handleClick = (e) => {
    console.log(e);
    navigate(`/cardetail?id=${e}`)
  }
  console.log(cars);
  return (
    <div className="cars">
      <div className="contact-img">
        <h1>Car List Right Sidebar</h1>
        <p>
          This is sample of page tagline and you can set it up using page option
        </p>
      </div>
      <div className="car-content">
        <div className="all-cars">
          {cars &&
            cars.map((e) => {
              return (
                <div className="">
                  <div className="car  ">
                  <div onClick={()=>handleClick(e.id)} className="car-img">
                    <img
                      src={`http://vusalimanoff-001-site1.htempurl.com/uploads/${e.image}`}
                      alt=""
                    />
                  </div>
                  <div className="car-about">
                    <div className="car-name">
                      <h3>{e.plate}</h3>
                    </div>
                    <div className="car-price">
                      {e.discountPrice > 0 ? (
                        <>
                        <h2 className="discount"> {e.price}$ </h2>
                        <h2 className="price"> {e.discountPrice}$ </h2>
                        </>
                      ) : <h2 className="price"> {e.price}$ </h2>}
                    </div>
                  </div>
                </div>
                </div>
              );
            })}
        </div>

        {/* <div className="intro-data">
          <div className="tips-blog">
            <h3>Rental Tips</h3>
            <div className="blog-sm-card">
              <div className="blog-sm-img">
                <img
                  src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/traffic-car-vehicle-black-150x150.jpg"
                  alt=""
                />
              </div>
              <div className="blog-sm-content">
                <p>America Car Rental Offers Lowest Car Rental Rates</p>
              </div>
            </div>
            <div className="blog-sm-card">
              <div className="blog-sm-img">
                <img
                  src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/pexels-photo-245374-150x150.jpeg"
                  alt=""
                />
              </div>
              <div className="blog-sm-content">
                <p>America Car Rental Offers Lowest Car Rental Rates</p>
              </div>
            </div>
            <div className="blog-sm-card">
              <div className="blog-sm-img">
                <img
                  src="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/road-people-street-smartphone-150x150.jpg"
                  alt=""
                />
              </div>
              <div className="blog-sm-content">
                <p>America Car Rental Offers Lowest Car Rental Rates</p>
              </div>
            </div>
          </div>

          <div className="blog-social">
            <div className="soc fb">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="soc twit">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="soc yt">
              <i className="fa-brands fa-youtube"></i>
            </div>
            <div className="soc yt">
              <i className="fa-brands fa-pinterest"></i>
            </div>
            <div className="soc insta">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Car;
