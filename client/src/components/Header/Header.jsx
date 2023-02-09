import React, { useState } from 'react'
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from 'react-router-dom';
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
              <NavLink to="/">Home Page</NavLink>
            </li>
            <li className="Nav-list">
              <NavLink to="/events">Events</NavLink>
            </li>
            <li className="Nav-list">
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <li className="Nav-list">
              <NavLink to="/ourteam">Our Team</NavLink>
            </li>
            <li className="Nav-list">
              <NavLink to="/contactus">Contact Us</NavLink>
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
                  <NavLink to="/" onHide={handleClose}>Home Page</NavLink>
                </li>
                <li className="R_Nav-list">
                  <NavLink to="/events" onHide={handleClose}>Events</NavLink>
                </li>
                <li className="R_Nav-list">
                  <NavLink to="/aboutus" onHide={handleClose}>About Us</NavLink>
                </li>
                <li className="R_Nav-list">
                  <NavLink to="/ourteam" onHide={handleClose}>Our Team</NavLink>
                </li>
                <li className="R_Nav-list">
                  <NavLink to="/contactus" onHide={handleClose}>Contact Us</NavLink>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
  )
}
