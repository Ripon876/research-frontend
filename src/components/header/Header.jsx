import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TopBar from "./TopBar";

function Header() {
  return (
    <>
      <TopBar />
      <header id="header" className="fixed-top">
        <div className="container-fluid px-5 d-flex align-items-center">
          <h1 className="logo mr-auto">
            <Link to="/">Reasearch</Link>
          </h1>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="">
                <Link to="/about_us">About Us</Link>
              </li>
              {/*<li className="">
                <Link to="/challenges">Challenges</Link>
              </li>*/}
              <li className="">
                <Link to="/awards">Awards</Link>
              </li>
              <li className="">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="drop-down">
                <Link to="">Challenges</Link>
                <ul>
                  <li>
                    <Link to="/challenges">Challenges</Link>
                  </li>
                  <li>
                    <Link to="/top_challengers">Top Challengers</Link>
                  </li>
                </ul>
              </li>
              <li className="drop-down">
                <Link to="">Research REQUEST</Link>
                <ul>
                  <li>
                    <Link to="/research-my-problem">
                      Request to research my problem
                    </Link>
                  </li>
                  <li>
                    <Link to="/publication-request">
                      Request to publish your research
                    </Link>
                  </li>
                  <li>
                    <Link to="/request-help-for-research">
                      Help in my project
                    </Link>
                  </li>
                  <li>
                    <Link to="/apply-for-project-funding">
                      Apply for project funding
                    </Link>
                  </li>
                  <li>
                    <Link to="/apply-for-investment">Apply for investment</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  to="/be-a-researcher"
                  className="btn px-4 py-2 rounded-pill"
                  style={{
                    background: "rgb(33 37 41)",
                    color: "white",
                  }}
                >
                  Be A Researcher
                </Link>
              </li>
              <li className="drop-down">
                <Link to="">
                  <i className="icofont-ui-user"></i>
                </Link>
                <ul style={{ transform: "translateX(-35px)", width: "100px" }}>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div id="preloader"></div>
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
    </>
  );
}

export default Header;
