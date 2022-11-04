import { useState } from "react";
import Form from "./challenge_form/Form";
import Challenge from "./Challenge";

function Challenges() {
	const [showForm, setFormShow] = useState(false);

	return (
		<div>
			<div className="align-items-center d-flex hero justify-content-center mt-5 pt-5">
				<div>
					<div className="container mt-5 pt-5">
						<div className="section-title mb-5 px-5">
							<h2>Challenges</h2>
							<p>
								Magnam dolores commodi suscipit. Necessitatibus
								eius consequatur ex aliquid fuga eum quidem. Sit
								sint consectetur velit. Quisquam quos quisquam
								cupiditate.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container mb-5">
				<div
					className="btn-group"
					role="group"
					aria-label="Basic example"
				>
					<button
						type="button"
						className="btn btn-lg btn-dark border"
					>
						Mathematics
					</button>
					<button
						type="button"
						className="btn btn-lg btn-dark border"
					>
						IT
					</button>
				</div>
				<h4 className="font-weight-bold my-4">
					See existing challenges or{" "}
					<strong
						onClick={() => {
							setFormShow(!showForm);
						}}
						style={{ cursor: "pointer" }}
						className="pr-1"
					>
						<u>add</u>
					</strong>
					your own
				</h4>
				<div>{!showForm && <Form />}</div>
			</div>
			<div className="container">
				<h4 className="font-weight-bold my-4 mt-5">
					Challenges that you can participate
				</h4>
				<div className="container mb-5">
					<h4 className="font-weight-bold my-4">Our Donors</h4>
					<div className="justify-content-around row">
						<Challenge />
						<Challenge />
						<Challenge />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Challenges;
