import Moment from "react-moment";

function Comment() {
	return (
		<div className="border-0 card">
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<div className="align-items-center d-flex">
						<div className="mr-3">
							<img
								src="https://via.placeholder.com/40x40"
								className="img-fluid rounded-circle w-100 h-100"
								alt='Jhone'
							/>
						</div>
						<div className='pt-1'>
							<h5 className="card-title mb-1">Jhon Doe</h5>
							<h6 className="card-subtitle mb-2 text-muted">
								Civil Engineer
							</h6>
						</div>
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
