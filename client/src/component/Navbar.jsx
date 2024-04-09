import React from 'react'
import { Link } from 'react-router-dom'
// import ReactDom from 'react-router-dom'
import brandlogo from '../assets/navbrand.jpg'
import "../component/style.min.css"
import 'bootstrap/dist/css/bootstrap.css?inline'
import 'bootstrap/dist/css/bootstrap.min.css?inline'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// 
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <img className='brand-logo' src={brandlogo} alt='logo' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item navitem">
                <Link className="btn nav-Link navitem" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item navitem">
                <Link className="btn nav-Link navitem" to={'/services'}>Services</Link>
              </li>
              <li className="nav-item navitem">
                <Link className="btn nav-Link navitem" to={'/aboutUs'}>About Us</Link>
              </li>
              <li className="nav-item navitem">
                <Link className="btn nav-Link navitem" to={'/aboutUs'}>Contact Us</Link>
              </li>
              <li className="nav-item navitem">
                <Link className="btn nav-Link navitem" to={'/admin'} title='For office use only'>Admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}