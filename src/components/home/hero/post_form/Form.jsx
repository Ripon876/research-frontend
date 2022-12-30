import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import "./Form.css";

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
		const name = e.target.files[0].name;
		const type = e.target.files[0].type.split("/").shift();
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			updateFormData({
				...formData,
				files: [
					...formData.files,
					{ type: type, data: reader.result, name: name },
				],
			});
		};
	};

	return (
		<div>
			<div className="container mt-5 pt-5">
				<h4 className="font-weight-bold my-4">Make a Post</h4>
				<div className="form">
					<form>
						<div className="form-outline">
							<textarea
								className="form-control"
								placeholder="Post your project here"
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
										{file.type === "image" && (
											<img
												src={file.data}
												className="img-fluid rounded w-100 h-100"
												title={file.name}
												style={{ objectFit: "cover" }}
											/>
										)}
										{file.type === "video" && (
											<div className="w-100 h-100 position-relative">
												<video
													src={file.data}
													className="img-fluid rounded w-100 h-100"
													title={file.name}
													style={{
														objectFit: "cover",
													}}
												/>
												<i class="icofont-play-alt-1 icofont-3x videoPlayBtn text-white-50"></i>
											</div>
										)}
										{file.type === "application" && (
											<i
												className="img-fluid rounded w-100 h-100 icofont-file-alt icofont-5x"
												title={file.name}
												style={{ objectFit: "cover" }}
											></i>
										)}
									</div>
								))}
							</div>
						</div>
						<div className="form-group mt-3 d-flex">
							<div className="mr-2 fileChooseIcon">
								<input
									type="file"
									placeholder="Email"
									className="form-control d-none image"
									onChange={handleFile}
									accept="image/*"
								/>
								<i
									class="icofont-image"
									onClick={(e) => {
										e.target.previousSibling.click();
									}}
								></i>
							</div>
							<div className="mx-2 fileChooseIcon">
								<input
									type="file"
									placeholder="Email"
									className="form-control d-none video"
									onChange={handleFile}
									accept="video/*"
								/>
								<i
									class="icofont-ui-video-play"
									onClick={(e) => {
										e.target.previousSibling.click();
									}}
								></i>
							</div>
							<div className="ml-2 fileChooseIcon">
								<input
									type="file"
									placeholder="Email"
									className="form-control d-none file"
									onChange={handleFile}
									accept=".doc,.pdf"
								/>
								<i
									class="icofont-file-alt"
									onClick={(e) => {
										e.target.previousSibling.click();
									}}
								></i>
							</div>
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
