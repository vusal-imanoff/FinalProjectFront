import React from 'react'
import './Choose.css'

function Choose() {
    return (
        <div className='choose'>
            <h1>Why Choose Us</h1>
            <p>Explore our first className limousine & car rental services</p>
            <div className="ch-cards">
                <div className="ch-card">
                <i className="fa-solid fa-car-side"></i>
                <h3>Variety of Car Brands</h3>
                <p>Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="ch-card">
                <i className="fa-solid fa-face-smile"></i>
                <h3>Best Rate Guarantee</h3>
                <p>Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="ch-card">
                <i className="fa-solid fa-heart"></i>
                <h3>Awesome Customer Support</h3>
                <p>Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.</p>
                </div>
            </div>
        </div>
    )
}

export default Choose
