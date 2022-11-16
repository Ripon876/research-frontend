import React from 'react'

function Member() {
	return (
		<div className="col-md-4 mb-4">
			<div className="card border-0">
				<img
					src="https://via.placeholder.com/200x200"
					className="card-img-top moderatorImg img-fluid rounded-circle"
					alt="Sunset Over the Sea"
				/>
				<div className="card-body text-center">
					<h4 className="card-title">Jhon Doe</h4>
					<h6 className="card-subtitle mb-2 text-muted">
						Civil Engineer
					</h6>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Member;