import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";

function Gallery() {
	const [lightBox, setLightBox] = useState(false);
	const [img, setImg] = useState("");



	const showFirst = (src) => {
		// console.log(src);
		/*	let newImages = [...rawImgs];
		let srcIndex = rawImgs.indexOf(src);
		let lastHalf = newImages.splice(srcIndex, newImages.length - srcIndex);
		let newOrderedImgs = lastHalf.concat([...newImages]);
		console.log(newOrderedImgs);
		setImages(newOrderedImgs);*/
		setImg(src);
	};



	return (
		<div className="gallery">
			<FsLightbox toggler={lightBox} sources={[img]} />
			<div className="container mt-5 pt-3">
				<div className="section-title">
					<h2>Gallery</h2>
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit. Quisquam quos quisquam cupiditate. Et
						nemo qui impedit suscipit alias ea. Quia fugiat sit in
						iste officiis commodi quidem hic quas.
					</p>
				</div>
			</div>
{/*			<div className="container">
				<div class="row">
					<div class="col-md-4 col-sm-4 mb-4 mb-lg-0">
						<img
							onClick={(e) => {
								setImg(e.target.src);
								setLightBox(!lightBox);
							}}
							src="https://source.unsplash.com/VWcPlbHglYc"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Boat on Calm Water"
						/>

						<img
							onClick={(e) => {
								setImg(e.target.src);
								setLightBox(!lightBox);
							}}
							src="https://source.unsplash.com/e6FMMambeO4"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Wintry Mountain Landscape"
						/>
					</div>

					<div class="col-md-4 col-sm-4 mb-4 mb-lg-0">
						<img
							onClick={(e) => {
								setImg(e.target.src);
								setLightBox(!lightBox);
							}}
							src="https://source.unsplash.com/klCiPmzUw0Y"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Mountains in the Clouds"
						/>

						<img
							onClick={(e) => {
								setImg(e.target.src);
								setLightBox(!lightBox);
							}}
							src="https://source.unsplash.com/O0N9MF--hK4"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Boat on Calm Water"
						/>
					</div>

					<div class="col-md-4 col-sm-4 mb-4 mb-lg-0">
						<img
							onClick={(e) => {
								setImg(e.target.src);
								setLightBox(!lightBox);
							}}
							src="https://source.unsplash.com/FV3GConVSss"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Waves at Sea"
						/>

						<img
							onClick={(e) => {
								setImg(e.target.src);
								setLightBox(!lightBox);
							}}
							src="https://source.unsplash.com/0ESjL-Nw22Y"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Yosemite National Park"
						/>
					</div>
				</div>
				<div className="text-right">
					<Link to="/gallery">See More</Link>
				</div>
			</div>*/}


			<div class="container">
				<div class="image-gallery">
					<div class="column">
						<div class="image-item">
							<img
								onClick={(e) => {
									showFirst(e.target.src);
									setLightBox(!lightBox);
								}}
								src="https://source.unsplash.com/VWcPlbHglYc"
								alt=""
							/>
						</div>
						<div class="image-item">
							<img
								onClick={(e) => {
									showFirst(e.target.src);
									setLightBox(!lightBox);
								}}
								src="https://source.unsplash.com/e6FMMambeO4"
								alt=""
							/>
						</div>
						<div class="image-item">
							<img
								onClick={(e) => {
									showFirst(e.target.src);
									setLightBox(!lightBox);
								}}
								src="https://source.unsplash.com/klCiPmzUw0Y"
								alt=""
							/>
						</div>
						
					</div>
					<div class="column">
						<div class="image-item">
							<img
								onClick={(e) => {
									showFirst(e.target.src);
									setLightBox(!lightBox);
								}}
								src="https://source.unsplash.com/O0N9MF--hK4"
								alt=""
							/>
						</div>
						<div class="image-item">
							<img
								onClick={(e) => {
									showFirst(e.target.src);
									setLightBox(!lightBox);
								}}
								src="https://source.unsplash.com/FV3GConVSss"
								alt=""
							/>
						</div>
						<div class="image-item">
							<img
								onClick={(e) => {
									showFirst(e.target.src);
									setLightBox(!lightBox);
								}}
								src="https://source.unsplash.com/0ESjL-Nw22Y"
								alt=""
							/>
						</div>
						<div class="image-item">
							<img
								onClick={(e) => {
									showFirst(e.target.src);
									setLightBox(!lightBox);
								}}
								src="https://source.unsplash.com/KTVn62x6fFw"
								alt=""
							/>
						</div>
					</div>
					<div class="column">
						<div class="image-item">
							<img
								onClick={(e) => {
									showFirst(e.target.src);
									setLightBox(!lightBox);
								}}
								src="https://source.unsplash.com/VSeVhmW4_JQ"
								alt=""
							/>
						</div>
						<div class="image-item">
							<img
								onClick={(e) => {
									showFirst(e.target.src);
									setLightBox(!lightBox);
								}}
								src="https://source.unsplash.com/07aFaTf24Kg"
								alt=""
							/>
						</div>
						<div class="image-item">
							<img
								onClick={(e) => {
									showFirst(e.target.src);
									setLightBox(!lightBox);
								}}
								src="https://source.unsplash.com/DqyYTM7pR2o"
								alt=""
							/>
						</div>
						<div class="image-item">
							<img
								onClick={(e) => {
									showFirst(e.target.src);
									setLightBox(!lightBox);
								}}
								src="https://source.unsplash.com/IdNOTjPeHrE"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="text-right mt-3">
					<Link to="/gallery">See More</Link>
				</div>
			</div>

		</div>
	);
}

export default Gallery;
