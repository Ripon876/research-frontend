import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

function Form({ category }) {
	const initialData = {
		// name: "",
		// email: "",
		challenge: "",
		files: [],
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

	const handleFile = (e) => {
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			updateFormData({
				...formData,
				files: [...formData.files, reader.result],
			});
		};
	};

	return (
		<div>
			<div className="container mt-5 pt-5">
				<h4 className="font-weight-bold my-4">Make a Post</h4>
				<div className="form">
					<form>
						{/*						<div className="form-group">
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
						</div>*/}
						<div className="form-outline">
							<textarea
								className="form-control"
								placeholder="What is on your mind"
								rows="7"
								name="challenge"
								onChange={handleChange}
							></textarea>
						</div>
						<div className="form-group">
							<div className="justify-content-center row">
									{formData?.files?.map((file) => (
										<div
											className="m-2"
											style={{
												height: "100px",
												width: "100 px",
											}}
										>
											<img
												src={file}
												className="img-fluid rounded w-100 h-100"
												style={{ objectFit: "cover" }}
											/>
										</div>
									))}
							</div>
						</div>
						<div className="form-group mt-3">
							<input
								type="file"
								placeholder="Email"
								className="form-control"
								title="attach photos ot videos"
								onChange={handleFile}
							/>
						</div>
						{/*<div className="custom-file form-group my-3">
						    <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
						    <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
						  </div>*/}
						{/*<div className="form-group">
							<CreatableSelect
								isClearable
								options={options}
								styles={selectStyles}
								placeholder="Tags"
								onChange={handleChange}
								isMulti
							/>
						</div>*/}
						<div className="form-group">
							<button
								type="button"
								className="btn btn subBtn"
								onClick={handleSubmit}
							>
								Post
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Form;
