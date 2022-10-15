import {Link} from 'react-router-dom';

function Header({userType}) {
	return (
		<div>
			<header id="header" className="fixed-top" style={{top: '0'}}>
			    <div className="container d-flex align-items-center">
				    <h1 className="logo mr-auto"><Link to="/">Reasearch</Link></h1>
				    <nav className="nav-menu d-none d-lg-block">
				        <ul>
				          <li className="drop-down"><Link to="" style={{fontSize: '20px'}}>
						  <img src="https://via.placeholder.com/30x30" className='img-fluid rounded-circle' />	
				          </Link>
				            <ul>
				              <li><Link to="/">Request to research my problem</Link></li>
				              <li><Link to="/">Request to be a researcher</Link></li>
				            </ul>
				          </li>
				          <li><Link to="/logout" style={{fontSize: '20px'}}><i class="icofont-logout"></i></Link></li>
				        </ul>
				    </nav>
			    </div>
			  </header>
		</div>
	)
}

export default Header;