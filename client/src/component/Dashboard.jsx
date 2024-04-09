import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './dashboard.css'
const Dashboard = () => {
    const token = localStorage.getItem('token');
    const [recentAppl, setRecentAppl] = useState([]);
    const [countall,setCountAll]  = useState(0);
    const [countticket,setCountTicket]  = useState(0);
    const [countdubai,setCountDubai]  = useState(0);
    const [countumrah,setCountUmrah]  = useState(0);
    const getRecentApplies = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/getrecent`, {
                headers: {
                    Authorization: `${token}`
                }
            });
            setRecentAppl(response.data.recentApplies);
        } catch (error) {
            console.log("Token Expires", error);
        }
    }
    const getCountAllApplies = async()=>{
        try {
              const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/getcountallapply`,{
                headers:{
                    Authorization: `${token}`
                }
              });
              setCountAll(response.data);
        } catch (error) {
            
        }
    }

    const getCountTicketApplies = async()=>{
        try {
              const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/getcountticket`,{
                headers:{
                    Authorization: `${token}`
                }
              });
              setCountTicket(response.data);
        } catch (error) {
            
        }
    }
    const getCountDubaiApplies = async()=>{
        try {
              const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/getcountdubai`,{
                headers:{
                    Authorization: `${token}`
                }
              });
              setCountDubai(response.data);
        } catch (error) {
            
        }
    }
    const getCountUmrahApplies = async()=>{
        try {
              const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/getcountumrah`,{
                headers:{
                    Authorization: `${token}`
                }
              });
              setCountUmrah(response.data);
        } catch (error) {
            
        }
    }
    useEffect(() => {
        getCountUmrahApplies();
        getCountDubaiApplies();
        getCountTicketApplies();
        getCountAllApplies();
        getRecentApplies();
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-xl-3">
                    <div className="card bg-c-blue order-card">
                        <div className="card-block">
                            <h6 className="m-b-10">Total Applies</h6>
                            <h2 className="text-right"><i className="bi bi-people"></i><span>{countall}</span></h2>
                            {/* <p className="m-b-0">Completed Orders<span className="f-right">351</span></p> */}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-xl-3">
                    <div className="card bg-c-green order-card">
                        <div className="card-block">
                            <h6 className="m-b-20">Ticket Applies</h6>
                            <h2 className="text-right"><i className="bi bi-ticket"></i><span>{countticket}</span></h2>
                            {/* <p className="m-b-0">Completed Orders<span className="f-right">351</span></p> */}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-xl-3">
                    <div className="card bg-c-yellow order-card">
                        <div className="card-block">
                            <h6 className="m-b-20">Dubai Applies</h6>
                            <h2 className="text-right"><i className="bi bi-credit-card"></i><span>{countdubai}</span></h2>
                            {/* <p className="m-b-0">Completed Orders<span className="f-right">351</span></p> */}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-xl-3">
                    <div className="card bg-c-pink order-card">
                        <div className="card-block">
                            <h6 className="m-b-20">Umrah Applies</h6>
                            <h2 className="text-right"><i className="bi bi-credit-card"></i><span>{countumrah}</span></h2>
                            {/* <p className="m-b-0">Completed Orders<span className="f-right">351</span></p> */}
                        </div>
                    </div>
                </div>
                <h3>Recent Applies</h3>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>From</th>
                            <th>Name</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recentAppl.map((recentappl) =>
                               <tr key={recentappl._id}>
                                    <td>{recentappl.from}</td>
                                    <td>{recentappl.name}</td>
                                    <td>{recentappl.contactno}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard