import React from "react";

function AboutUs(){
    return(

        <div>
        <div className="container-fluid about-us" id="About">
        <div className="mt-5">
          <h1 className="primary">About Us</h1>
          <div className="row">
            <div className="col-lg-6">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, cupiditate consequatur dolor vero sed animi voluptatibus vitae dolorem libero eum velit facilis sequi voluptates dignissimos magnam iure at voluptate! Soluta repellendus adipisci aspernatur atque molestias eaque officiis facere possimus? Doloremque voluptatibus tempore et dolorem. Iure dicta nulla rem blanditiis eius possimus veniam sunt praesentium eum, aut pariatur mollitia minus eos, exercitationem vel facilis quisquam. Repudiandae quam soluta corporis ipsam earum. Officiis at quas incidunt minima explicabo, repudiandae ipsam temporibus! Accusamus consectetur voluptatibus maxime tenetur ut necessitatibus perspiciatis qui. Neque minus porro voluptatem vel, nesciunt rem repudiandae voluptatum voluptatibus necessitatibus aut nisi dolores magnam similique eaque? Minus suscipit nihil expedita ex maxime ab illo ut ullam blanditiis consequuntur. Debitis quasi fuga adipisci illo sequi unde. Iste saepe quod expedita pariatur esse voluptatibus, aperiam optio perspiciatis culpa doloremque aut consectetur dolores praesentium error mollitia molestiae maiores fuga nulla repellendus eius! Alias ut mollitia dolore harum minus eligendi dolorum officiis ipsa beatae maxime nesciunt deleniti sit, excepturi quasi explicabo dicta necessitatibus voluptas enim corrupti, id eaque?</p>
            </div>
            <div className="col-lg-6">
              <img src="" alt="Here is office image." />
            </div>
          </div>
            <div className="info row mg-btm">
            <h1 className="mt-5">Our Management:</h1>
              <div className="col-lg-6">
                <img className="profile-img" alt="Profile" />
                <h6>Mr Aitizaz Ali</h6>
                <h5>Operations Executive</h5>
                <label>Mobile No:</label>
                <a href="Tel:+923119164441" style={{color: '#010437'}}><i className="fa fa-phone"></i> +923119164441</a>
              </div>
              <div className="col-lg-6">
                <img className="profile-img" alt="Profile" />
                <h6>Mr Zohaib Khattak</h6>
                <h5>Sales Executive</h5>
                <label>Mobile No:</label>
                <a href="tel:+923349429285" style={{color: '#010437'}}><i className="fa fa-phone"></i> +923349429825</a>
              </div>
            </div>
        </div>
      </div>

      {/* <!-- Contact-Us --> */}
      <div className="container-fluid"style={{backgroundColor: '#010437'}} id="Contact">
        <h1 style={{textAlign: 'center', color: '#fff'}}>Contact Us</h1>
        <p style={{color: '#fff'}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt optio voluptatum a, molestias explicabo pariatur molestiae distinctio consequuntur nemo rerum similique deleniti laudantium suscipit quibusdam debitis neque dignissimos vero accusamus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, maxime exercitationem alias cupiditate assumenda mollitia aliquam aliquid sunt distinctio pariatur, culpa dicta iure, quae accusamus quod voluptates eaque consequatur perferendis?
        </p>
        <div className="row" style={{textAlign: 'center'}}>
          <div className="col-lg-6">
            <ul className="nospace linklist contact">
              <li><i className="fa fa-map-marker" style={{color: '#fff'}}></i>
                <address style={{color: '#fff'}}>
                Office No 1&2, 1st Floor, Khan Tower, Chungi Stop,<br />
                Main GT Road, Nowshera Kalan.
                </address>
              </li>
              <li><a href="tel:+001234567890"><i className="fa fa-phone"></i> +00 (123) 456 7890</a></li>
              <li style={{color: '#fff'}}><i className="fa fa-envelope-o" style={{color: '#fff'}}></i> royalairnowshera@outlook.com</li>
            </ul>
          </div> 
          <div className="col-lg-6">
            <a href="" alt="google map location"></a>
          </div>
        </div>
      </div>
      </div>
    )
}

export default AboutUs;