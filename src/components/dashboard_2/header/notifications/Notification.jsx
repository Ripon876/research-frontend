import React from "react";
import Moment from "react-moment";

function Notification({ notification, dash }) {
	return (
		<div className="toast mx-auto" style={{ opacity: 1 }}>
			<div className="toast-header">
				<img
					src="https://via.placeholder.com/20x20"
					className="img-fluid mr-2"
				/>
				<strong className="mr-auto">{notification?.name}</strong>
				<small>
					<Moment fromNow>{notification?.date}</Moment>
				</small>
			</div>
			<div className="toast-body">
				{dash
					? notification?.description.substr(0, 97) + ". . ."
					: notification?.description}
			</div>
		</div>
	);
}

export default Notification;
