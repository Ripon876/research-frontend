import { useState, useEffect } from "react";
import Notification from "../header/notifications/Notification";
import { notifications } from "../header/notifications/smd";

function Notifications() {
	const [data, setData] = useState([]);

	const filterByDate = (arr) => {
		let filteredData = {};

		for (let notification of notifications) {
			if (filteredData[notification.date]) {
				filteredData[notification.date].push(notification);
			} else {
				filteredData[notification.date] = [notification];
			}
		}

		setData(Object.entries(filteredData));
	};

	useEffect(() => {
		filterByDate(notifications);
	}, []);

	return ( <div className="notificationsInsideModal">
		

		{ data?.map((date) => (
		<div>
			<h4 className='mt-3 px-2'>{date[0]}</h4>
			<div className="justify-content-md-start justify-content-sm-center row pl-3">
				{date[1]?.map((notification) => (
					<Notification notification={notification} modal />
				))}
			</div>
		</div>
	))}

	</div>)
}

export default Notifications;
