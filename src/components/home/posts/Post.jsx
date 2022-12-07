import { Fade } from "react-reveal";
import Moment from "react-moment";
import Comments from "./comments/Comments";

function Post({ i }) {
	return (
		<Fade>
			<div className="container my-5 rounded shadow p-3" >
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


<div className="justify-content-center row">
	{formData?.files?.map((file) => (
		<div
			className="m-2"
			style={{
				height: "100px",
				width: "100 px",
			}}
		>
			{file.type === "image" && (
				<img
					src={file.url}
					className="img-fluid rounded w-100 h-100"
					title={file.name}
					style={{ objectFit: "cover" }}
				/>
			)}
			{file.type === "video" && (
				<div className="w-100 h-100 position-relative">
					<video
						src={file.url}
						className="img-fluid rounded w-100 h-100"
						title={file.name}
						style={{
							objectFit: "cover",
						}}
					/>
					<i class="icofont-play-alt-1 icofont-3x videoPlayBtn text-white-50"></i>
				</div>
			)}
			{file.type === "file" && (
				<i
					className="img-fluid rounded w-100 h-100 icofont-file-alt icofont-5x"
					title={file.name}
					style={{ objectFit: "cover" }}
				></i>
			)}
		</div>
	))}
</div>

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
