import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import TopBar from './TopBar';

function Header() {
	return (
		<>
    <TopBar />
    <header id="header" className="fixed-top">
        <div className="container-fluid px-5 d-flex align-items-center">

        <h1 className="logo mr-auto"><Link to="/">Reasearch</Link></h1>
        <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li ><Link to="/">Home</Link></li>
              <li className=""><Link to="/awards">Awards</Link></li>
              <li className="drop-down"><Link to="/">Research REQUEST</Link>
                <ul>
                  <li><Link to="/research-my-problem">Request to research my problem</Link></li>
                  <li><Link to="/publication-request">Request to publish your research</Link></li>
                </ul>
              </li>
              <li><Link to="/be-a-researcher" class="btn px-4 py-2 rounded-pill" style={{
                  background: 'rgb(33 37 41)',
                  color: 'white'}} >Be A Researcher</Link></li>
              {/*<li><Link to="/login"><i class="icofont-ui-user"></i> </Link> </li>*/}
              <li className="drop-down"><Link to="/"><i class="icofont-ui-user"></i></Link>
                <ul>
                  <li><Link to="/signup">Sign Up</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
        <div id="preloader"></div>
  <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>

		</>
	)
}

export default Header;