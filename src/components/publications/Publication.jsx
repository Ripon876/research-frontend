import React from "react";

function Publication() {
	/*Revealed: massive Maya structures built by vast labour forces
Pyramids, causeways and other edifices formed a densely settled Maya realm in what is now Guatemala.

Research Highlight
15 Dec 2022
*/

	return (
		<div className="researchArticle border-bottom pb-4 pt-4">
			<a
				href="#"
				className="text-decoration-none"
				style={{ color: "#000" }}
			>
				<div className="row">
					<div className="col-md-2 order-md-0 order-sm-1">
						<div className="articleTypeDate">
							<h6>
								<strong>Research Highlight</strong>
							</h6>
							<p>15 Dec 2022</p>
						</div>
					</div>
					<div className="col-md-10 d-flex">
						<div className="articleInfo w-75 pr-2">
							<h3>
								<strong>
									Revealed: massive Maya structures built by
									vast labour forces
								</strong>
							</h3>
							<p>
								Pyramids, causeways and other edifices formed a
								densely settled Maya realm in what is now
								Guatemala.
							</p>
						</div>
						<div className="articleImg w-25">
							<img
								src="https://media.springernature.com/w290h158/magazine-assets/d41586-022-04392-y/d41586-022-04392-y_23806258.jpg"
								alt="Article Image"
								className="img-fluid"
								style={{ height: "100%", objectFit: "cover" }}
							/>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
}

export default Publication;
