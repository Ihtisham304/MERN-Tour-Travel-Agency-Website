import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import './edit.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const initialobj = {
    from: '',
    name: '',
    arrivalto: '',
    departuredate: new Date().toISOString().slice(0, 10),
    noadult: '',
    nochild: '',
    noinfant: '',
    contactno: ''
}

const TicketEdit = () => {
    const [token, setToken] = useState('');
    const [ticket, setTicket] = useState(initialobj);
    const { id } = useParams();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    }
    const getApply = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/getticketapply/${id}`, {
                headers: {
                    Authorization: `${token}`
                }
            })
            console.log(response.data);
            setTicket(response.data);
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
            const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/admin/putticketapply/${id}`, ticket, {
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
        // From	Name	arrivalTo	departureDate	Adults	Childs	Infants	Contact
        <div className='container pt-1 for-container'>
            <h3>Edit Ticket Apply</h3>
            {
                token ?<> <form onSubmit={handleSubmit}>
                    <div className="form-group mt-2">
                        <label>from</label>
                        <input type="text" name='from' value={ticket.from} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Name</label>
                        <input type="text" name='name' value={ticket.name} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Arrival To</label>
                        <input type="text" name='arrivalto' value={ticket.arrivalto} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Departure Date</label>
                        <input type="date" name='departuredate' value={new Date(ticket.departuredate).toISOString().slice(0, 10)} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <select className="form-control mt-2" name='noadult' value={ticket.noadult} onChange={handleChange}>
                        <option>Select Adults</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <select className="form-control mt-2" name='nochild' value={ticket.nochild} onChange={handleChange}>
                        <option>Select Childs</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <select className="form-control mt-2" name='noinfant' value={ticket.noinfant} onChange={handleChange}>
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
                        <input type="text" name='contactno' value={ticket.contactno} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
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

export default TicketEdit