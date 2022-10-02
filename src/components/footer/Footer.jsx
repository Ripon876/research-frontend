import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
	return (
		<> <div className='footer'>
			<div className="container">
			  <footer className="pt-5 pb-1">
			    <div className="row">
			      <div className="col-6 col-md-2 mb-3">
			        <h5>Section</h5>
			        <ul className="nav flex-column">
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Home</Link></li>
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Features</Link></li>
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Pricing</Link></li>
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">FAQs</Link></li>
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About</Link></li>
			        </ul>
			      </div>

			      <div className="col-6 col-md-2 mb-3">
			        <h5>Section</h5>
			        <ul className="nav flex-column">
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Home</Link></li>
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Features</Link></li>
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Pricing</Link></li>
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">FAQs</Link></li>
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About</Link></li>
			        </ul>
			      </div>

			      <div className="col-6 col-md-2 mb-3">
			        <h5>Section</h5>
			        <ul className="nav flex-column">
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Home</Link></li>
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Features</Link></li>
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Pricing</Link></li>
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">FAQs</Link></li>
			          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About</Link></li>
			        </ul>
			      </div>

			      <div className="col-md-5 offset-md-1 mb-3">
			        <div>
			          <h5>Research</h5>
			          <p>Sed porttitor lectus nibh. Sed porttitor lectus nibh. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.Sed porttitor lectus nibh. Sed porttitor lectus nibh. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
			        </div>
			      </div>
			    </div>

			    <div className="d-flex flex-column flex-sm-row justify-content-between py-4  border-top">
			      <p>© 2022 Company, Inc. All rights reserved.</p>
			      <ul className="list-unstyled d-flex">
			        <li className="ms-3"><Link className="link-dark" to="#"><i className="icofont-twitter"></i></Link></li>
			        <li className="ms-3"><Link className="link-dark" to="#"><i className="icofont-facebook"></i></Link></li>
			        <li className="ms-3"><Link className="link-dark" to="#"><i className="icofont-instagram"></i></Link></li>
			        <li className="ms-3"><Link className="link-dark" to="#"><i className="icofont-linkedin"></i></Link></li>
			        <li className="ms-3"><Link className="link-dark" to="#"></Link></li>
			      </ul>
			    </div>
			  </footer>
			</div>
			</div>

		</>
	)
}

export default Footer;