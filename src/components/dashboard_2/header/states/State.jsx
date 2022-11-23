import React from "react";

function State() {
	return (
		<div className="col-4 px-1">
			<div
				className="d-flex align-items-center m-2"
				style={{
					height: "110px",
					// width: "10rem",
					backgroundColor : 'rgb(255 255 255 / 85%)',
					boxShadow: "0 0.25rem 0.75rem rgb(0 0 0 / 10%)",
				}}
			>
				<div className="card-body text-center p-2">
					<h2 className="card-title mb-0">15</h2>
					<h5 className="card-title">Card title</h5>
				</div>
			</div>
		</div>
	);
}

export default State;
