import React from "react";

function Options({ id }) {
	const copyLink = () => {
		var TempText = document.createElement("input");
		TempText.value =
			window.location.protocol +
			"//" +
			window.location.host +
			"/view/post/" +
			id;
		document.body.appendChild(TempText);
		TempText.select();
		document.execCommand("copy");
		document.body.removeChild(TempText);
	};

	return (
		<div>
			<div className="w-100 options">
				<div className="d-flex justify-content-between">
					<div className="postOptions like">
						<i class="icofont-like pr-1"></i>
						<p className="small m-0">Like</p>
					</div>
					<div
						className="postOptions share dropdown-toggle"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i class="icofont-share pr-1"></i>
						<p className="small m-0">Share</p>
					</div>
					<div class="dropdown-menu">
						<div class="dropdown-item">
								<a
									href={`https://www.facebook.com/sharer/sharer.php?u=${
										window.location.host +
										"/view/post/" +
										id
									}`}
									target="_blank"
								>
									<i class="icofont-facebook"></i>
									<span className="small text-muted pl-1">
										Facebook
									</span>
								</a>
							</div>
						<div class="dropdown-item">
								<a
									href={`https://twitter.com/intent/tweet?url=${
										window.location.host +
										"/view/post/" +
										id
									}`}
									target="_blank"
								>
									<i class="icofont-twitter"></i>
									<span className="small text-muted pl-1">
										Twitter
									</span>
								</a>
							</div>
							<div class="dropdown-item">
								<a
									href={`https://www.linkedin.com/sharing/share-offsite/?url=${
										window.location.host +
										"/view/post/" +
										id
									}`}
									target="_blank"
								>
									<i class="icofont-linkedin"></i>
									<span className="small text-muted pl-1">
										LinkedIn
									</span>
								</a>
							</div>
						<div class="dropdown-item" onClick={copyLink}>
								<i class="icofont-link"></i>
								<span className="small text-muted pl-1">
									Copy Link
								</span>
							</div>
					</div>
					{/*	<div class="dropdown-menu dpMenu2">
						<a class="dropdown-item" href="#">
							<i class="icofont-facebook"></i>
						</a>
						<a class="dropdown-item" href="#">
							<i class="icofont-twitter"></i>
						</a>
						<a class="dropdown-item" href="#">
							<i class="icofont-linkedin"></i>
						</a>

						<a class="dropdown-item" href="#">
							<i class="icofont-link"></i>
						</a>
					</div>*/}
				</div>
			</div>
		</div>
	);
}

export default Options;
