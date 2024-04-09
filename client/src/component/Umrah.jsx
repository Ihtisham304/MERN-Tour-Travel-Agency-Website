import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Umrah = () => {
  const token = localStorage.getItem('token');

  const [umrahs, setUmrahs] = useState([]);
  const getDubais = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/getumrahapplies`, {
        headers: {
          Authorization: `${token}`
        }
      });
      setUmrahs(response.data.umrahApplies);
    } catch (error) {
      console.log(error);
    }
  }
  const handleDelete = async(id)=>{
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/admin/deleteumrahapply/${id}`,{
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
    getDubais();
  }, [])
  useEffect(() => {
    getDubais();
  }, [])
  return (
    <div className='container'>
      <div className='row'>
        <h3>Umrah Applies</h3>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>From</th>
              <th>Name</th>
              <th>departureDate</th>
              <th>Adults</th>
              <th>Childs</th>
              <th>Infants</th>
              <th>Contact</th>
              <th>Days</th>
              <th>Distance</th>
              <th>ApplyType</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {umrahs.map((umrah) => <tr key={umrah._id}>
              <td>{umrah.from}</td>
              <td>{umrah.name}</td>
              <td>{new Date(umrah.departuredate).toLocaleDateString()}</td>
              <td>{umrah.noadult}</td>
              <td>{umrah.nochild}</td>
              <td>{umrah.noinfant}</td>
              <td>{umrah.contactno}</td>
              <td>{umrah.nodays}</td>
              <td>{umrah.distance}</td>
              <td>{umrah.applytype}</td>
              <td><span><Link to={`/admin/umrah/edit/${umrah._id}`} className="btn btn-secondary">Edit</Link></span> <span><button onClick={()=> handleDelete(umrah._id)} className='btn btn-danger'>Delete</button></span></td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Umrah