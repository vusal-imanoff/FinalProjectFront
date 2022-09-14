import React from 'react'
import 'assets/css/Contact.css'
import {Formik,Form,Field} from 'formik'
import contactVal from 'validation/contactVal'


function Contact() {
    return (
        <div className='contact'>
            <div className="contact-img">
                <h1>Contact Us</h1>
                <p className='cnt-p'>This is sample of page tagline and you can set it up using page option</p>
            </div>
            <div className="socials">
                <p className='social-title'>Just over a month into my trip and I wonder how I’ve changed, if at all. Certainly the experiences I’ve had and things I’ve seen have shaped me in someway.</p>
                <div className="network">
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
            </div>

            <Formik
            initialValues={
                {
                    name:"",
                    email:"",
                    subject:"",
                    message:""
                }
            }
            validationSchema={contactVal}
            onSubmit={(x)=>
            {
                console.log(x);
            }}
            >
                {({errors,touched})=>(

                <Form className='frm'>
                <div className="sec-inp">
                    <label htmlFor="">Your name*</label>
                    <Field name='name'/>
                    {errors.name&&touched.name?<div className='err'>Required</div>:null}
                </div>
                <div className="sec-inp">
                    <label htmlFor="">Your e-mail*</label>
                    <Field name='email'/>
                    {errors.email&&touched.email?<div className='err'>Required</div>:null}
                </div>
                <div className="sec-inp">
                    <label htmlFor="">Your name*</label>
                    <Field name='subject'/>
                    {errors.subject&&touched.subject?<div className='err'>Required</div>:null}
                </div>
                <div className="sec-inp">
                    <label htmlFor="">Message*</label>
                    <Field as='textarea' className='area' name='message'/>
                    {errors.message&&touched.message?<div className='err'>Required</div>:null}
                </div>
                <div className="sub-contact">
                    <input type="submit"/>
                </div>
            </Form>
                )}
            </Formik>



        </div>
    )
}

export default Contact
