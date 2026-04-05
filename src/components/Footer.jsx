import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <section className="newsletter">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="news-form">
          <input type="email" placeholder="Your email address" />
          <button>Sign Up</button>
        </div>
      </section>

      <footer>
        <div className="footer-col">
          <img className="footer-logo" src="/images/cara3.png" alt="Cara" />
          <h4>Contact</h4>
          <p><strong>Address:</strong> Babcock University Ilishan-Remo Ogun State</p>
          <p><strong>Phone:</strong> +1(661) 901 3194 / +234 816 6059 298</p>
          <p><strong>Hours:</strong> 10am - 10pm, Sun - Sat</p>
          <div className="footer-follow">
            <h4>Follow us</h4>
            <div className="footer-icons">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-youtube" />
              <i className="fa-brands fa-x-twitter" />
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4>About</h4>
          <Link to="/about">Our Story</Link>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
          <Link to="/contact">Contact Us</Link>
          <Link to="/blog">Blog</Link>
        </div>

        <div className="footer-col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        <div className="footer-col footer-install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <img src="/images/realpay1.png" alt="App Store" />
          <p>Secured Payment Gateways</p>
          <img src="/images/Credit card icons.png" alt="Payment" />
        </div>

        <div className="footer-copyright">
          <p>© Cara 2025 Clothing Brand Website</p>
        </div>
      </footer>
    </>
  );
}
