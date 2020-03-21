import React from 'react';
import { Link } from 'react-router-dom'




function Navbar() {

    return (
        <section className="et-hero-tabs">
            <div className="et-hero-tabs-container">
                <a className="et-hero-tab" href="https://github.com/yanivaytegev/weathersite" >Source Cpde</a>
                <Link className="et-hero-tab" to="/" >Home</Link>
                <a className="et-hero-tab" href="https://protfolio-ya-cv.web.app/" >My Protfolio</a>
            </div>
        </section>
    )
}


export default Navbar
