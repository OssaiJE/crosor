import React from 'react'

const GuestFooter = () => {
    return (
      <div>
        {/* Footer starts */}

        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="footer-wrapper">
                <div className="col-md-3 col-sm-3">
                  <a href="#a">
                    <img
                      src="/assets/images/logo-black.png"
                      alt=""
                      className="footer-logo"
                    />
                  </a>
                  <ul className="list-inline social-icons">
                    <li>
                      <a href="#aa">
                        <i className="icon ion-social-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#a">
                        <i className="icon ion-social-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#a">
                        <i className="icon ion-social-googleplus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#a">
                        <i className="icon ion-social-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#a">
                        <i className="icon ion-social-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 col-sm-2">
                  <h6>For individuals</h6>
                  <ul className="footer-links">
                    <li>
                      <a href="#a">Signup</a>
                    </li>
                    <li>
                      <a href="#a">login</a>
                    </li>
                    <li>
                      <a href="#a">Explore</a>
                    </li>
                    <li>
                      <a href="#a">Finder app</a>
                    </li>
                    <li>
                      <a href="#a">Features</a>
                    </li>
                    <li>
                      <a href="#a">Language settings</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 col-sm-2">
                  <h6>For businesses</h6>
                  <ul className="footer-links">
                    <li>
                      <a href="#a">Business signup</a>
                    </li>
                    <li>
                      <a href="#a">Business login</a>
                    </li>
                    <li>
                      <a href="#a">Benefits</a>
                    </li>
                    <li>
                      <a href="#a">Resources</a>
                    </li>
                    <li>
                      <a href="#a">Advertise</a>
                    </li>
                    <li>
                      <a href="#a">Setup</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 col-sm-2">
                  <h6>About</h6>
                  <ul className="footer-links">
                    <li>
                      <a href="#a">About us</a>
                    </li>
                    <li>
                      <a href="#a">Contact us</a>
                    </li>
                    <li>
                      <a href="#a">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#a">Terms</a>
                    </li>
                    <li>
                      <a href="#a">Help</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-3">
                  <h6>Contact Us</h6>
                  <ul className="contact">
                    <li>
                      <i className="icon ion-ios-telephone-outline"></i>+1 (234)
                      222 0754
                    </li>
                    <li>
                      <i className="icon ion-ios-email-outline"></i>
                      info@crosorconnect.com
                    </li>
                    <li>
                      <i className="icon ion-ios-location-outline"></i>228 Park
                      Ave S NY, USA
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>copyright @ Crosor team 2021. All rights reserved</p>
          </div>
        </footer>

        {/* Footer ends */}
      </div>
    );
}

export default GuestFooter
