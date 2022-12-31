import { useEffect, useState } from "react";
import "./RequestHelpForResearch.css";

function RequestHelpForResearch() {
	const initialData = {
		name: "",
		email: "",
		title: "",
		topic: "",
		reason: "",
		description: "",
	};

	const [files, updateFiles] = useState([]);

	const [formData, updateFormData] = useState(initialData);

	const [codeBox, setCodeBox] = useState({
		email: false,
		number: false,
	});
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


	const showCodeBox = (type) => {
		setCodeBox({
			...codeBox,
			[type]: true,
		});
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	const handleFile = (e) => {
		const name = e.target.files[0].name;
		const type = e.target.files[0].type.split("/").shift();
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			updateFiles([
				...files,
				{ type: type, data: reader.result, name: name },
			]);
		};
	};

	return (
		<div>
			<div className="registration-form my-5">
				<form
					style={{ maxWidth: "650px" }}
					className="requestHelpForResearchForm"
					onSubmit={handleFormSubmit}
				>
					<div className="d-flex justify-content-center align-items-baseline mb-4">
						<h4>Request Help For Research</h4>
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
						<label>Problem title</label>
						<input
							type="text"
							name="problem_title"
							className="form-control"
							placeholder="title"
						/>
					</div>
					<div className="form-group">
						<label>Difficulties for help</label>
						<textarea
							className="form-control"
							placeholder="difficulties"
							rows="3"
							name="difficulties"
						></textarea>
					</div>
					<div className="form-group">
						<label>Location</label>
						<input
							type="text"
							name="problem_title"
							className="form-control"
							placeholder="your location"
						/>
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
					<div className="form-group">
						<div>
							<label>WhatsApp no</label>
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
									Verify
								</button>
							</div>
						</div>
						{codeBox.number && (
							<div className="form-group mt-3 d-flex align-items-center">
								<input
									type="text"
									name="whatsapp_verification_code"
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

					<div className="form-group mb-0">
						<label>Attach Files</label>
						<div className="justify-content-center row">
							{files?.map((file) => (
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
					<div className="form-group">
						<div className="d-flex">
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
					</div>

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

export default RequestHelpForResearch;
