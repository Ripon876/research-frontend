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
		{ value: "work_1", label: "Work 1" },
		{ value: "work_3", label: "Work 2" },
		{ value: "work_3", label: "Work 3" },
	];

	const selectStyles = {
		control: (styles) => ({
			...styles,
			backgroundColor: "white",
			borderRadius: "20px !important",
			marginBottom: "25px !important",
			padding: "2px 10px",
			boxShadow: '4px 2px 4px 0px #25292d2e !important',
			height: '45px'
		}),
	};

	return (
		<div className="registration-form">
			<form>
				<div className="d-flex justify-content-center align-items-baseline mb-4">
					<h4>Apply for </h4>
					<h2 className="px-2"> '{formTitle}'</h2>
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control item"
						name="name"
						placeholder="Full name"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control item"
						name="email"
						placeholder="Email"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control item"
						name="phone_number"
						placeholder="Phone Number"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control item"
						name="educational_status"
						placeholder="Educational Status"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control item"
						name="designation"
						placeholder="Designation"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<CreatableSelect
						isClearable
						options={options}
						styles={selectStyles}
						placeholder='Work as'
						onChange={handleChange}
					/>
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
