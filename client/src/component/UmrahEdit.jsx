import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import './edit.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const initialobj = {
    from: '',
    name: '',
    nodays: '',
    departuredate: new Date().toISOString().slice(0, 10),
    noadult: '',
    nochild: '',
    distance: '',
    noinfant: '',
    contactno: ''
}

const UmrahEdit = () => {
    const [token, setToken] = useState('');
    const [umrah, setUmrah] = useState(initialobj);
    const { id } = useParams();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setUmrah({ ...umrah, [e.target.name]: e.target.value });
    }
    const getApply = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/getumrahapply/${id}`, {
                headers: {
                    Authorization: `${token}`
                }
            })
            console.log(response.data);
            setUmrah(response.data);
        } catch (error) {
            console.log(error.response.message);
        }
    }

    useEffect(() => {
        const tkn = localStorage.getItem('token');
        setToken(tkn);
        console.log(id)
        getApply();

    }, [id, token])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/admin/putumrahapply/${id}`, umrah, {
                headers: {
                    Authorization: `${token}`
                }
            })
            console.log(response.data);
            toast.success('Apply Update Successfully');
            navigate('/admin');
        } catch (error) {
            console.log(error.response.message);
        }

    }
    return (
        <div className='container pt-1 for-container'>
            <h3>Edit umrah Apply</h3>
            {
                token ? <> <form onSubmit={handleSubmit}>
                    <div className="form-group mt-2">
                        <label>from</label>
                        <input type="text" name='from' value={umrah.from} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Name</label>
                        <input type="text" name='name' value={umrah.name} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Days</label>
                        <input type="text" name='nodays' value={umrah.nodays} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Distance</label>
                        <input type="text" name='distance' value={umrah.distance} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Departure Date</label>
                        <input type="date" name='departuredate' value={new Date(umrah.departuredate).toISOString().slice(0, 10)} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <select className="form-control mt-2" name='noadult' value={umrah.noadult} onChange={handleChange}>
                        <option>Select Adults</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <select className="form-control mt-2" name='nochild' value={umrah.nochild} onChange={handleChange}>
                        <option>Select Childs</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <select className="form-control mt-2" name='noinfant' value={umrah.noinfant} onChange={handleChange}>
                        <option>Select Infants</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <div className="form-group mt-2">
                        <label>contact</label>
                        <input type="text" name='contactno' value={umrah.contactno} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Update</button>
                    <Link to={'/admin'} className="btn btn-success mt-2">Back</Link>
                </form>             <ToastContainer
                        position="top-right"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        transition:Bounce /></> : <h1>UnAthorized Or Expired Token</h1>
            }

        </div>
    )
}

export default UmrahEdit