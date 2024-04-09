import React, { useReducer, useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Navbar } from './component/Navbar'
import { Slider } from './component/Slider'
import Services from './component/Services';
import About from './component/AboutUs'
import Admin from './component/admin'
import TicketEdit from './component/TicketEdit'
import DubaiEdit from './component/DubaiEdit'
import UmrahEdit from './component/UmrahEdit'

function App() {

   const [news,setNews] = useState(() => {
    const storedNews = localStorage.getItem('news');
    return storedNews ? JSON.parse(storedNews) : [];
})
useEffect(() => {
  localStorage.setItem('news', JSON.stringify(news));
}, [news]);
  const addNews = (newNews)=>{
    setNews([newNews]);
  }
console.log(news)
  return (
    <BrowserRouter>

      <Routes>
        <Route path={'/'} element={
          <>
            <Navbar />
            <Slider news={news}/>
            <Services />
            <About path={''} />
          </>
        }></Route>
        <Route path='/admin' element={<Admin addNews= {addNews}/>}></Route>
        <Route path='/admin/ticket/edit/:id' element={<TicketEdit />}></Route>
        <Route path='/admin/dubai/edit/:id' element={<DubaiEdit />}></Route>
        <Route path='/admin/umrah/edit/:id' element={<UmrahEdit />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
