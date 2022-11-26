import { useState } from "react";
import Notification from "./Notification";
import Modal from "../../modal/Modal";
import { notifications } from "./smd";
import "./Notifications.css";

function Notifications() {
	const [show, setShow] = useState(false);
	const data = {
		type: "Notifications",
	};
	return (
		<div className="col-md-4 py-4">
			{show && <Modal data={data} view={setShow} />}
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
					{notifications?.slice(0,3)?.map((notification) => (
						<Notification notification={notification} dash />
					))}
				</div>
				<div className="seeAllNotiBtn">
					<h2
						className="text-center"
						onClick={() => {
							setShow(true);
						}}
					>
						See All <i class="icofont-simple-down"></i>
					</h2>
				</div>
			</div>
		</div>
	);
}

export default Notifications;
