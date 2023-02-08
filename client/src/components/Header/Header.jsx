import React, { useState } from 'react'
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css"
export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="NavBar">
        <div className="NavBar-nav">
          <ul className="Navigation">
            <li className="Nav-list">
              <a href="/">Home Page</a>
            </li>
            <li className="Nav-list">
              <a href="/events">Events</a>
            </li>
            <li className="Nav-list">
              <a href="/aboutus">About Us</a>
            </li>
            <li className="Nav-list">
              <a href="/ourteam">Our Team</a>
            </li>
            <li className="Nav-list">
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="R_NavBar-nav">
          <div onClick={handleShow} className="Burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Offcanvas show={show} className="Resp_canvas" onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='Resp_title'>Moonstone</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="R_Navigation">
                <li className="R_Nav-list">
                  <a href="/" onHide={handleClose}>Home Page</a>
                </li>
                <li className="R_Nav-list">
                  <a href="/events" onHide={handleClose}>Events</a>
                </li>
                <li className="R_Nav-list">
                  <a href="/aboutus" onHide={handleClose}>About Us</a>
                </li>
                <li className="R_Nav-list">
                  <a href="/ourteam" onHide={handleClose}>Our Team</a>
                </li>
                <li className="R_Nav-list">
                  <a href="/contactus" onHide={handleClose}>Contact Us</a>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
  )
}
