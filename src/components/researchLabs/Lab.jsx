import React from "react";

function Lab({i}) {
	return (
		<div className="row my-5 pb-4">
			<div
				className={`col-md-6 mb-4 text-center ${
					i % 2 === 0 ? "order-md-1" : ""
				}`}
			>
				<div className='h-100 w-100'>
					<img
						src="https://via.placeholder.com/550x400"
						className="card-img-top img-fluid "
						alt="Sunset Over the Sea"
					/>
				</div>
			</div>
			<div className="align-items-center col-md-6 d-flex mb-4">
				<div className="card border-0">
					<div className="card-body">
						<h3 className="card-title">Lorem ipsum dolor</h3>
						<h6 className="card-subtitle mb-2 text-muted">
							Lorem ipsum dolor
						</h6>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Viverra suspendisse potenti
							nullam ac tortor vitae. Lorem donec massa sapien
							faucibus et. Lorem donec massa sapien faucibus et
							molestie ac feugiat. Aliquam ut porttitor leo a
							diam. Sit amet cursus sit amet. Sit amet cursus sit
							amet. Rutrum tellus pellentesque eu tincidunt tortor
							aliquam nulla. Porttitor rhoncus dolor purus non
							enim praesent elementum facilisis. Ullamcorper morbi
							tincidunt ornare massa eget egestas purus.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Lab;
