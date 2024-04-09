import React, { useState } from 'react'
// import ReactDom from 'react-router-dom'
import umrahimage from '../assets/mosque.jpg'
import DubaiImage from '../assets/dub).jpg'
import Ticket from '../assets/Ticket.jpg'
"import './style.min.css';"
import { addApply } from '../api/apply';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialticket = {
  from: '',
  arrivalto: '',
  departuredate: '',
  name: '',
  contactno: '',
  noadult: '',
  nochild: '',
  noinfant: ''
}
const initialumrah = {
  from: '',
  departuredate: '',
  name: '',
  contactno: '',
  noadult: '',
  nochild: '',
  noinfant: '',
  noday: "select days",
  distance: 0
}
const initialdubai = {
  from: '',
  departuredate: '',
  name: '',
  contactno: '',
  noadult: '',
  nochild: '',
  noinfant: '',
  noday: "select days",
}
function Services() {
  const [activeDiv, setActiveDiv] = useState('Ticketing');
  const handleButtonClick = (divId) => {
    setActiveDiv(divId);
  }
  const [ticketapply, setTicketApply] = useState(initialticket);
  const [umrahapply, setUmrahApply] = useState(initialumrah);
  const [dubaiapply, setDubaiApply] = useState(initialdubai);

  const handleChange = (e) => {
    setTicketApply({ ...ticketapply, [e.target.name]: e.target.value });
  }
  const handleChangeumrah = (e) => {
    setUmrahApply({ ...umrahapply, [e.target.name]: e.target.value });
  }
  const handleChangedubai = (e) => {
    setDubaiApply({ ...dubaiapply, [e.target.name]: e.target.value });
  }
  const addTickitingApply = async (e) => {
    e.preventDefault();
    const isValidfrom = /^[a-zA-Z\s]*$/.test(ticketapply.from);
    const isValidArrival = /^[a-zA-Z\s]*$/.test(ticketapply.arrivalto);
    const isValidName = /^[a-zA-Z\s]*$/.test(ticketapply.name);
    const pakistanPhoneNumberRegex = /^(03)[0-9]{9}$/.test(ticketapply.contactno);

    if (!ticketapply.from) {
      return alert("from fields cannot be empty");
    }
    if (!isValidArrival) {
      return alert("Enter Correct Arrival Place")
    }
    if (!isValidName) {
      return alert("Enter Correct Name")
    }
    if (!isValidfrom) {
      return alert("Enter Correct From Place")
    }
    if (!ticketapply.arrivalto) {
      return alert("arrivalto fields cannot be empty");
    }
    if (!ticketapply.departuredate) {
      return alert("Departure Date fields cannot be empty");
    }
    if (!ticketapply.noadult) {
      return alert("Select Number Adult cannot be empty");
    }
    if (!ticketapply.nochild) {
      return alert("Select Number Childs cannot be empty");

    }
    if (!ticketapply.noinfant) {
      return alert("Select Number Infants cannot be empty");
    }
    if (!ticketapply.name) {
      return alert("Name fields cannot be empty");
    }
    if (!ticketapply.contactno || !pakistanPhoneNumberRegex || ticketapply.contactno.length !== 11) {
      if (!ticketapply.contactno) {
        return alert("Contact fields cannot be empty");
      } else if (!pakistanPhoneNumberRegex) {
        return alert("Enter a correct Pakistani phone number");
      } else if (ticketapply.contactno.length !== 11) {
        return alert("Enter a correct 11-digit phone number");
      }
    }
    ticketapply.applytype = 'ticket'
    const res = await addApply(ticketapply);
    setTicketApply(initialticket);
    toast.success('Apply Added Successfully');
  }
  const addUmrahApply = async (e) => {
    const isValidfrom = /^[a-zA-Z\s]*$/.test(umrahapply.from);
    const isValidName = /^[a-zA-Z\s]*$/.test(umrahapply.name);
    const pakistanPhoneNumberRegex = /^(03)[0-9]{9}$/.test(umrahapply.contactno);
    if (!umrahapply.contactno || !pakistanPhoneNumberRegex || umrahapply.contactno.length !== 11) {
      if (!umrahapply.contactno) {
        return alert("Contact fields cannot be empty");
      } else if (!pakistanPhoneNumberRegex) {
        return alert("Enter a correct Pakistani phone number");
      } else if (umrahapply.contactno.length !== 11) {
        return alert("Enter a correct 11-digit phone number");
      }
    }
    if (!umrahapply.from) {
      return alert("from fields cannot be empty");
    }
    if (!isValidfrom) {
      return alert("Enter correct Place");
    }
    if (!isValidName) {
      return alert("Enter correct Name");
    }
    if (!umrahapply.departuredate) {
      return alert("Departure Date fields cannot be empty");
    }
    if (!umrahapply.noadult) {
      return alert("Select Number Adult cannot be empty");
    }
    if (!umrahapply.nochild) {
      return alert("Select Number Childs cannot be empty");

    }
    if (!umrahapply.noinfant) {
      return alert("Select Number Infants cannot be empty");
    }
    if (!umrahapply.name) {
      return alert("Name fields cannot be empty");
    }
    if (!umrahapply.distance) {
      return alert("Distance fields cannot be empty");
    }
    e.preventDefault();
    umrahapply.applytype = 'umrah';
    const res = await addApply(umrahapply);
    setUmrahApply(initialumrah);
    toast.success('Apply Added Successfully');
  }
  const addDubaiApply = async (e) => {
    const isValidfrom = /^[a-zA-Z\s]*$/.test(dubaiapply.from);
    const isValidName = /^[a-zA-Z\s]*$/.test(dubaiapply.name);
    const pakistanPhoneNumberRegex = /^(03)[0-9]{9}$/.test(dubaiapply.contactno);
    if (!dubaiapply.contactno || !pakistanPhoneNumberRegex || dubaiapply.contactno.length !== 11) {
      if (!dubaiapply.contactno) {
        return alert("Contact fields cannot be empty");
      } else if (!pakistanPhoneNumberRegex) {
        return alert("Enter a correct Pakistani phone number");
      } else if (dubaiapply.contactno.length !== 11) {
        return alert("Enter a correct 11-digit phone number");
      }
    }
    if (!isValidfrom) {
      return alert("Enter correct Place");
    }
    if (!isValidName) {
      return alert("Enter correct Name");
    }
    if (!dubaiapply.from) {
      return alert("from fields cannot be empty");
    }
    if (!dubaiapply.noday) {
      return alert("arrivalto fields cannot be empty");
    }
    if (!dubaiapply.departuredate) {
      return alert("Departure Date fields cannot be empty");
    }
    if (!dubaiapply.noadult) {
      return alert("Select Number Adult cannot be empty");
    }
    if (!dubaiapply.nochild) {
      return alert("Select Number Childs cannot be empty");

    }
    if (!dubaiapply.noinfant) {
      return alert("Select Number Infants cannot be empty");
    }
    if (!dubaiapply.name) {
      return alert("Name fields cannot be empty");
    }
    e.preventDefault();
    dubaiapply.applytype = 'dubai';
    const res = await addApply(dubaiapply);
    setDubaiApply(initialdubai);
    toast.success('Apply Added Successfully');
  }
  return (
    <div className="service" id="Services">
      <h2>Our Services</h2>
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-4 mg-btm">
          <button className="btn btn-light sbtn" onClick={() => handleButtonClick('Ticketing')}>Ticketing</button>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 mg-btm">
          <button className="btn btn-light sbtn" onClick={() => handleButtonClick('UmrahVisa')}>Umrah Visa</button>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 mg-btm">
          <button className="btn btn-light sbtn" onClick={() => handleButtonClick('DubaiVisa')}>Dubai Visit Visa</button>
        </div>
      </div>
      <form onSubmit={addTickitingApply} className="Ticketing" id="Ticketing" style={{ display: activeDiv === "Ticketing" ? 'flex' : 'none', 'flexDirection': 'row' }}>
        <div className='row'>
          <div className="col-lg-2 mg-btm">
            <label>From:</label>
            <input type="text" placeholder="Departure From"
              name="from"
              onChange={handleChange}
              value={ticketapply.from}
            />
          </div>
          <div className="col-lg-2 mg-btm">
            <label>Arrival To:</label>
            <input type="text" placeholder="City to Arrive"
              name="arrivalto"
              onChange={handleChange}
              value={ticketapply.arrivalto} />
          </div>
          <div className="col-lg-2 mg-btm">
            <label>Departure Date:</label>
            <input type="date"
              name="departuredate"
              onChange={handleChange}
              value={ticketapply.departuredate} />
          </div>
          <div className="col-lg-2 mg-btm">
            <label>No of Adults</label>
            <select name='noadult' value={ticketapply.noadult} onChange={handleChange}>
              <option value=" ">Select Adults</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="col-lg-2 mg-btm">
            <label>No of Child</label>
            <select name="nochild" value={ticketapply.nochild} onChange={handleChange} id="">
              <option>Select Childs</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="col-lg-2 mg-btm">
            <label>No of Infant</label>
            <select name="noinfant" value={ticketapply.noinfant} onChange={handleChange} id="">
              <option>Select Infants</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="col-lg-2 mg-btm">
            <label>Name:</label>
            <input type="text"
              placeholder="Enter your Name:"
              name="name"
              onChange={handleChange}
              value={ticketapply.name} />
          </div>
          <div className="col-lg-2 mg-btm">
            <label>Contact Number</label>
            <input type="number" value={ticketapply.contactno} id="MobNumber" placeholder="Mobile Number" name="contactno" onChange={handleChange} />
          </div>
          <div className="col-lg-2">
            <button className="submit btn btn-light">Submit</button>
          </div>
        </div>
      </form>
      {/* umrah services */}
      <form className="Umrah-Visa" onSubmit={addUmrahApply} id="UmrahVisa" style={{ display: activeDiv === "UmrahVisa" ? 'flex' : 'none', 'flexDirection': 'row' }}>
        <div className='row'>

          <div className="col-lg-2 mg-btm">
            <label>From:</label>
            <input type="text" name="from" onChange={handleChangeumrah} value={umrahapply.from} placeholder="Departure From" />
          </div>
          <div className="col-lg-2 mg-btm">
            <label>Departure Date:</label>
            <input type="date" name='departuredate' onChange={handleChangeumrah} value={umrahapply.departuredate} />
          </div>
          <div className="col-lg-2 mg-btm">
            <label>No Days:</label>
            <select name='noday' value={umrahapply.noday} onChange={handleChangeumrah}>
              <option>select days</option>
              <option value="14">14</option>
              <option value="21">21</option>
              <option value="30">30</option>
            </select>
          </div>
          <div className="col-lg-2 mg-btm">
            <label>No of Adults</label>
            <select name='noadult' value={umrahapply.noadult} onChange={handleChangeumrah}>
              <option>Select Adults</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="col-lg-2 mg-btm">
            <label>No of Child()</label>
            <select name="nochild" value={umrahapply.nochild} onChange={handleChangeumrah} id="">
              <option>Select Childs</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="col-lg-2 mg-btm">
            <label>No of Infant</label>
            <select name="noinfant" value={umrahapply.noinfant} onChange={handleChangeumrah} id="">
              <option>Select Infants</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="col-lg-2 mg-btm">
            <label>Hotel Distance</label>
            <input type="number" name='distance' onChange={handleChangeumrah} value={umrahapply.distance} placeholder="Preferred Distance" />
          </div>
          <div className="col-lg-2 mg-btm">
            <label>Name:</label>
            <input type="text" name='name' onChange={handleChangeumrah} value={umrahapply.name} placeholder="Enter your Name:" />
          </div>
          <div className="col-lg-2 mg-btm">
            <label>Contact Number</label>
            <input type="number" name='contactno' onChange={handleChangeumrah} value={umrahapply.contactno} id="MobNumber" placeholder="Mobile Number" />
          </div>
          <div className='col-lg-2'>
            <button className="submit btn btn-light">Submit</button>
          </div>
        </div><br />
      </form>
      {/* Dubai Visit Visa  */}
      <form className="Dubai-Visa" onSubmit={addDubaiApply} id="DubaiVisa" style={{ display: activeDiv === "DubaiVisa" ? 'flex' : 'none', 'flexDirection': 'row' }}>
        <div className='row '>

          <div className="col-lg-2 mg-btm">
            <label>From:</label>
            <input type="text" name='from' onChange={handleChangedubai} value={dubaiapply.from} placeholder="Departure From" />
          </div>
          <div className="col-lg-2 mg-btm">
            <label>Departure Date:</label>
            <input type="date" name='departuredate' onChange={handleChangedubai} value={dubaiapply.departuredate} />
          </div>
          <div className="col-lg-2 mg-btm">
            <label>No of Days:</label>
            <select name='noday' value={dubaiapply.noday} onChange={handleChangedubai}>
              <option value="select days"> select days</option>
              <option value='30'>30</option>
              <option value="45">45</option>
              <option value="60">60</option>
            </select>
          </div>
          <div className="col-lg-2 mg-btm">
            <label>No of Adults</label>
            <select name='noadult' value={dubaiapply.noadult} onChange={handleChangedubai}>
              <option>Select Adults</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="col-lg-2 mg-btm">
            <label>No of Child</label>
            <select name="nochild" value={dubaiapply.nochild} onChange={handleChangedubai} id="">
              <option>Select Childs</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="col-lg-2 mg-btm">
            <label>No of Infant</label>
            <select name="noinfant" value={dubaiapply.noinfant} onChange={handleChangedubai}>
              <option>Select Infants</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="col-lg-2 mg-btm">
            <label>Name:</label>
            <input type="text" name='name' onChange={handleChangedubai} value={dubaiapply.name} placeholder="Enter your Name:" />
          </div>
          <div className="col-lg-2 mg-btm">
            <label>Contact Number</label>
            <input type="number" name='contactno' onChange={handleChangedubai} value={dubaiapply.contactno} id="MobNumber" placeholder="Mobile Number" />
          </div>
          <div className='col-lg-2'>
            <button className="submit btn btn-light">Submit</button>
          </div>
        </div>
      </form>
      <ToastContainer
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
        transition:Bounce />
      {/* Gallery */}
      <div className="Gallery mt-5" style={{ color: '#fff' }}>
        <div className="row">
          <h3>Umrah Services</h3>
          <div className="mt-5 col-lg-6 paragraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aperiam tempore, in neque totam, magni repudiandae necessitatibus molestias nesciunt cumque ullam laboriosam? Ea, recusandae inventore esse harum impedit, doloremque, voluptates quas provident dolore obcaecati aspernatur nemo. Nemo vel id nobis nihil fugiat, error iusto deleniti amet officia, dignissimos magni sunt sint. Et tenetur possimus accusantium totam, corrupti ex pariatur! Iusto id totam, repellat obcaecati incidunt voluptatum provident dolorum magnam quis dolorem ipsum nesciunt blanditiis officia eum aut debitis cumque commodi aliquam suscipit odit. Vitae natus nulla velit quod ipsam delectus nobis iste maxime, beatae architecto ratione quidem officiis ullam enim voluptatem quas odio unde, veritatis at dolor iure cumque a perferendis quaerat! Atque nisi perferendis explicabo optio quas enim magni. Quam dolor perspiciatis totam expedita odio fugiat, vitae quasi velit? Quibusdam nostrum et accusamus nobis? Fugiat, vitae. Facilis maiores ullam architecto, harum odio deserunt commodi minus. Nam, tenetur minima deleniti quam impedit perspiciatis consectetur quas quos! Facere vero vitae at libero suscipit placeat nihil commodi sit amet facilis quod laudantium odio delectus quidem, officiis, atque hic in et est reiciendis nobis a explicabo. Sed tempore voluptatem, dolores fugiat corrupti animi vel delectus quaerat est eius mollitia voluptates optio. Voluptatem, voluptatibus.</p>
          </div>
          <div className="mt-5 col-lg-6 check">
            <img src={umrahimage} alt="umrah image" className="imgss" />
          </div>
        </div>
        <div className="row">
          <h3>Dubai Visit Services</h3>
          <div className="mt-5 col-lg-6 paragraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aperiam tempore, in neque totam, magni repudiandae necessitatibus molestias nesciunt cumque ullam laboriosam? Ea, recusandae inventore esse harum impedit, doloremque, voluptates quas provident dolore obcaecati aspernatur nemo. Nemo vel id nobis nihil fugiat, error iusto deleniti amet officia, dignissimos magni sunt sint. Et tenetur possimus accusantium totam, corrupti ex pariatur! Iusto id totam, repellat obcaecati incidunt voluptatum provident dolorum magnam quis dolorem ipsum nesciunt blanditiis officia eum aut debitis cumque commodi aliquam suscipit odit. Vitae natus nulla velit quod ipsam delectus nobis iste maxime, beatae architecto ratione quidem officiis ullam enim voluptatem quas odio unde, veritatis at dolor iure cumque a perferendis quaerat! Atque nisi perferendis explicabo optio quas enim magni. Quam dolor perspiciatis totam expedita odio fugiat, vitae quasi velit? Quibusdam nostrum et accusamus nobis? Fugiat, vitae. Facilis maiores ullam architecto, harum odio deserunt commodi minus. Nam, tenetur minima deleniti quam impedit perspiciatis consectetur quas quos! Facere vero vitae at libero suscipit placeat nihil commodi sit amet facilis quod laudantium odio delectus quidem, officiis, atque hic in et est reiciendis nobis a explicabo. Sed tempore voluptatem, dolores fugiat corrupti animi vel delectus quaerat est eius mollitia voluptates optio. Voluptatem, voluptatibus.</p>
          </div>
          <div className="mt-5 col-lg-6 check">
            <img src={DubaiImage} alt="Dubai image" className="imgss" />
          </div>
        </div>
        <div className="row">
          <h3>Ticketing</h3>
          <div className="mt-5 col-lg-6 paragraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aperiam tempore, in neque totam, magni repudiandae necessitatibus molestias nesciunt cumque ullam laboriosam? Ea, recusandae inventore esse harum impedit, doloremque, voluptates quas provident dolore obcaecati aspernatur nemo. Nemo vel id nobis nihil fugiat, error iusto deleniti amet officia, dignissimos magni sunt sint. Et tenetur possimus accusantium totam, corrupti ex pariatur! Iusto id totam, repellat obcaecati incidunt voluptatum provident dolorum magnam quis dolorem ipsum nesciunt blanditiis officia eum aut debitis cumque commodi aliquam suscipit odit. Vitae natus nulla velit quod ipsam delectus nobis iste maxime, beatae architecto ratione quidem officiis ullam enim voluptatem quas odio unde, veritatis at dolor iure cumque a perferendis quaerat! Atque nisi perferendis explicabo optio quas enim magni. Quam dolor perspiciatis totam expedita odio fugiat, vitae quasi velit? Quibusdam nostrum et accusamus nobis? Fugiat, vitae. Facilis maiores ullam architecto, harum odio deserunt commodi minus. Nam, tenetur minima deleniti quam impedit perspiciatis consectetur quas quos! Facere vero vitae at libero suscipit placeat nihil commodi sit amet facilis quod laudantium odio delectus quidem, officiis, atque hic in et est reiciendis nobis a explicabo. Sed tempore voluptatem, dolores fugiat corrupti animi vel delectus quaerat est eius mollitia voluptates optio. Voluptatem, voluptatibus.</p>
          </div>
          <div className="mt-5 col-lg-6 check">
            <img src={Ticket} alt="Dubai image" className="imgss" />
          </div>
        </div>
      </div>
    </div>

  )
}
export default Services;