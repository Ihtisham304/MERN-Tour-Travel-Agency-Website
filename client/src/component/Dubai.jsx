import React from 'react'
import './applies.css'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Dubai = () => {
  const token = localStorage.getItem('token');

  const [dubais, setDubais] = useState([]);
  const getDubais = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/getdubaiapplies`, {
        headers: {
          Authorization: `${token}`
        }
      });
      setDubais(response.data.dubaiApplies);
    } catch (error) {
      console.log(error);
    }
  }
  // 
  const handleDelete = async(id)=>{
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/admin/deletedubaiapply/${id}`,{
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
  return (
    <div className='container'>
      <div className='row'>
        <h3>Dubai Applies</h3>
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
              <th>ApplyType</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dubais.map((dubai) => <tr key={dubai._id}>
              <td>{dubai.from}</td>
              <td>{dubai.name}</td>
              <td>{new Date(dubai.departuredate).toLocaleDateString()}</td>
              <td>{dubai.noadult}</td>
              <td>{dubai.nochild}</td>
              <td>{dubai.noinfant}</td>
              <td>{dubai.contactno}</td>
              <td>{dubai.nodays}</td>
              <td>{dubai.applytype}</td>
              <td><span><Link to={`/admin/dubai/edit/${dubai._id}`} className="btn btn-secondary">Edit</Link></span> <span><button className='btn btn-danger' onClick={()=> handleDelete(dubai._id)}>Delete</button></span></td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dubai