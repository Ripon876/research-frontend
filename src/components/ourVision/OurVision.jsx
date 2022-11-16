import Vision from './Vision';
import './OurVision.css';

function OurVision() {
	return (
		<section id="counts">
			<div className="container mt-5 pt-5">
				<div className="section-title mb-5 mt-5">
					<h2>Our Vision</h2>
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit. Quisquam quos quisquam cupiditate. Et
						nemo qui impedit suscipit alias ea. Quia fugiat sit in
						iste officiis commodi quidem hic quas.
					</p>
				</div>
				<div className="container">
					{new Array(3).fill(1)?.map((item,i) => (
						<Vision i={i}/>
					))}
				</div>
			</div>
		</section>
	)
}

export default OurVision;