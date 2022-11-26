import { Link } from "react-router-dom";
import Notification from "./Notification";

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
				<Notification />
				<Notification />
				<Notification />
				<Notification />
			</div>
		</div>
	);
}

export default Notifications;
