import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

function Navbar() {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-normal">Melanie DeBarros</h5>
    <nav className="navbar navbar-expand-lg navbar-light my-2 my-md-0 mr-md-3">
      <Link className="navbar-brand" to="/">
        About
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item p-2 text-dark">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === "/" || window.location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item p-2 text-dark">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}


{/* <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
<h5 class="my-0 mr-md-auto font-weight-normal">Melanie DeBarros</h5>
<nav class="my-2 my-md-0 mr-md-3">
  <a class="p-2 text-dark" href="index.html">About</a>
  <a class="p-2 text-dark" href="portfolio.html">Portfolio</a>
  <a class="p-2 text-dark" href="contact.html">Contact</a>
</nav>
</div> */}

export default Navbar;
