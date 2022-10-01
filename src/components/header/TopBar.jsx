import React from 'react'

const TopBar = () => {
	return (
		<>
		<div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
		    <div className="container-fluid px-5 d-flex">
		      <div className="contact-info mr-auto">
		        <i className="icofont-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
		        <i className="icofont-phone"></i> +1 5589 55488 55
		        <i className="icofont-google-map"></i> A108 Adam Street, NY
		      </div>
		      <div className="social-links">
		        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
		        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
		        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
		        <a href="#" className="skype"><i className="icofont-skype"></i></a>
		        <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
		      </div>
		    </div>
		 </div>
		</>
	)
}

export default TopBar;