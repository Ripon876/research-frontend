import Moment from "react-moment";

function Comment() {
	return (
		<div className="border-0 card">
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<div>
						<h5 className="card-title mb-1">Mandela</h5>
						<h6 className="card-subtitle mb-2 text-muted">
							Civil Engineer
						</h6>
					</div>
					<div className="p-1">
						<h6 className="card-subtitle mb-2 text-muted">
							<Moment fromNow>2022-10-29</Moment>
						</h6>
					</div>
				</div>
				<div>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Comment;
