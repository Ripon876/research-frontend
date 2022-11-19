import React from "react";

function Institution({institution}) {
	return (
		<div className="col-md-4 pb-4">
			<div class="card border-0 text-center">
				<img
					src={institution?.img}
					class="card-img-top m-auto"
					style={{maxWidth: '200px',borderRadius: '20px'}}
				/>
				<div class="card-body">
					<h4 class="card-title mb-0">{institution?.name}</h4>
					<p class="card-text text-secondary">{institution?.institution}</p>
				</div>
			</div>
		</div>
	);
}

export default Institution;
