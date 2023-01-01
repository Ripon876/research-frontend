import { useEffect, useState, useRef } from "react";
import IdUpload from "./IdUpload";
import ImgUpload from "./ImgUpload";
import Documents from "./Documents";
import "./ApplyForInvestment.css";

function ApplyForInvestment() {
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
						<h4>Apply for investment</h4>
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
						<label>Working Sector</label>
						<select
							className="select form-control"
							style={{ height: "45px" }}
						>
							{options?.map((item) => (
								<option value={item}>{item}</option>
							))}
						</select>
					</div>
					<div className="form-group">
						<label>Preject title</label>
						<input
							type="text"
							name="preject_title"
							className="form-control"
							placeholder="title"
						/>
					</div>
					<div className="form-group">
						<label>Preject objectives</label>
						<input
							type="text"
							name="problem_title"
							className="form-control"
							placeholder="objectives"
						/>
					</div>
					<div className="form-group">
						<label>Economical values</label>
						<input
							type="text"
							name="economical_values"
							className="form-control"
							placeholder="values"
						/>
					</div>
					<div className="form-group">
						<label>Demand in market</label>
						<textarea
							className="form-control"
							placeholder="demand"
							rows="3"
							name="effect"
						></textarea>
					</div>
					<div className="form-group">
						<label>Description</label>
						<textarea
							className="form-control"
							placeholder="description"
							rows="5"
							name="description"
						></textarea>
					</div>
					<Documents title="Project Documents" />
					<div className="form-group">
						<label>Working Status</label>
						<select
							className="select form-control"
							style={{ height: "45px" }}
						>
							<option value="Student">Student</option>
							<option value="Teacher">Teacher</option>
							<option value="Graduate">Graduate</option>
						</select>
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
						<label>Institution ID No.</label>
						<input
							type="text"
							name="institution"
							className="form-control"
							placeholder="institution id"
						/>
					</div>

					<IdUpload title="Institution ID card" />
					<IdUpload title="NID card" />
					<ImgUpload title="Picture" />

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

export default ApplyForInvestment;
