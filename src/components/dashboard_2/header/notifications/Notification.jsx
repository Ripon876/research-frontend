import React from "react";

function Notification() {
	return (
		<div className="toast mx-auto" style={{ opacity: 1 }}>
			<div className="toast-header">
				<img src="https://via.placeholder.com/20x20" className="img-fluid mr-2" />
				<strong className="mr-auto">Mark</strong>
				<small>11 mins ago</small>
			</div>
			<div className="toast-body">Hello, world! This is a Notification.</div>
		</div>
	);
}

export default Notification;
