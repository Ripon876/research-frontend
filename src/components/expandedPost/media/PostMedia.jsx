import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./PostMedia.css";

function PostMedia() {
	return (
		<div>
			<OwlCarousel className="owl-theme" 
			items={1} 
			loop margin={50}
			nav
			dots={false}
			navContainerClass="owl-nav-container" 
			navClass={['owl-prev','owl-next']}
			>
				<div className="item">
					<img
						src="https://via.placeholder.com/350x280/6495ED/000000"
						alt=""
					/>
				</div>
				<div className="item">
					<img
						src="https://via.placeholder.com/350x280/1E90FF/000000"
						alt=""
					/>
				</div>
				<div className="item">
					<img
						src="https://via.placeholder.com/350x280/6495ED/000000"
						alt=""
					/>
				</div>
				<div className="item">
					<img
						src="https://via.placeholder.com/350x280/1E90FF/000000"
						alt=""
					/>
				</div>
				<div className="item">
					<img
						src="https://via.placeholder.com/350x280/6495ED/000000"
						alt=""
					/>
				</div>
				<div className="item">
					<img
						src="https://via.placeholder.com/350x280/1E90FF/000000"
						alt=""
					/>
				</div>


			</OwlCarousel>

		</div>
	);
}

export default PostMedia;
