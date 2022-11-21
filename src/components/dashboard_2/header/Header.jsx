import Info from "./profileInfo/Info";
import Notifications from "./notifications/Notifications";
import "./Header.css";

function Header() {
	return (
		<div className="dashboardHeader">
			<div className="container-fluid" style={{ maxWidth: "1600px" }}>
				<div className="row align-items-center justify-content-between">
					<Info />
					<Notifications />
				</div>
			</div>
		</div>
	);
}

export default Header;
