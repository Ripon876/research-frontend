import { useState } from "react";
import { Fade } from "react-reveal";
import Moment from "react-moment";
import Modal from "../modal/Modal";

function Publication({article}) {
	const [show, setShow] = useState(false);
	const [data, setData] = useState({
		type: "Publication",
		id: article.id,
		data: article,
	});
	return (
		<div className="col-md-4 mb-4">
			{show && <Modal data={data} view={setShow} />}
			<Fade>
				<div className="card">
					<div
						className="card-body"
						style={{
							boxShadow: "0 0.25rem 0.75rem rgb(0 0 0 / 10%)",
							minHeight: '230px'
						}}
					>
						<h5 className="card-title">
							{article?.title.substr(0,50)}. . .
							<span
								className={`ml-2 badge ${
									article.status === "Review"
										? "badge-warning"
										: article.status === "Approved"
										? "badge-success"
										: "badge-danger"
								}`}
							>
								{article?.status}
							</span>
						</h5>
						<p className="card-text">
							{article?.description.substr(0, 100)} . . .
						</p>
						<div className="d-flex justify-content-between">
							<p
								style={{ cursor: "pointer" }}
								onClick={() => {
									setShow(true);
								}}
							>
								See More
							</p>
							<p>
								<Moment fromNow>{article?.date}</Moment>
							</p>
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
}

export default Publication;
