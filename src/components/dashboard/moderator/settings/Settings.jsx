import "./Settings.css";

function Settings() {
	return (
		<div className="container">
			<div className="section-title">
				<h2>Settings</h2>

				<div className="d-flex justify-content-center">
					<div className="info mt-5 col-6">
						<div className="position-relative">
							<img
								src="https://via.placeholder.com/200x200"
								className="img-fluid rounded-circle mb-4"
							/>
							<i className="icofont-pencil-alt-5 editIcon"></i>
						</div>
						<div className="text-left">
							<form action="">
								<div class="form-group">
									<label for="email">Email address</label>
									<input
										type="email"
										class="form-control"
										id="email"
										placeholder="your email"
									/>
								</div>
								<div class="form-group">
									<label for="phone">Phone Number</label>
									<input
										type="number"
										class="form-control"
										id="phone"
										placeholder="your number"
									/>
								</div>
								<div class="form-group text-center mt-4">
									<input
										type="submit"
										value="Save"
										class="btn btn-primary btn-sm px-5 py-2 rounded-pill subBtn"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Settings;
