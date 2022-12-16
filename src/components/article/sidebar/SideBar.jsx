import "./SideBar.css";

function SideBar() {
	return (
		<div className="articleSidebar col-md-4 d-md-block d-sm-none pl-5">
			<div>
				<button className="articleDownLoadBtn">
					Download <i className="icofont-download"></i>
				</button>
			</div>
			<h3 className="border-bottom mt-4 pb-2">
				<strong>Associated Content</strong>
			</h3>
			<h4 className="pb-2 mb-0">
				<strong>
					<a href="#" className="text-dark">
						Genetics and anatomy sculpt immune-cell partners of
						ovarian cancer
					</a>
				</strong>
			</h4>

			<p className="m-0 text-muted">
				<span>Denarda Dangaj Laniti & George Coukos</span>
			</p>
			<p className="m-0 text-muted">
				<span>Nature</span> <span className="mx-2">News & Views</span>{" "}
				<span>14 Dec 2022</span>
			</p>

			<div className="mt-4 sticky-top tabsContainer">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a
							className="nav-link active text-dark font-weight-bold"
							id="sections-tab"
							data-toggle="tab"
							href="#sections"
							role="tab"
							aria-controls="sections"
							aria-selected="true"
						>
							Sections
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link text-dark font-weight-bold"
							id="figures-tab"
							data-toggle="tab"
							href="#figures"
							role="tab"
							aria-controls="figures"
							aria-selected="false"
						>
							Figures
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link text-dark font-weight-bold"
							id="references-tab"
							data-toggle="tab"
							href="#references"
							role="tab"
							aria-controls="references"
							aria-selected="false"
						>
							References
						</a>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div
						className="tab-pane fade show active px-4 pt-3"
						id="sections"
						role="tabpanel"
						aria-labelledby="sections-tab"
					>
						<ul className="list-unstyled sectionLists">
							<li className="active">
								<a href="#">Abstract</a>
							</li>
							<li>
								<a href="#">Main</a>
							</li>
							<li>
								<a href="#">Site-specific TMEs</a>
							</li>
							<li>
								<a href="#">Tumour cell phenotypic diversification</a>
							</li>
							<li>
								<a href="#">Mutational processes drive immunoediting</a>
							</li>
							<li>
								<a href="#">Spatial topology of the microenvironmentDiscussion</a>
							</li>
							<li>
								<a href="#">Discussion</a>
							</li>
							<li>
								<a href="#">Methods</a>
							</li>
							<li>
								<a href="#">About this article</a>
							</li>
							<li>
								<a href="#">Comments</a>
							</li>
						</ul>
					</div>
					<div
						className="tab-pane fade"
						id="figures"
						role="tabpanel"
						aria-labelledby="figures-tab"
					>
						<div className="articleFigures py-3">
							{new Array(3).fill(2).map((i, index) => (
								<div className="card border-0 mb-3">
									<h5>
										<strong>
											Fig. {index + 1}: TME of HGSOC at single-cell
											resolution.
										</strong>
									</h5>
									<img
										className="card-img-top"
										src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41586-022-05496-1/MediaObjects/41586_2022_5496_Fig1_HTML.png"
										alt="Card image cap"
									/>

									<div className="card-body">
										<div className="d-flex justify-content-between">
											<a href="#">View in article</a>
											<a href="#">
												Full size image
												<i className="icofont-long-arrow-right pr-2"></i>
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="references"
						role="tabpanel"
						aria-labelledby="references-tab"
					>
						{new Array(3).fill(2).map((i, index) => (
							<div className="card border-0 mb-3">
								<div className="card-body">
									<p className="mb-0">
										{index + 1}. Patch, A.-M. et al.
										Whole-genome characterization of
										chemoresistant ovarian cancer. Nature
										521, 489–494 (2015).
									</p>
									<div className="d-flex justify-content-end">
										<a href="#">Article</a>
										<a href="#" className="mx-2">
											CAS
										</a>
										<a href="#">Google Scholar</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
