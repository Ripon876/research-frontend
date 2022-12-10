import { useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

function Gallery({ items, postId }) {
	const [media, setMedia] = useState(
		items.filter((item) => item.type !== "file")
	);

	return (
		<div>
			{/* for 1 images */}

			{media?.length === 1 && (
				<div style={{ maxHeight: "350px" }} className="mb-4">
					<div
						className="container profile my-0"
						style={{ maxHeight: "350px" }}
					>
						<div className="profile-img-list">
							{media[0]?.type === "image" ? (
								<Image data={media[0]} cn="w-100" postId={postId}/>
							) : (
								<Video data={media[0]} cn="w-100" postId={postId}/>
							)}
						</div>
					</div>
				</div>
			)}

			{/* for 2 images */}
			{media?.length === 2 && (
				<div style={{ maxHeight: "350px" }} className="mb-4">
					<div className="container profile my-0">
						<div className="profile-img-list">
							{media?.map((item) => (
								<>
									{item?.type === "image" ? (
										<Image data={media[0]} cn="w-50" postId={postId}/>
									) : (
										<Video data={media[0]} cn="w-50" postId={postId}/>
									)}
								</>
							))}
						</div>
					</div>
				</div>
			)}

			{/* for 3 or more images */}
			{(media.length === 3 || media.length > 2) && (
				<div style={{ maxHeight: "350px" }} className="mb-4">
					<div className="container profile my-0">
						<div className="profile-img-list">
							{media[0]?.type === "image" ? (
								<Image data={media[0]} cn="main" postId={postId}/>
							) : (
								<Video data={media[0]} cn="main" postId={postId}/>
							)}

							<div className="sub">
								{media?.shift() && media?.length > 2 ? (
									<>
										{media?.map((item, i) => (
											<>
												{i < 2 && (
													<>
														{item?.type ===
														"image" ? (
															<Image
																data={media[0]}
																cn="with-number"
																count={
																	media.length -
																	3
																}postId={postId}
															/>
														) : (
															<Video
																data={media[0]}
																cn="with-number"
																count={
																	media.length -
																	3
																}postId={postId}
															/>
														)}
													</>
												)}
											</>
										))}
									</>
								) : (
									<>
										{media?.map((item, i) => (
											<>
												{item?.type === "image" ? (
													<Image
														data={media[0]}
														cn=" "postId={postId}
													/>
												) : (
													<Video
														data={media[0]}
														cn=" "postId={postId}
													/>
												)}
											</>
										))}
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Gallery;

const Image = ({ data, cn, count ,postId}) => {
	return (
		<div className={`profile-img-list-item ${cn}`}>
			<div className="profile-img-list-link">
				<Link to={`/view/post/${postId}`}>
					<span
						className="profile-img-content"
						style={{
							maxHeight: "350px",
							backgroundImage:
								"url(https://via.placeholder.com/350x280/6495ED/000000)",
						}}
					></span>
					{count && (
						<div className="profile-img-number">
							<h2>+{count}</h2>
						</div>
					)}
				</Link>
			</div>
		</div>
	);
};
const Video = ({ data, cn, count ,postId}) => {
	return (
		<div className={`profile-img-list-item with-number ${cn}`}>
			<div className="profile-img-list-link">
				<Link to={`/view/post/${postId}`}>
					<span
						className="profile-img-content"
						style={{
							backgroundImage:
								"url(https://via.placeholder.com/350x280/1E90FF/000000)",
						}}
					></span>
					<div className="profile-img-number">
						<i className="icofont-play-alt-1 icofont-2x videoPlayBtn text-white-50"></i>
					</div>
				</Link>
			</div>
		</div>
	);
};
