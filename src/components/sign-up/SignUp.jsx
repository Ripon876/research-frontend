import { useState } from "react";
import "./SignUp.css";

function SignUp() {
	const [codeBox, setCodeBox] = useState({
		email: false,
		number: false,
	});

	const showCodeBox = (type) => {
		setCodeBox({
			...codeBox,
			[type]: true,
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<section className="mt-5 login">
				<div className="container py-5">
					<div className="row">
						<div className="col-md-6 offset-md-3 px-4 py-5 shadow">
							<div className="box mx-2">
								<form
									className="signUpForm"
									onSubmit={handleFormSubmit}
								>
									<h4 className="font-weight-bold text-capitalize text-center">
										Register Now
									</h4>
									<div className="form-group">
										<label>Name</label>
										<input
											type="text"
											name="name"
											className="form-control"
											placeholder="Jhone Doe"
										/>
									</div>
									<div className="form-group">
										<div>
											<label>Email</label>
											<div className="userEmail">
												<input
													type="email"
													name="Email"
													className="form-control"
													placeholder="your@gmail"
												/>
												<button
													className="btn"
													onClick={() => {
														showCodeBox("email");
													}}
												>
													Send Code
												</button>
											</div>
										</div>
										{codeBox.email && (
											<div className="form-group mt-3 d-flex align-items-center">
												<input
													type="text"
													name="emil_verification_code"
													className="form-control w-50 verification_code"
													placeholder="enter verification code"
												/>
												<div>
													<i class="icofont-tick-mark ml-3 codeStatus"></i>
													<i class="icofont-close codeStatus"></i>
												</div>
											</div>
										)}
									</div>
									<div className="form-group">
										<div>
											<label>Phone Number</label>
											<div className="userEmail">
												<input
													type="email"
													name="phone_number"
													className="form-control"
													placeholder="+880 _ _ _ _ _"
												/>
												<button
													className="btn"
													onClick={() => {
														showCodeBox("number");
													}}
												>
													Send Code
												</button>
											</div>
										</div>
										{codeBox.number && (
											<div className="form-group mt-3 d-flex align-items-center">
												<input
													type="text"
													name="emil_verification_code"
													className="form-control w-50 verification_code"
													placeholder="enter verification code"
												/>
												<div>
													<i class="icofont-tick-mark ml-3 codeStatus"></i>
													<i class="icofont-close codeStatus"></i>
												</div>
											</div>
										)}
									</div>
									<div className="form-group">
										<label>Password</label>
										<input
											type="Password"
											name="Password"
											className="form-control"
											placeholder="***********"
										/>
									</div>
									<div className="form-group mt-4 text-center">
										<input
											type="submit"
											name="submit"
											className="btn btn-primary btn-sm px-5 py-2 rounded-pill subBtn"
											placeholder="Password"
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default SignUp;
