import React, { useState, useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "assets/css/CarDetail.css";
import {useNavigate} from 'react-router-dom'
import { isExpired, decodeToken } from "react-jwt";


function CarDetail() {
  let x = JSON.parse(localStorage.getItem("URtoken"))
    let myDecodeToken=decodeToken(x);
    
    

console.log(myDecodeToken);
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'grey',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  useEffect(() => {
    fetch(
      `http://vusalimanoff-001-site1.htempurl.com/api/cars/${searchParams.get(
        "id"
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCar(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(car);

  return (
    
    <div>
       <div >
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Formik
          initialValues={{
            
            cardnumber:"",
            month:"",
            year:"",
            cvv:""
          }}
          onSubmit={(val) => {
            let newUser = {
              appUserId:myDecodeToken.id,
              carId:car.id,
              isCard:true,
              owner:myDecodeToken.username,
              cartNumber:Number(val.cardnumber),
              cartMonth:Number(val.month),
              cartYear:Number(val.year),
              cvv:Number(val.cvv),
              price:car.price,
              companyId:car.companyId,
            };

            fetch(
              "http://vusalimanoff-001-site1.htempurl.com/api/orders/order",
              {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
              }
            ).then((resp) => console.log(resp.status));
          }}
        >
          <Form className="login-frm">
            
            
            <div className="field-div">
              <label htmlFor="cardnumber">Cart Number</label>
              <Field className="inp-log" type="text" name="cardnumber" />
            </div>
            <div className="field-div">
              <label htmlFor="month">Month</label>
              <Field className="inp-log" type="text" name="month" />
            </div>
            <div className="field-div">
              <label htmlFor="year">Year</label>
              <Field className="inp-log" type="text" name="year" />
            </div>
            <div className="field-div">
              <label htmlFor="cvv">CVV</label>
              <Field className="inp-log" type="text" name="cvv" />
            </div>
            <input
              onClick={()=>handleClose()}
              className="inp-sub"
              type="submit"
              value="Order Complete"
            />
          </Form>
        </Formik>
        </Box>
      </Modal>
    </div>
      {car && (
        <div className="for-img-details">
          <img
            src={`http://vusalimanoff-001-site1.htempurl.com/uploads/${
              car && car.image
            }`}
            alt=""
          />
        </div>
      )}

      <div>
        <div className="container">
          <div className="alldetail d-flex">
            <div className="leftdetail col-6">
              <div className="headerdetail">
                <h1>
                  {car && car.brandName} {car && car.modelName}
                </h1>
              </div>
              <div>
                <p className="description">Description:</p>
                <h2>{car && car.description}</h2>
              </div>
              <div className="company"><span className="spancolor">Company: </span>{car && car.companyName}</div>
              <div className="platename"><span className="spancolor">Plate: </span>{car && car.plate}</div>
              <div className="brand"><span className="spancolor">Brand: </span>{car && car.brandName}</div>
              <div className="model"><span className="spancolor">Model: </span>{car && car.modelName}</div>
              <div className="category"><span className="spancolor">Category: </span>{car && car.categoryName}</div>
              <div className="transmission">
                <span className="spancolor">Transmission: </span>{car && car.transmissionName}
              </div>
              <div className="fuel"><span className="spancolor">Fuel: </span>{car && car.fuelName}</div>
              <div className="year"><span className="spancolor">Production Year: </span>{car && car.year}</div>
              <div className="engine"><span className="spancolor">Engine: </span>{car && car.engineName}</div>
              <div className="fuel"><span className="spancolor">Fuel: </span>{car && car.fuelName}</div>
            </div>
            <div className="rightdetail col-4 text-end">
            <div className="mb-4"><button className="addfavourite" type="submit">Add To Favourite</button></div>
              <div><button onClick={handleOpen} className="addorder" type="submit">Order</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
