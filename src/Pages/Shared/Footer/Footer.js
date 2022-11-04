import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <div className="main-footer">
      <div className="container">
        <div className="row">

          {/* Column1 */}
          <div className="col">
            <h4>Max LARN</h4>
            <h1 className="list-unstyled">
              <li>Pabna,Rajshahi</li>
              <li>123 Streeet Pabna </li>
            </h1>
          </div>

          {/* Column2 */}
          <div className="col">
            <h4>Courses</h4>
            <ui className="list-unstyled">
              <li>HTML</li>
              <li>CSS</li>
              <li>BOOTSTRAP</li>
            </ui>
          </div>

          {/* Column3 */}
          <div className="col">
            <h4>WELL ANOTHER COURSES</h4>
            <ui className="list-unstyled">
              <li>REACT</li>
              <li>JAVASCRIPT</li>
              <li>MORE</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
           Copyright By @Sia | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;