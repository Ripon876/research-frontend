import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay} from "swiper";
import {Fade} from "react-reveal";
import "./Sponsors.css"
import "swiper/css";
import "swiper/css/navigation";
import {sponsors} from './smd';

function Sponsors() {

	return (
	<Fade className='py-5'>
	    <div class="sponsor py-5" id="sponsors">
	    <div className="container">
			<div className="sponsorHeader text-center">
			  <div className="section-title mb-5">
	            <h2>Our Sponsors</h2>
	            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
	          </div>
			</div>
			<div className="container">
			<Swiper 
			   navigation={true}
			   modules={[Autoplay,Navigation]}
			   loop={true}
			   className="mySwiper py-5"
			   // slidesPerView={4}
			   autoplay={{
	               delay: 1500,
	               disableOnInteraction: false,
	               }}

			breakpoints={{
			    // when window width is >= 640px
			    640: {
			    width: 640,
		          slidesPerView: 1,
			    },
			    // when window width is >= 768px
			    768: {
			    width: 768,
			    slidesPerView: 2,
			    },
			    }}
			>
				{sponsors?.map((clientLogo) => 
				    <SwiperSlide>
				        <div className="sponsorImg">
				        	<img src={clientLogo}  alt="" className="img-fluid" />
				        </div>
				    </SwiperSlide>
				)}
	           </Swiper>
			</div>
			</div>
		</div>
	</Fade>
	)
}

export default Sponsors;