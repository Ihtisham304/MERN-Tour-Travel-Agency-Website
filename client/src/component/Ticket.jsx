import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './applies.css'
import {Link} from 'react-router-dom';
function Ticket() {
const token = localStorage.getItem('token');

const [tickets, setTickets] = useState([]);
const getTickets = async()=>{
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/getticketapplies`,{
      headers: {
          Authorization: `${token}`
      }
  });
    setTickets(response.data.ticketApplies);
} catch (error) {
   console.log(error) ;
} 
}
const handleDelete = async(id)=>{
  try {
    const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/admin/deleteticketapply/${id}`,{
      headers:{
        Authorization: `${token}`
      }
    })
    console.log(response.data);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
  useEffect(() => {
       getTickets();
  }, [])
return (
  <div className='container'>
    <div className='row'>
      <h3>Ticket Applies</h3>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>From</th>
            <th>Name</th>
            <th>arrivalTo</th>
            <th>departureDate</th>
            <th>Adults</th>
            <th>Childs</th>
            <th>Infants</th>
            <th>Contact</th>
            <th>ApplyType</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {        tickets.map((ticket)=> <tr key={ticket._id}>
                            <td>{ticket.from}</td>
                            <td>{ticket.name}</td>
                            <td>{ticket.arrivalto}</td>
                            <td>{new Date(ticket.departuredate).toLocaleDateString()}</td>
                            <td>{ticket.noadult}</td>
                            <td>{ticket.nochild}</td>
                            <td>{ticket.noinfant}</td>
                            <td>{ticket.contactno}</td>
                            <td>{ticket.applytype}</td>
                            <td><span><Link to={`/admin/ticket/edit/${ticket._id}`} className="btn btn-secondary">Edit</Link></span> <span><button onClick={()=>handleDelete(ticket._id)} className='btn btn-danger'>Delete</button></span></td>
                      </tr>)                     
          }
        </tbody>
      </table>
    </div>
  </div>
)
}

export default Ticket;