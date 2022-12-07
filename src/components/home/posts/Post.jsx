import { Fade } from "react-reveal";
import Moment from "react-moment";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Comments from "./comments/Comments";
import './Post.css';




function Post({ post, i }) {
	// creator: {
	// 			full_name: "Jhon Doe",
	// 			username: "jhon_doe",
	// 			image: "https://via.placeholder.com/50x50",
	// 		},

	return (
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
								<div>
									<p className="card-text">{post?.content}</p>

									{post?.attachments && (
										<div className="justify-content-start row">
											{post?.attachments?.map(
												(file) => (
													<div
														className="m-2"
														style={{
															height: "50px",
															width: "auto",
														}}
													>
														{file.type ===
															"image" && (
															<Zoom>	
															<img
																src={file.url}
																className="img-fluid rounded w-100 h-100 attachment"
																title={
																	file.name
																}
																style={{
																	objectFit:
																		"cover",
																		cursor: 'pointer',
																		height: '50px !important'
																}}
															/>
															</Zoom>	
														)}
														{file.type ===
															"video" && (
															<div className="w-100 h-100 position-relative">
																<video
																	src={
																		file.url
																	}
																	className="img-fluid rounded w-100 h-100 attachment"
																	title={
																		file.name
																	}
																	style={{
																		objectFit:
																			"cover",
																			cursor: 'pointer'
																	}}
																/>
																<i class="icofont-play-alt-1 icofont-2x videoPlayBtn text-white-50"></i>
															</div>
														)}
														{file.type ===
															"file" && (
															<i
																className="img-fluid rounded w-100 h-100 icofont-file-alt icofont-3x attachment"
																title={
																	file.name
																}
																style={{
																	objectFit:
																		"cover",
																		cursor: 'pointer'
																}}
															></i>
														)}
													</div>
												)
											)}
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-5 mt-4">
						<h5 className="card-title mb-1">Comments (3)</h5>
						<Comments />
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default Post;
