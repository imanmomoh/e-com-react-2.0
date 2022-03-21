import React, {Component} from 'react';

export class Footer extends Component {

    render(){

        return (

<footer id="footer">
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
        <a href="products.html"> Shop Now </a> <br/>
        <br/>
        <br/>
       <span className="ani"> <a href="https://www.instagram.com/">CHECK OUR IG</a></span>
      </div>
    </div>
  </footer>

        )
    }
}
export default Footer;