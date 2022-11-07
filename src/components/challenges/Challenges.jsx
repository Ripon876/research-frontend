import { useState } from "react";
import { Fade } from "react-reveal";
import Form from "./challenge_form/Form";
import Mathematics from "./mathematics/Mathematics";
import It from "./it/It";
import "./Challenges.css";

function Challenges() {
	const [showForm, setFormShow] = useState(false);
	const [category, setCategory] = useState("Mathematics");

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
						className={`btn btn-lg btn-dark border ${
							category === "Mathematics" ? "activeCate" : ""
						}`}
						onClick={() => {
							setCategory("Mathematics");
						}}
					>
						Mathematics
					</button>
					<button
						type="button"
						className={`btn btn-lg btn-dark border ${
							category === "IT" ? "activeCate" : ""
						}`}
						onClick={() => {
							setCategory("IT");
						}}
					>
						IT
					</button>
				</div>
				<h4 className="font-weight-bold my-4">
					Explore existing challenges or{" "}
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
				<div>
					{showForm && (
						<Fade>
							<Form category={category} />{" "}
						</Fade>
					)}
				</div>
			</div>
			<div className="container">
				<h4 className="font-weight-bold my-4 mt-5">
					<strong>Challenges that you can participate</strong>
				</h4>
				{category === 'Mathematics' ? <Mathematics /> : <It />}
			</div>
		</div>
	);
}

export default Challenges;