import React from "react";
import "assets/css/Register.css";
import { Formik, Form, Field } from "formik";
// import axios from "axios";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <div className="register">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "white",
            border: "2px solid #fff",
            borderRadius:"3px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirmation Email
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please Click Confim Message in Your Email. Then you enter your profile successfully
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <button className="lgn-btn" onClick={()=>navigate("/login")}>Login</button>
          </Typography>
        </Box>
      </Modal>
      <div className="form-login">
        <div className="login-img">
          <img
            src="https://grandcarrentalv1.b-cdn.net/wp-content/themes/grandcarrental/images/logo@2x_white.png"
            alt=""
          />
        </div>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            age: "",
            email: "",
            username: "",
            password: "",
            confirmpassword: "",
            serianumber: "",
            fincode: "",
            driverlicense: "",
          }}
          onSubmit={(val) => {
            let newUser = {
              name: val.name,
              surname: val.surname,
              age: Number(val.age),
              email: val.email,
              username: val.username,
              password: val.password,
              serianumber: val.serianumber,
              fincode: val.fincode,
              driverlicanse: val.driverlicense,
            };

            fetch(
              "http://vusalimanoff-001-site1.htempurl.com/api/Accounts/register",
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
              <label htmlFor="name">Name</label>
              <Field className="inp-log" type="text" name="name" />
            </div>
            <div className="field-div">
              <label htmlFor="surname">Surname</label>
              <Field className="inp-log" type="text" name="surname" />
            </div>
            <div className="field-div">
              <label htmlFor="age">Age</label>
              <Field className="inp-log" type="text" name="age" />
            </div>
            <div className="field-div">
              <label htmlFor="mail">E-mail</label>
              <Field className="inp-log" name="email" />
            </div>
            <div className="field-div">
              <label htmlFor="username">Username</label>
              <Field className="inp-log" type="text" name="username" />
            </div>
            <div className="field-div">
              <label htmlFor="password">Password</label>
              <Field className="inp-log" type="password" name="password" />
            </div>
            <div className="field-div">
              <label htmlFor="password">Confirm Password</label>
              <Field
                className="inp-log"
                type="password"
                name="confirmpassword"
              />
            </div>
            <div className="field-div">
              <label htmlFor="serianumber">Seria Number</label>
              <Field className="inp-log" type="text" name="serianumber" />
            </div>
            <div className="field-div">
              <label htmlFor="fincode">Fin Code</label>
              <Field className="inp-log" type="text" name="fincode" />
            </div>
            <div className="field-div">
              <label htmlFor="driverlicense">Driver License</label>
              <Field className="inp-log" type="text" name="driverlicense" />
            </div>

            <input
              onClick={handleOpen}
              className="inp-sub"
              type="submit"
              value="Register"
            />
            <input
              onClick={()=>navigate("/")}
              className="inp-sub"
              type="submit"
              value="Home"
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
