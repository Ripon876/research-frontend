// import "./Gallery.css";

function Gallery() {
	return (
		<div>
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
			<div className="container">
				<div class="row">
					<div class="col-md-4 col-sm-4 mb-4 mb-lg-0">
						<img
							src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Boat on Calm Water"
						/>

						<img
							src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Wintry Mountain Landscape"
						/>
					</div>

					<div class="col-md-4 col-sm-4 mb-4 mb-lg-0">
						<img
							src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Mountains in the Clouds"
						/>

						<img
							src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Boat on Calm Water"
						/>
					</div>

					<div class="col-md-4 col-sm-4 mb-4 mb-lg-0">
						<img
							src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Waves at Sea"
						/>

						<img
							src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
							class="w-100 shadow-1-strong rounded mb-4"
							alt="Yosemite National Park"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Gallery;
