import React, { useState } from "react";
import "assets/css/Login.css";
import loginVal from "validation/loginVal";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useNavigate} from 'react-router-dom'

function Login() {
  const [eye, setEye] = useState("fa-eye");
  const [type, setType] = useState("password");
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEye = () => {
    if (eye === "fa-eye") {
      setEye("fa-eye-slash");
      setType("text");
    } else {
      setEye("fa-eye");
      setType("password");
    }
  };

  const handleLogin = (x) => {
    axios
      .post("http://vusalimanoff-001-site1.htempurl.com/api/Accounts/login", x)
      .then((resp) => {
        if (resp.status === 200) {
          localStorage.setItem("URtoken", JSON.stringify(resp.data));
          navigate("/")
        }
      })
      .catch((err) => setShow(true));
  };

  return (
    <div className="login">
      <Modal show={show} onHide={handleClose}>
        <Modal.Body  className='modal-login'>E-mail or Password is not correct</Modal.Body>
        <Modal.Footer className='modal-login'>
          <Button className='modal-cls' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
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
            email: "",
            password: "",
          }}
          validationSchema={loginVal}
          onSubmit={(x) => handleLogin(x)}
        >
          {({ errors, touched }) => (
            <Form className="login-frm">
              <div className="field-div">
                <label htmlFor="mail">E-mail</label>
                <Field className="inp-log" name="email" />
                {errors.email && touched.email ? (
                  <div className="err-log"></div>
                ) : null}
              </div>
              <div className="field-div">
                <label htmlFor="mail">Password</label>
                <Field className="inp-log" type={type} name="password" />
                <i
                  onClick={() => handleEye()}
                  className={`fa-regular fa-eyes ${eye}`}
                ></i>
                {errors.password && touched.password ? (
                  <div className="err-log"></div>
                ) : null}
              </div>
              <input className="inp-sub" type="submit" value="Login" />
              <p onClick={()=>navigate("/register")} className="inp-sub text-center pt-2">Go Register</p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
