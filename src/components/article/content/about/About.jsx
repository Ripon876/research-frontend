import React from "react";

function About() {
	return (
		<div className="aboutArticle">
			<h3>
				<strong>About this article</strong>
			</h3>

			<div className="border-top">
				<div className="border-left ml-5 pl-4 pt-3">
					<h3>Cite this article</h3>
					<p>
						Vázquez-García, I., Uhlitz, F., Ceglia, N. et al.
						Ovarian cancer mutational processes drive site-specific
						immune evasion. Nature (2022).
						https://doi.org/10.1038/s41586-022-05496-1
					</p>
					<a href="#">
						Download citation
						<i className="icofont-download pr-2"></i>
					</a>
					<div className="row">
						<div className="col-md-4">
							<p>Received</p>
							<p>20 September 2021</p>
						</div>
						<div className="col-md-4">
							<p>Accepted</p>
							<p>28 October 2022</p>
						</div>
						<div className="col-md-4">
							<p>Published</p>
							<p>14 December 2022</p>
						</div>
					</div>
					<p>DOI</p>
					<p>
						https://doi.org/10.1038/s41586-022-05496-1Cite this
						article
					</p>
					<h3 className="mb-0">Share this article</h3>
					<p>
						Anyone you share the following link with will be able to
						read this content:
					</p>
					<button className="border-info text-info px-4 py-2 bg-white">
						Get Sharable Link
					</button>
					<p>
						Provided by the Springer Nature SharedIt content-sharing
						initiative
					</p>
					<h3 className="mb-0">Subjects</h3>
					<div className="subjects mb-5 mt-3">
						<span className="border border-info bg-info-50 font-weight-bold px-2 py-2 rounded-pill text-info mr-3">
							Cancer genomics
						</span>
						<span className="border border-info bg-info-50 font-weight-bold px-2 py-2 rounded-pill text-info mr-3">
							Cancer genomics
						</span>
						<span className="border border-info bg-info-50 font-weight-bold px-2 py-2 rounded-pill text-info mr-3">
							Cancer genomics
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
