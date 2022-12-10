import {useState} from 'react';
import Info from "./profileInfo/Info";
import Notifications from "./notifications/Notifications";
import Modal from '../modal/Modal';
import "./Header.css";

function Header() {

const [isOpen, setIsOpen] = useState(false);

	return (
		<>
		{isOpen && <Modal view={setIsOpen} settingsModal/>}
		<div className="dashboardHeader">
			<div
				className="container-fluid position-relative"
				style={{ maxWidth: "1600px" }}
			>
				<div className="row align-items-center justify-content-between">
					<Info />
					<Notifications />
				</div>
				<div class="dropdown position-absolute" style={{top: '5px',right: 0}}>
					<button
						className="bg-transparent border-0 btn btn-lg btn-secondary dropdown-toggle text-dark shadow-none"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i class="icofont-ui-user"></i>
					</button>
					<div
						className="dropdown-menu"
						aria-labelledby="dropdownMenuButton"
					>
						<a className="dropdown-item" href="#" 
						onClick={()=> { setIsOpen(true)}}
						>
							<i class="icofont-gear pr-2"></i>
							Settings
						</a>
						<a className="dropdown-item" href="#">
							<i class="icofont-logout pr-2"></i>
							Logout
						</a>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default Header;
