
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="home">
        <img id="leaves" src="./img/mintleaves.png" />
        <div className="home-header">
          <h1>Your Favourite Food <br /> Delivered To You</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

          <div className="search">
            <input placeholder="Enter Your Location" />
            <button>Find</button>
          </div>

        </div>


        <div className="img" >
          {/* <img className="img1" src="./img/Vector2.png" alt="vector" /> */}
          <img className="center" src="./img/Group296.png"  />
          {/* <img className="img2" src="./img/Vector.png" alt="vector" /> */}
        </div>


      </section>


      <section className="menu">
       
        <div className="menu-tag">
          <img src="./img/Ellipse.png" draggable="false" />
          <p>The flavours of your choice</p>
        </div>
        <div className="dishes">
          <div className="food">
            <img src="./img/1.png"   />
            <img src="./img/ChickenFriedRice.png"  />
            <img src="./img/BratwurstSamplerPlatter1.png"  />
            <img src="./img/Pizza.png"  />
            <img src="./img/Plants.png" />
            <img src="./img/FoodDubai.png"  />
            <img src="./img/LosAngeles.png"  />
            <img src="./img/fish2.png"  />
          </div>
        </div>
      </section>


      <section className="cities">
        <p>Get your favourite food from the best restaurants in your city </p>
        <div className="photos">
          <img className="photos1" src="./img/Frankfurt’s.png"  />
          <img className="photos2" src="./img/captcha.png" />
          <img className="photos3" src="./img/Dresden.png" />
          <img className="photos4" src="./img/Cologne.png" />
          <img className="photos5" src="./img/Travel.png" />
          <img className="photos6" src="./img/munich.png" />
        </div>
      </section>


      <section className="about">
        <div id="about-us"><h2>About us</h2></div>
        <img src="./img/Ellipse117.png" draggable="false" />
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>

        <div className="about-us">
          <div className="group">
            <div className="logo">
            <img id="img4" src="./img/Group 251.png" />
            </div>

            <div>
              <h2>More Money</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna </p>
            </div>
          </div>

          <div className="group">
            <div className="logo">
            <img id="img4" src="./img/Group 250.png" />
            </div>

            <div>
              <h2>100% Risk Free</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna </p>
            </div>
          </div>

          <div className="group">
            <div className="logo">
              <img id="img4" src="./img/Group-249.png" />
            </div>

            <div>
              <h2>Home Delivery</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna </p>
            </div>
          </div>

        </div>

      </section>


    <section className="thumbnail">
      <button className="tag" >Become a Partner</button>
       <div className="setup">
       <div className="store-setup">
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        Ut wisi enim ad minim veniam, 
        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum
        </p>
        <button>Sign up your store</button>

      </div>
      </div>
      <img  src="./img/thumbnail1.png"  />
    </section>

    <section className="download">
      <div id="ellipse1" ></div>
      <img className="svg" src="./img/svgmockup1.png" />

      <div className="grp2">
      <div id="ellipse2" ></div>
      <p>Download the App</p>
        <h3>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, consequat.  
        </h3>

        <div className="download-links">
        <div className="link1"><img src="./img/PlayStore.png" />Available on the playstore</div>
        <div className="link2"><img src="./img/Apple.png" />Available on the AppStore</div>
        </div>
      </div>
    </section>

    <section className="contact">
      <div className="contact-section">
        <div className="contact-add">
          <h3>eatarian</h3>
          <p>
          Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, 
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
          </p>

          <p>Lorem ipsum dolor sit</p>
          <p>Lorem ipsum dolor sit</p>
        </div>

        <div className="contact-add-1">
     
        <h3>Lorem ipsum</h3>
           
           <div className="list">
             <li>About us</li>
             <li>Our Service</li>
             <li>Contact Us</li>
             <li>Lorem Ipsum</li>
           </div>
        </div>


        <div className="contact-add-1">
        
        <h3>Lorem ipsum</h3>
          <div className="list">
             <li>About us</li>
             <li>Our Service</li>
             <li>Contact Us</li>
             <li>Lorem Ipsum</li>
           </div>
        </div>
      </div>

    <div className="float-tag">
      <p style={{ fontSize:"20px" , color:"white"}}>Powered by <h2>Flaska</h2></p>
      <img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" />
      <img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" />
      <img src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" />
    </div>

    </section>

    <section className="footer">
      Copyright © 2019 <span style={{color:"yellow"}}>Organic</span>. All rights reserved. Designed by <span style={{color:"yellow"}}>GraphicForest.</span>
    </section>

    </div>
  );




}


export default Home;
