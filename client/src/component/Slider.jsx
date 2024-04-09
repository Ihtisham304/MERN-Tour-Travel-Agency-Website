import React from 'react'
import Marquee from 'react-fast-marquee'
// import ReactDom from 'react-router-dom'
import Slide1img from '../assets/passport2.jpg'
import Slide2img from '../assets/tickt(1).jpg'
import Slide3img from '../assets/Dubai 3.jpg'
import Slide4img from '../assets/Umrah .jpg'
import Slide5img from '../assets/emrites.jpg'
import  "../component/style.min.css"
export const Slider= ({news}) => {
  console.log(news)
    return (
      <div>
        <div className="hd-marque">
          <div className="marquee">
            {
              news.map((item,index)=>(
                <div key={index}>{item}</div>
              ))
            }
          </div>
        </div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active check" data-bs-interval="2500">
            <div className="img-w">
              <img src={Slide1img} className="img-w" alt="..." />
            </div>
            <div className="carousel-caption">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item check" data-bs-interval="2000">
            <div className="img-w">
              <img src={Slide2img} className="img-w" alt="..." />
            </div>
            <div className="carousel-caption">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item check" data-bs-interval="2000">
            <div className="img-w">
              <img src={Slide3img} className="img-w" alt="..." />
            </div>
            <div className="carousel-caption">
              <h5>3rd slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item check" data-bs-interval="2000">
            <div className="img-w">
              <img src={Slide4img} className="img-w" alt="..." />
            </div>
            <div className="carousel-caption">
              <h5>4th slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item check" data-bs-interval="2000">
            <div className="img-w">
              <img src={Slide5img} className="img-w" alt="..." />
            </div>
            <div className="carousel-caption">
              <h5>4th slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
    )
} 