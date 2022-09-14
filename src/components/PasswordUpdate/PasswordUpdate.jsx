import React from 'react'
import { Formik, Form, Field } from "formik";
import {useNavigate} from 'react-router-dom'

function PasswordUpdate({myDecodeToken}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(false);
  const navigate = useNavigate();
  console.log(myDecodeToken);
  
  return (
    <div className='texts'>
            <Formik
          initialValues={{
            id:myDecodeToken.id,
            oldpassword:"",
            password: "",
            confirmpassword: ""
          }}
          onSubmit={(val) => {
            let newUser = {
              id:val.id,
              currentPassword:val.oldpassword,
              newPassword: val.password,
              confirmPassword: val.confirmpassword,
            };
            
            
            fetch(
              "http://vusalimanoff-001-site1.htempurl.com/api/Accounts/resetpassword",
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
              <label htmlFor="oldpassword">Current Password</label>
              <Field className="inp-log" type="password" name="oldpassword" />
            </div>
            <div className="field-div">
              <label htmlFor="password">New Password</label>
              <Field className="inp-log" type="password" name="password" />
            </div>
            <div className="field-div">
              <label htmlFor="password">Confirm New Password</label>
              <Field
                className="inp-log"
                type="password"
                name="confirmpassword"
              />
            </div>
           

            <input
              onClick={handleOpen}
              className="inp-sub"
              type="submit"
              value="Update"
            />
          </Form>
        </Formik>
          </div>
  )
}

export default PasswordUpdate