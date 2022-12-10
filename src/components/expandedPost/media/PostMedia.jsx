import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./PostMedia.css";

function PostMedia({ data }) {
	let media = data?.filter((item) => item.type !== "file");
	console.log(media);
	return (
		<div>
			<OwlCarousel
				className="owl-theme"
				items={1}
				loop
				margin={50}
				nav={media?.length > 1 ? true : false}
				dots={false}
				navContainerClass="owl-nav-container"
				navClass={["owl-prev", "owl-next"]}
			>
				{media?.map((item) => (
					<>
						{item.type === "image" ? (
							<div className="item">
								<img src={item?.url} />
							</div>
						) : (
							<div className="item video">
								<div>
									<video width="100%" controls>
										<source
											src={item?.url}
											type="video/mp4"
										/>
									</video>
								</div>
							</div>
						)}
					</>
				))}
			</OwlCarousel>
		</div>
	);
}

export default PostMedia;
