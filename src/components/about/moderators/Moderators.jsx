import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import {Link} from 'react-router-dom';
import Moderator from "./Moderator";

function Moderators() {
	return (
		<section id="moderators" className="moderators">
			<div className="container">
				<div className="section-title">
					<h2>Advisers</h2>
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit. Quisquam quos quisquam cupiditate. Et
						nemo qui impedit suscipit alias ea. Quia fugiat sit in
						iste officiis commodi quidem hic quas.
					</p>
				</div>
				<div className="justify-content-center row mt-4">
					<Swiper
						navigation={true}
						modules={[Autoplay, Navigation]}
						loop={true}
						className="mySwiper py-5"
						slidesPerView={1}
						spaceBetween={20}
						autoplay={{
							delay: 1500,
							disableOnInteraction: false,
						}}
						breakpoints={{
							// when window width is >= 640px
							640: {
								width: 640,
								slidesPerView: 1,
								spaceBetween: 10,
							},
							// when window width is >= 768px
							768: {
								width: 768,
								slidesPerView: 3,
								spaceBetween: 20,
							},
						}}
					>
						{new Array(10).fill(undefined)?.map(() => (
							<SwiperSlide>
								<Moderator />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className='text-right'>
					<Link to='/moderators' className='text-dark'>See All</Link>
				</div>
			</div>
		</section>
	);
}

export default Moderators;
