import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

function Form({category}) {
	const initialData = {
		name: "",
		email: "",
		challenge: "",
		file: "",
		tags: [],
	};

	const [formData, updateFormData] = useState(initialData);

	const handleChange = (event) => {
		if (event === null) {
			updateFormData({
				...formData,
				tags: [],
			});
			return;
		}
		if (Array.isArray(event)) {
			updateFormData({
				...formData,
				tags: [...event],
			});
			return;
		} else {
			updateFormData({
				...formData,
				[event.target.name]: event.target.value.trim(),
			});
			return;
		}
	};
	const handleSubmit = () => {
		console.log(formData);
	};

	const options = [
		{ value: "tag_1", label: "Tag 1" },
		{ value: "tag_3", label: "Tag 2" },
		{ value: "tag_3", label: "Tag 3" },
	];

	const selectStyles = {
		control: (styles) => ({
			...styles,
			backgroundColor: "white",
			borderRadius: "20px !important",
			marginBottom: "25px !important",
			padding: "2px 10px",
			boxShadow: "4px 2px 4px 0px #25292d2e !important",
			minHeight: "45px",
		}),
	};

	return (
		<div>
			<div className="container">
				<div className="form w-50">
					<form>
						<p className="mb-1 pl-1 text-muted">Challenge will submited in <strong>'{category}'</strong> Category</p>
						<div className="form-group">
							<input
								type="text"
								placeholder="Full name"
								className="form-control"
								name="name"
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								placeholder="Email"
								className="form-control"
								name="email"
								onChange={handleChange}
							/>
						</div>
						<div className="form-outline">
							<textarea
								className="form-control"
								placeholder="Write down your challenge"
								rows="4"
								name="challenge"
								onChange={handleChange}
							></textarea>
						</div>
						<div className="form-group mt-3">
							<input
								type="file"
								placeholder="Email"
								className="form-control"
								title="attach file if required"
							/>
						</div>
						<div className="form-group">
							<CreatableSelect
								isClearable
								options={options}
								styles={selectStyles}
								placeholder="Tags"
								onChange={handleChange}
								isMulti
							/>
						</div>
						<div className="form-group">
							<button
								type="button"
								className="btn btn subBtn"
								onClick={handleSubmit}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Form;
