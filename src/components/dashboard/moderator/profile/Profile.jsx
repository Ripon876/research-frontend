import "./Profile.css";

function Profile() {
	return (
		<div className="container">
			<div className="section-title">
				<h2>Profile</h2>

				<div className="d-flex justify-content-center">
					<div className="info mt-5 col-6">
						<img
							src="https://via.placeholder.com/200x200"
							className="img-fluid rounded-circle mb-4"
						/>
						<div className="text-left">
							<p>
								Name: <strong className="pl-3">Jhon Doe</strong>
							</p>
							<p>
								Email:{" "}
								<strong className="pl-3">
									jhondoe@gmail.com
								</strong>
							</p>
							<p>
								Phone:{" "}
								<strong className="pl-3">+92 23234342</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
