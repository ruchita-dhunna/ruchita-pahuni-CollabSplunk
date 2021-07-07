import "./header.css";
import { Link } from 'react-router-dom';
import logo from "./splunklogo.jpg";
import SidePanel from "../SidePanel/SidePanel";
import React, { useEffect } from "react";
function Header() {
  const ref = React.createRef();
  useEffect(() => {
    ref.current.style.right = '-250px'
  }, [])
  function toggle(e) {
    var rht = ref.current.style.right;
    if (rht === "-250px") {
      ref.current.style.right = "0px";
    }
    else {
      ref.current.style.right = "-250px";

    }
  }

  return (
    <nav className="header-navbar navbar fixed-top navbar-dark text-light bg-dark">
      <a className="title-navbar navbar-brandv d-flex align-items-center" href="#">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        {/* <div className='header-heading'> */}
        <Link to='/' className='header-heading '>
          &nbsp; Dashboard || Not In Splunk Issues 
        </Link>
        {/* </div> */}
      </a>
      <button
        className="navbar-toggler d-block d-xl-none d-lg-none d-md-block"
        type="button"
        onClick={toggle}
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to='/' className='header-heading '>
                Dashboard <span class="sr-only">(current)</span>
              </Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Troubleshooting Steps
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Link to='/aboutus' className='header-heading '>
                About us
              </Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Link to='/table' className='header-heading '>
                Table
              </Link>
            </a>
          </li>
        </ul>
      </div>
      <div className="side-panelsm d-md-block d-lg-none pr-3 " ref={ref}>
        <SidePanel />
      </div>
    </nav>
  );
}

export default Header;
