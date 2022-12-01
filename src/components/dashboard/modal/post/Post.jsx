import { Fade } from "react-reveal";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import Comments from "./comments/Comments";

function Post({ post }) {
	const username = useSelector((state) => state.user.username);
	
	return (
		<Fade>
			<div
				className="container mt-0 rounded shadow p-3"
				style={{
					overflowY: "scroll",
					height: "85%",
					boxShadow:
						"inset -20px 0rem 1rem rgb(0 0 0 / 15%) !important",
				}}
			>
				<div className="row">
					<div className="col-md-7 mb-4">
						<div className="card">
							<div className="card-body">
								<div
									className={`d-flex ${
										post.user.username === username
											? "justify-content-end"
											: "justify-content-between"
									} mb-2`}
								>
									{post.user.username !== username && (
										<div className="align-items-center d-flex">
											<div className="mr-3">
												<img
													src="https://via.placeholder.com/50x50"
													className="img-fluid rounded-circle"
												/>
											</div>
											<div>
												<h4 className="card-title mb-1">
													Jhon Doe
												</h4>
												<h6 className="card-subtitle mb-2 text-muted">
													Civil Engineer
												</h6>
											</div>
										</div>
									)}
									<div className="p-1">
										<h6 className="card-subtitle mb-2 text-muted">
											<Moment fromNow>2022-10-27</Moment>
										</h6>
									</div>
								</div>
								<div>
									<p className="card-text">
										Some quick example text to build on the
										card title and make up the bulk of the
										card's content.Some quick example text
										to build on the card title and make up
										the bulk of the card's content.Some
										quick example text to build on the card
										title and make up the bulk of the card's
										content.Some quick example text to build
										on the card title and make up the bulk
										of the card's content.Some quick example
										text to build on the card title and make
										up the bulk of the card's content.Some
										quick example text to build on the card
										title and make up the bulk of the card's
										content.Some quick example text to build
										on the card title and make up the bulk
										of the card's content.Some quick example
										text to build on the card title and make
										up the bulk of the card's content.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-5 mt-4">
						<h5 className="card-title mb-1">Comments (6)</h5>
						<Comments />
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default Post;
