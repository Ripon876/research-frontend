import React from "react";

function Comment() {
	return (
		<div className="d-flex flex-start mt-4 mb-3">
			<a className="me-3" href="#">
				<img
					className="rounded-circle shadow-1-strong"
					src="https://via.placeholder.com/50x50"
					width="50"
					height="50"
				/>
			</a>
			<div className="flex-grow-1 flex-shrink-1 ml-3">
				<div>
					<div className="d-flex justify-content-between align-items-center">
						<p className="font-weight-bold mb-1">
							Simona Disa
							<span className="small">- 3 hours ago</span>
						</p>
					</div>
					<p className="small mb-0">
						letters, as opposed to using 'Content here, content
						here', making it look like readable English.letters, as
						opposed to using 'Content here, content here', making it
						look like readable English.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Comment;
