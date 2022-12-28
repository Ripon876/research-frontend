import { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";
import "./Gallery.css";

function Gallery() {
	const [lightBox, setLightBox] = useState(false);
	const [img, setImg] = useState("");
	const [rawImgs, setRawImgs] = useState([]);
	const [images, setImages] = useState([]);

	useEffect(() => {
		let imgs = [];
		for (let item of document.querySelectorAll(".image-gallery img")) {
			imgs.push(item.src);
		}
		setRawImgs(imgs);
		setImages(imgs);
	}, []);

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
		<div className="mb-5 pb-4">
			<FsLightbox toggler={lightBox} sources={[img]} />
			<div className="container">
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
				</div>
			</div>
		</div>
	);
}

export default Gallery;
