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
        <a href="products.html"> Shop Now </a>
      </div>
    </div>
  </footer>

        )
    }
}
export default Footer;