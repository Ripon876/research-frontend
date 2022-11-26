import Notification from "./Notification";

import "./Notifications.css";

function Notifications() {
	return (
		<div className="col-md-4 py-4">
			<div className="notifications">
				<div>
					<h4
						className="mb-1 text-secondary"
						style={{ paddingLeft: "33px" }}
					>
						Notifications
					</h4>
				</div>

				<div>
					<Notification />
					<Notification />
					<Notification />
					<Notification />
				</div>
				<div className="seeAllNotiBtn">
					<h2 className="text-center">
						See All <i class="icofont-simple-down"></i>
					</h2>
				</div>
			</div>
		</div>
	);
}

export default Notifications;
