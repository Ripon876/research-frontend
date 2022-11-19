import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCube } from "swiper";

function TopChallengers() {
	return (
		<div className="container mb-5">
			<h4 className="font-weight-bold mb-0">Top Challengers</h4>
			<div className="justify-content-around row">
				<Swiper
					navigation={true}
					modules={[Autoplay, Navigation,EffectCube]}
					loop={true}
					className="mySwiper py-5"
					slidesPerView={3}
					// spaceBetween={10}
					autoplay={{
						delay: 1500,
						disableOnInteraction: false,
					}}
					// breakpoints={{
					// 	// when window width is >= 640px
					// 	640: {
					// 		width: 640,
					// 		slidesPerView: 1,
					// 	},
					// 	// when window width is >= 768px
					// 	768: {
					// 		width: 768,
					// 		slidesPerView: 2,
					// 		spaceBetween: 10,
					// 	},
					// }}
				>
					{new Array(10).fill(undefined)?.map(() => (
						<SwiperSlide>
							{/*<Donor />*/}
							<div>
								<img
									className="rounded-circle shadow donor"
									style={{ width: "100px" }}
									src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
								/>
								<h4 className="mt-2">sdfsdfds</h4>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default TopChallengers;
