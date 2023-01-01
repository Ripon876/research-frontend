import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import "./Form.css";

function ApplyForm({ formTitle }) {

	const initialData = {
		name: "",
		email: "",
		phone_number: "",
		designation: "",
		educational_status: "",
		work_as: "",
	};

	const [formData, updateFormData] = useState(initialData);


	const handleChange = (event) => {
		if(event === null){
			updateFormData({
				...formData,
				work_as: ''
			})
			return;
		}
		if (event.value) {
			updateFormData({
				...formData,
				work_as: event.value
			})
		} else {
			updateFormData({
				...formData,
				[event.target.name]: event.target.value.trim(),
			});
		}
	}

	const handleSubmit = () => {
		console.log(formData)
	}


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
		<div className="registration-form">
			<form>
				<div className="d-flex justify-content-center align-items-baseline mb-4">
					<h4>Apply for </h4>
					<h2 className="px-2"> '{formTitle}'</h2>
				</div>
				<div className="form-group">
				<label>Name</label>
					<input
						type="text"
						className="form-control"
						name="name"
						placeholder="Full name"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
				<label>Email</label>
					<input
						type="text"
						className="form-control"
						name="email"
						placeholder="email"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
				<label>Phone Number</label>
					<input
						type="text"
						className="form-control"
						name="phone_number"
						placeholder="phone number"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
				<label>Educational Status</label>
					<input
						type="text"
						className="form-control"
						name="educational_status"
						placeholder="educational status"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
				<label>Designation</label>
					<input
						type="text"
						className="form-control"
						name="designation"
						placeholder="designation"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
						<label>Work Sector</label>
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
					<button
						type="button"
						className="btn btn-block submit"
						onClick={handleSubmit}
					>
						Apply
					</button>
				</div>
			</form>
		</div>
	);
}

export default ApplyForm;
