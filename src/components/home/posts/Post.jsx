import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import Moment from "react-moment";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ModalVideo from "react-modal-video";
import ReactPlayer from "react-player";
import Gallery from "./gallery/Gallery";
import Options from "./options/Options";
import Comments from "./comments/Comments";
import "./Post.css";

function Post({ post, i }) {
	const [showVideo, setShowVideo] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);
	const [url, setUrl] = useState("");

	const expandPost = () => {
		setIsExpanded(true);
	};

	return (
		<>
			<ModalVideo
				channel="custom"
				url={url}
				isOpen={showVideo}
				onClose={() => setShowVideo(false)}
			/>
			<Fade>
				<div className="container my-5 rounded shadow p-3">
					<div className="row">
						<div
							className={`col-md-7 mb-4 ${
								i % 2 === 0 ? "order-md-1" : ""
							}`}
						>
							<div className="card">
								<div className="card-body">
									<div className="d-flex justify-content-between mb-2">
										<div className="align-items-center d-flex">
											<div className="mr-3">
												<img
													src={post?.creator?.image}
													className="img-fluid rounded-circle"
												/>
											</div>
											<div>
												<h4 className="card-title mb-1">
													{post?.creator.full_name}
												</h4>
												<h6 className="card-subtitle mb-2 text-muted">
													{post?.creator.designation}
												</h6>
											</div>
										</div>
										<div className="p-1">
											<h6 className="card-subtitle mb-2 text-muted">
												<Moment fromNow>
													{post?.creation_date}
												</Moment>
											</h6>
										</div>
									</div>
									<div className="postContent">
										<div>
											<p className="card-text">
												{post?.content.length > 270 &&
												!isExpanded ? (
													<>
														<p>
															{post?.content.substr(
																0,
																270
															)}{" "}
															<span className="cp">
																<strong
																	onClick={
																		expandPost
																	}
																>
																	. . . See
																	More
																</strong>
															</span>
														</p>
													</>
												) : (
													<p>{post?.content}</p>
												)}
											</p>
										</div>
										<Gallery items={post?.attachments} postId={post?.id} /> 
									</div>
									<Options />
								</div>
							</div>
						</div>
						<div className="col-md-5 mt-4">
							<Comments />
						</div>
					</div>
				</div>
			</Fade>
		</>
	);
}

export default Post;
