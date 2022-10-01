import React from 'react';
import './Header.css';
import TopBar from './TopBar';

function Header() {
	return (
		<>
    <TopBar />
    <header id="header" className="fixed-top">
        <div className="container-fluid px-5 d-flex align-items-center">

        <h1 className="logo mr-auto"><a href="index.html">Reasearch</a></h1>
        <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li ><a href="index.html">Home</a></li>
              <li className="active"><a href="awards.html">Awards</a></li>
              <li className="drop-down"><a href="">PUBLISH REQUEST</a>
                <ul>
                  <li><a href="research_request.html">Request to research my problem</a></li>
                  <li><a href="published.html">Published</a></li>
                </ul>
              </li>
              
              <li className="drop-down"><a href="">Research REQUEST</a>
                <ul>
                  <li><a href="request_to_research.html">Request to research my problem</a></li>
                  <li><a href="publish_request.html">Request to be a researcher</a></li>
                </ul>
              </li>
              <li><a href="login.html">LOGIN</a></li>

            </ul>
          </nav>
        </div>
      </header>
        <div id="preloader"></div>
  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

		</>
	)
}

export default Header;