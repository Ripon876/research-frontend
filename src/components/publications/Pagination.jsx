import React from "react";

function Pagination() {
	return (
		<div className="researchesPagination my-5">
			<nav aria-label="Page navigation example">
				<ul className="justify-content-center pagination">
					<li className="page-item mx-2">
						<a className="page-link" href="#">
							<i class="icofont-long-arrow-left"></i> Previous
						</a>
					</li>
					<li className="page-item mx-2">
						<a className="page-link" href="#">
							1
						</a>
					</li>
					<li className="page-item active mx-2">
						<a className="page-link" href="#">
							2
						</a>
					</li>
					<li className="page-item mx-2">
						<a className="page-link" href="#">
							3
						</a>
					</li>
					<li className="page-item mx-2">
						<a className="page-link" href="#">
							Next <i class="icofont-long-arrow-right"></i>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Pagination;
