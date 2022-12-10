import { useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

function Gallery({ items, postId }) {
	const [media, setMedia] = useState(
		items.filter((item) => item.type !== "file")
	);
// console.log(items[2])
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
							{media?.map((item,i) => (
								<>
									{item?.type === "image" ? (
										<Image data={media[i]} cn="w-50" postId={postId}/>
									) : (
										<Video data={media[i]} cn="w-50" postId={postId}/>
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
																data={media[i]}
																cn="with-number"
																count={
																	media.length -
																	3
																}
																postId={postId}
															/>
														) : (
															<Video
																data={media[i]}
																cn="with-number"
																count={
																	media.length -
																	3
																}
																postId={postId}
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
												{item?.type === "video" ? (
													<Video
														data={media[i]}
														cn=" "
														postId={postId}
													/>

												) : (
													<Image
														data={media[i]}
														cn=" "
														postId={postId}
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
				<Link to={`/view/post/${postId + '?mediaId=' + data?.id}`}>
					<span
						className="profile-img-content"
						style={{
							maxHeight: "350px",
							backgroundImage:
								`url(${data?.url})`,
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
				<Link to={`/view/post/${postId + '?mediaId=' + data?.id}`}>
					<span
						className="profile-img-content"
						style={{
							
								background: 'black'
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
