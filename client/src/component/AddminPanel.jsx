import React, { useState } from 'react';
import Dashboard from './Dashboard';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './sidebar.css';
import Ticket from './Ticket';
import Dubai from './Dubai';
import Umrah from './Umrah';
import AddNews from './AddNews';
const AdminPanel = ({addNews}) => {
  const [route, setRoute] = useState('/admin/dashboard'); // Set default route to Dashboard

  const forDashboard = () => {
    setRoute('/admin/dashboard');
  };

  const forTicketApplies = () => {
    setRoute('/admin/Ticketapplies');
  };
  
  const forDubaiApplies = () => {
    setRoute('/admin/Dubaiapplies');
  };
 
  const  forUmrahApplies = () => {
    setRoute('/admin/Umrahapplies');
  };
  const forAddnewsApplies =()=>{
    setRoute('/admin/Addnews');
  }
  const logOUt = ()=>{
      localStorage.removeItem('token');
      window.location.reload();
  }
  return (
    <div className='d-flex w-100'>
      <div className='sidebar d-flex vh-100 pt-4'>
        <div className='w-100'>
          <ul className='nav nav-pills flex-column p-0 m-0 w-100'>
            <li className='nav-item p-2 w-100'>
              <button onClick={forDashboard} className='nav-link w-100 d-flex text-white'>
                <i className='bi bi-speedometer fs-5 me-2'></i>
                <span>Dashboard</span>
              </button>
            </li>
            <li className='nav-item p-2'>
              <button onClick={forTicketApplies} className='nav-link d-flex w-100 text-white'>
                <i className='bi bi-airplane fs-5 me-2'></i>
                <span>Ticket Applies</span>
              </button>
            </li>
            <li className='nav-item p-2'>
              <button onClick={forDubaiApplies} className='nav-link d-flex w-100 text-white'>
                <i className='bi bi-airplane fs-5 me-2'></i>
                <span>Dubai Applies</span>
              </button>
            </li>
            <li className='nav-item p-2'>
              <button onClick={forUmrahApplies}  className='nav-link d-flex w-100 text-white'>
                <i className='bi bi-airplane fs-5 me-2'></i>
                <span>Umrah Applies</span>
              </button>
            </li>
            <li className='nav-item p-2'>
              <button onClick={forAddnewsApplies}  className='nav-link d-flex w-100 text-white'>
                <i className='bi bi-newspaper fs-5 me-2'></i>
                <span>Add News</span>
              </button>
            </li>
            {/* You can handle logout logic here if needed */}
            <li className='nav-item p-2'>
              <button onClick={logOUt} className='nav-link d-flex text-white w-100'>
                <i className='bi bi-box-arrow-right fs-5 me-2'></i>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Content route={route} addNews={addNews}/>
    </div>
  );
};

const Content = ({ route,addNews}) => {
  return (
    <div>
      {route === '/admin/dashboard' ? (
        <Dashboard />
      ) : route === '/admin/Ticketapplies' ? (
        <Ticket />
      ) : route === '/admin/Dubaiapplies'? (
        <Dubai />
      ): route === '/admin/Umrahapplies'?(
        <Umrah />
      ): route === '/admin/Addnews'?(
        <AddNews addNews={addNews}/>
      ): (
        <p>No matching route found</p>
      )}
    </div>
  );
};

export default AdminPanel;
