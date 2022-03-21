import React, {Component} from 'react';

export class Home extends Component {

    render(){

        return (
        
             <div>
            {/* <div className ="navbar"> */}

    {/* <nav>

      <img src="./Images/Inmlogo.jpg" width="125" alt="Designed logo"/>

      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>

    </nav> */}
  {/* </div> */}
 {/* Hero */}
  <section>
    <div className="hero-image">
      <div className="hero-text">
        <div className="hero-container">

          <h1>WELCOME TO I.N.M MAKEUP</h1>
          <p>The most inclusive brand. 
            <br/>
            All shades are welcome.</p>
          <button><a href="products.html">Shop Now!</a></button>
        </div>

      </div>
    </div>
  </section>
  



{/* 
  <!-- FOOTER --> */}
  {/* <footer id="footer">
    <div className="footer-text">
      <div className="copyright">
        <p>
          &copy; I.N.M Make-up, An Iman Nyalle Momoh LLC. ALL RIGHTS RESERVED.
        </p>
      </div>
      <br />
      <div className="footer-links">
        <a href="index.html">| Home page |</a>
        <a href="contact.html"> Contact Us |</a>
        <a href="products.html"> Shop Now </a>
      </div>
    </div>
  </footer> */}
  </div>

        )
       
    }
    
}
export default Home;