import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
           <div className="container">
            <div className="row">
            <div className="foot aboutus">
                <h2>About Us</h2>
                <p>Getting dressed up and traveling with good friends makes for a shared, unforgettable experience.</p>
                <div className="foot-img">
                <img src="https://grandcarrentalv1.b-cdn.net/wp-content/themes/grandcarrental/images/logo@2x_white.png" alt=""/>
                </div>
            </div>
            <div className="foot contact-info">
                <h2>Contact info</h2>
                <p>1-567-124-44227</p>
                <p>184 Main Street East Perl Habour 8007</p>
                <p>Mon - Sat 8.00 - 18.00 Sunday CLOSED</p>
            </div>
            <div className="foot newsteller">
                <h2>NewsLetter</h2>
                <p>Don't miss a thing! Sign up to receive daily deals</p>
                <input className='email-inp' placeholder='Your Email Address' type="text"/>
                <p className='sub-foot'>Subscribe</p>
            </div>
            </div>
           </div>
        </div>
    )
}

export default Footer
