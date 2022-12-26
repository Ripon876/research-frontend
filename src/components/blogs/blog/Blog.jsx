import React from "react";
import {Link} from 'react-router-dom';


function Blog({ post, i }) {
	return (
		<div className="row my-5 pb-4">
			<div
				className={`col-md-6 mb-4 text-center ${
					i % 2 === 0 ? "order-md-1" : ""
				}`}
			>
				<div>
					<img
						src={post?.image}
						className="card-img-top img-fluid "
						alt="Sunset Over the Sea"
					/>
				</div>
			</div>
			<div className="align-items-center col-md-6 d-flex mb-4">
				<div className="card border-0">
					<div className="card-body">
						<h3 className="card-title">{post?.title}</h3>
						<h6 className="card-subtitle mb-2 text-muted">
							{post?.creation_date}
						</h6>
						<p className="card-text">
							{post?.content.substr(0, 400)} . . .{" "}
							<Link to={"/view/blog/" + post?.id}>Read More</Link>
						</p>
						<div className="d-flex blogOptions">
							<p className="card-subtitle mt-0">16 comments</p>
							<div className="dropup">
								<div
									className="share dropdown-toggle ml-4"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<i class="icofont-share pr-1"> Share</i>
								</div>
								<div class="dropdown-menu">
									<div class="dropdown-item">
										<a
											href={`https://www.facebook.com/sharer/sharer.php?u=${
												window.location.host +
												"/view/blog/" +
												post?.id
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
												"/view/blog/" +
												post?.id
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
												"/view/blog/" +
												post?.id
											}`}
											target="_blank"
										>
											<i class="icofont-linkedin"></i>
											<span className="small text-muted pl-1">
												LinkedIn
											</span>
										</a>
									</div>

									<div class="dropdown-item">
										<i class="icofont-link"></i>
										<span className="small text-muted pl-1">
											Copy Link
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
