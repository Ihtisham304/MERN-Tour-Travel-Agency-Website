import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './sidebar.css'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
    <div className='sidebar d-flex vh-100 p-4'>
      <div>
        <a className='d-flex align-items-center text-white'>
          <i className='bi bi-bootstrap fs-5 me-2'></i>
          <span className='fs-4'>Bootstrap</span>
        </a>
        <hr className='text-secondary mt-2' />
        <ul className='nav nav-pills flex-column p-0 m-0'>
          <li className='nav-item p-1'>
            <Link to={"/admin/dashboard"} className='nav-link d-flex text-white'>
              <i className='bi bi-speedometer fs-5 me-2'></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className='nav-item p-1'>
          <Link to={"/admin/"} className='nav-link d-flex text-white'>
              <i className='bi bi-speedometer fs-5 me-2'></i>
              <span>Applies</span>
            </Link>
          </li>
          <li className='nav-item p-1'>
          <Link to={""} className='nav-link d-flex text-white'>
              <i className='bi bi-speedometer fs-5 me-2'></i>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    <Content />
    </div>
    </>
  )
}

const Content = ()=>{
  return<>
    <h1 style={{color: "red"}}>Content</h1>
  </>
}
export default SideBar