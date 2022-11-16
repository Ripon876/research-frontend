import Member from "./Member";
import "./OurTeam.css";

function OurTeam() {
	return (
		<section id="counts">
			<div className="container mt-5 pt-5">
				<div className="section-title mb-5 mt-5">
					<h2>Our Team</h2>
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit. Quisquam quos quisquam cupiditate. Et
						nemo qui impedit suscipit alias ea. Quia fugiat sit in
						iste officiis commodi quidem hic quas.
					</p>
				</div>
				<div className="row my-5 pb-4">
					<div className="col-md-6 mb-4 text-right">
						<div>
							<img
								src="https://via.placeholder.com/400x400"
								className="card-img-top w-75 img-fluid rounded-circle"
								alt="Sunset Over the Sea"
							/>
						</div>
					</div>
					<div className="col-md-6 mb-4">
						<div className="card border-0">
							<div className="card-body">
								<h3 className="card-title">Jhon Doe</h3>
								<h5 className="card-subtitle mb-2 text-muted">
									Civil Engineer
								</h5>
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Viverra suspendisse potenti nullam ac tortor
									vitae. Lorem donec massa sapien faucibus et.
									Lorem donec massa sapien faucibus et
									molestie ac feugiat. Aliquam ut porttitor
									leo a diam. Sit amet cursus sit amet. Sit
									amet cursus sit amet. Rutrum tellus
									pellentesque eu tincidunt tortor aliquam
									nulla. Porttitor rhoncus dolor purus non
									enim praesent elementum facilisis.
									Ullamcorper morbi tincidunt ornare massa
									eget egestas purus.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{new Array(6).fill(1)?.map(() => (
						<Member />
					))}
				</div>
			</div>
		</section>
	);
}

export default OurTeam;
