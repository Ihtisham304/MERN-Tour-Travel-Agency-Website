import React, { useEffect, useState } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
// import { Link, useNavigate } from "react-router-dom";
import AddminPanel from "./AddminPanel";

export default function Admin({addNews}) {
    const [formdata, setFormData] = useState({});
    const [token, setToken] = useState('');
    const decodeToken = (token) => {
        const payload = token.split('.')[1];
        return JSON.parse(atob(payload));
    };
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            const decodedToken = decodeToken(storedToken);
            const currentTime = Date.now()/1000; 
            if (decodedToken.exp < currentTime) {
                localStorage.removeItem('token');
                setToken('');
            }
            else{
            setToken(storedToken);
            }
            // console.log(token)
        }
    }, [])
    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formdata.username) {
            alert("username is empty ")
        }
        else if (!formdata.password) {
            alert("password is empty")
        }
        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, formdata);
            const tkn = res.data.tkn;
            if (res.status ===  200) {
                alert(res.data.message);
                setToken(tkn);
                localStorage.setItem('token',tkn);
            }
            else if (!res.status) {
                alert("username password incorrect");
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>{!token ?
            <MDBContainer fluid className='d-flex align-items-center justify-content-center mt-5'>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <MDBCardBody className='px-5'>
                        <h2 className="text-uppercase text-center mb-5">Addmin Login</h2>
                        <MDBInput wrapperClass='mb-4' label='username' size='lg' id='form1' type='text' name="username" onChange={handleChange} />
                        <MDBInput wrapperClass='mb-4' label='password' size='lg' id='form4' type='password' name="password" onChange={handleChange} />
                        <button type="submit" onClick={handleSubmit} className='mb-4 w-100 gradient-custom-4' style={{ backgroundColor: "#010437", color: "white", borderRadius: "10px", paddingTop: "5px", paddingBottom: "5px" }} size='lg'>Login</button>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer> : <AddminPanel addNews={addNews}/>
        }
        </>
    )
} 