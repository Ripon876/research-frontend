import {Link} from 'react-router-dom';

function Header() {
	return (
		<div>
			<header id="header" className="fixed-top" style={{top: '0'}}>
			    <div className="container d-flex align-items-center">
				    <h1 className="logo mr-auto"><Link to="/">Reasearch</Link></h1>
				    <nav className="nav-menu d-none d-lg-block">
				        <ul>
				          <li className="drop-down"><Link to="">PROFILE</Link>
				            <ul>
				              <li><Link to="/">Request to research my problem</Link></li>
				              <li><Link to="/">Request to be a researcher</Link></li>
				            </ul>
				          </li>
				        </ul>
				    </nav>
			    </div>
			  </header>
		</div>
	)
}

export default Header;