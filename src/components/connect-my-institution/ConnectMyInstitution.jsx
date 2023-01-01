import { useEffect, useState, useRef } from "react";
import InputVerify from "./InputVerify";
import "./ConnectMyInstitution.css";

function ConnectMyInstitution() {
	const initialData = {
		name: "",
		email: "",
		title: "",
		topic: "",
		reason: "",
		description: "",
	};

	const [formData, updateFormData] = useState(initialData);

	const handleChange = (event) => {
		if (event === null) {
			updateFormData({
				...formData,
				work_as: "",
			});
			return;
		}
		if (event.value) {
			updateFormData({
				...formData,
				work_as: event.value,
			});
		} else {
			updateFormData({
				...formData,
				[event.target.name]: event.target.value.trim(),
			});
		}
	};

	const handleSubmit = () => {
		console.log(formData);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	const options = [
		"Agriculture",
		"Electronics",
		"Engineering Design (CAD/Simulation)",
		"Coding",
		"Marketing and Advertising",
		"Idea Gathering",
		"Data collection & Data Analysis",
		"PCB Design",
		"Micro-processor and Controlling Unit",
		"Medical Technology",
		"Reverse Engineering",
		"Autombile Engineering",
		"other",
	];

	return (
		<div>
			<div className="registration-form my-5">
				<form
					style={{ maxWidth: "650px" }}
					className="requestHelpForResearchForm"
					onSubmit={handleFormSubmit}
				>
					<div className="d-flex justify-content-center align-items-baseline mb-4">
						<h4>Connect my institution</h4>
					</div>
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
						<label>Institution Name</label>
						<input
							type="text"
							name="institution"
							className="form-control"
							placeholder="your institution"
						/>
					</div>
					<div className="form-group">
						<label>Institution email</label>
						<input
							type="email"
							name="institution_email"
							className="form-control"
							placeholder="your institution email"
						/>
					</div>
					<div className="form-group">
						<label>Location</label>
						<input
							type="text"
							name="location"
							className="form-control"
							placeholder="google map url"
						/>
					</div>
					<InputVerify title='WhatsApp no.' />
					<div className="form-group">
						<button
							type="button"
							className="btn btn-block submit"
							onClick={handleSubmit}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ConnectMyInstitution;
