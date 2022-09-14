import React from 'react'
import Nav from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'

function Base({children}) {
    return (
        <div>
            <Nav/>
            {children}
            <Footer/>
        </div>
    )
}

export default Base
