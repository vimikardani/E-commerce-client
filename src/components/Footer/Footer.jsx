import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-container'>
          <div className="left-footer">
            <div className="about">
              <span class="footer-left-title">ABOUT</span>
              <ul class="about-list">
                <li><a href="#" className='about-list-link'>Contact Us</a> </li>
                <li><a href="#" className='about-list-link'>About Us</a></li>
                <li><a href="#" className='about-list-link'>Careers</a></li>
                <li><a href="#" className='about-list-link'>Flipkart Stories</a></li>
                <li><a href="#" className='about-list-link'>Press</a></li>
                <li><a href="#" className='about-list-link'>Flipkart Wholesale</a></li>
                <li><a href="#" className='about-list-link'>Cleartrip</a></li>
                <li><a href="#" className='about-list-link'>Corporate Information</a></li>
              </ul>
            </div>
            <div className="help">
              <span class="footer-left-title">HELP</span>
              <ul class="help-list">
                <li><a href="#" className='help-list-link'>Payment</a> </li>
                <li><a href="#" className='help-list-link'>Shipping</a></li>
                <li><a href="#" className='help-list-link'>Careers</a></li>
                <li><a href="#" className='help-list-link'>Cancellation & Return</a></li>
                <li><a href="#" className='help-list-link'>FAQ</a></li>
                <li><a href="#" className='help-list-link'>Report Infringement</a></li>
              </ul>
            </div>
            <div className="consumerpolicy">
              <span class="footer-left-title">CONSUMER POLICY</span>
              <ul class="consumer-list">
                <li><a href="#" className='consumer-list-link'>Cancellation & Return</a> </li>
                <li><a href="#" className='consumer-list-link'>Terms of Use</a></li>
                <li><a href="#" className='consumer-list-link'>Security</a></li>
                <li><a href="#" className='consumer-list-link'>Privacy</a></li>
                <li><a href="#" className='consumer-list-link'>Sitemap</a></li>
                <li><a href="#" className='consumer-list-link'>Grievance Redressal</a></li>
                <li><a href='#' className='consumer-list-link'>EPR Compliance</a></li>
              </ul>
            </div>
            <div className="social">
              <span class="footer-left-title">SOCIAL</span>
              <ul class="social-list">
                <li><a href="#" className='social-list-link'>Facebook</a> </li>
                <li><a href="#" className='social-list-link'>Twitter</a></li>
                <li><a href="#" className='social-list-link'>YouTube</a></li>
              </ul>
            </div>
            <div className="border"></div>
          </div>
          <div className="right-footer">
            <div className="mail">
              <span className="mail-text">Mail Us:</span>
              <p className='mail-address'>Flipkart Internet Private Limited,<br></br>

                Buildings Alyssa, Begonia &<br></br>

                Clove Embassy Tech Village,<br></br>

                Outer Ring Road, Devarabeesanahalli Village,<br></br>

                Bengaluru, 560103,<br></br>

                Karnataka, India</p>
            </div>
            <div className="address">
              <span className="address-text">Registered Office Address:</span>
              <p className='regi-address'>Flipkart Internet Private Limited,<br></br>

                Buildings Alyssa, Begonia &<br></br>

                Clove Embassy Tech Village,<br></br>

                Outer Ring Road, Devarabeesanahalli Village,<br></br>

                Bengaluru, 560103,<br></br>

                Karnataka, India<br></br>

                CIN : U51109KA2012PTC066107<br></br>

                Telephone: 044-45614700</p>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <div className="seller">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-bag-fill" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
            </svg>
            <a href='#' className='footer-end-text'>Become a Seller</a>
          </div>
          <div className="advertise">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-bookmark-star-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098z"/>
</svg>
<a href="#" className="footer-end-text">Advertise</a>
          </div>
          <div className="giftcard">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-gift-fill" viewBox="0 0 16 16">
  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07M9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z"/>
</svg>
<a href="#" className="footer-end-text">Gift Cards</a>
          </div>
          <div className="helpcenter">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
</svg>
<a href="#" className="footer-end-text">Help Center</a>
          </div>
          <div className="copyright">
            <span className='footer-end-text'>© 2007-2023 Flipkart.com</span>
          </div>
        
        <div className='footer-end-links'>
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt="" />
        </div>
        </div>
      </footer>
    </>
  )
}

export default Footer