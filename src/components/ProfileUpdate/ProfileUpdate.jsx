import React from 'react'

import { Formik, Form, Field } from "formik";
import {useNavigate} from 'react-router-dom'

function ProfileUpdate({myDecodeToken}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(false);
  const navigate = useNavigate();
  return (
    
    <div>
      <Formik
      enableReinitialize={true}
          initialValues={{
            id:myDecodeToken.id,
            name: "",
            surname: "",
            age: "",
            email: "",
            username: "",
            serianumber: "",
            fincode: "",
            driverlicense: "",
          }}
          onSubmit={(val) => {
            let newUser = {
              id:val.id,
              name: val.name,
              surname: val.surname,
              age: Number(val.age),
              email: val.email,
              username: val.username,
              serianumber: val.serianumber,
              fincode: val.fincode,
              driverlicanse: val.driverlicense,
            };

            fetch(
              "http://vusalimanoff-001-site1.htempurl.com/api/Accounts/update",
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
              value="Update"
            />
          </Form>
        </Formik>
    </div>
  )
}

export default ProfileUpdate