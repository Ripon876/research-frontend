import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./PostMedia.css";

function PostMedia({ data }) {
	let media = data?.filter((item) => item.type !== "file");

	const [searchParams, setSearchParams] = useSearchParams();
	const [startPosition, setStartPosition] = useState(0);

	useEffect(() => {

		let id = searchParams.get("mediaId");

		if (id) {
			let itemIndex = media?.findIndex((item) => item.id === id);
			setStartPosition(itemIndex);
		}
	
	}, []);
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

	return (
		<div className="postMedia">
			<OwlCarousel
				className="owl-theme"
				items={1}
				loop
				margin={50}
				nav={media?.length > 1 ? true : false}
				dots={false}
				navContainerClass="owl-nav-container"
				navClass={["owl-prev", "owl-next"]}
				startPosition={startPosition}
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
									{/*<video width="100%" controls>
										<source
											src={item?.url}
											type="video/mp4"
										/>
									</video>*/}
								{/*<YouTube videoId="2g811Eo7K8U" loading={'Loading . . .'}    opts={opts}  /> */}
								<ReactPlayer url='https://www.youtube.com/watch?v=2g811Eo7K8U' controls/>
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
