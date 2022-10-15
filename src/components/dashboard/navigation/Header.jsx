import { Link } from "react-router-dom";
import "./Header.css";

function Header({ userType }) {
	return (
		<div>
			<header id="header" className="fixed-top" style={{ top: "0" }}>
				<div className="container d-flex align-items-center">
					<h1 className="logo mr-auto">
						<Link to="/">Reasearch</Link>
					</h1>
					<nav className="nav-menu d-none d-lg-block">
						<ul>
							<li className="drop-down">
								<Link to="" style={{ fontSize: "20px" }}>
									<i
										className="icofont-notification"
										style={{ fontSize: "1.2em" }}
									></i>
								</Link>
								<ul style={{ width: "180px", left: 0 }}>
									<li>
										<Link to="/">Notification 1</Link>
									</li>
									<li>
										<Link to="/">Notification 2</Link>
									</li>
									<li>
										<Link to="/">Notification 3</Link>
									</li>
								</ul>
							</li>
							<li className="drop-down">
								<Link to="" style={{ fontSize: "20px" }}>
									<img
										src="https://via.placeholder.com/30x30"
										className="img-fluid rounded-circle"
									/>
								</Link>
								<ul style={{ width: "160px" }}>
									<li>
										<Link to={`/dashboard/${userType == 'moderator' ? 'moderator' : 'user'}/profile`}>
											Profile
										</Link>
									</li>
									<li>
										<Link to={`/dashboard/${userType == 'moderator' ? 'moderator' : 'user'}/settings`}>Settings</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link
									to="/logout"
									style={{ fontSize: "20px" }}
									title="Logout"
								>
									<i class="icofont-logout"></i>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</div>
	);
}

export default Header;
