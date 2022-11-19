import React from "react";

function Researcher({ researcher }) {
	return (
		<div className="col-sm-6 col-md-4 pb-4">
			<div class="card border-0 text-center">
				<img
					src={researcher?.img}
					class="card-img-top m-auto"
					style={{maxWidth: '200px',borderRadius: '20px'}}
				/>
				<div class="card-body">
					<h4 class="card-title mb-0">{researcher?.name}</h4>
					<p class="card-text text-secondary">{researcher?.institution}</p>
				</div>
			</div>
		</div>
	);
}

export default Researcher;
