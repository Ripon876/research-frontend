import { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import "./SolutionForm.css";

function SolutionForm({ cb }) {
	const initialData = {
		solution: "",
		files: [],
	};

	const [formData, updateFormData] = useState(initialData);

	const handleChange = (event) => {
		updateFormData({
			...formData,
			[event.target.name]: event.target.value.trim(),
		});
	};
	const handleSubmit = () => {
		console.log(formData);
		cb(false);
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
			<div className="align-items-center d-flex h-100 overlay position-fixed w-100">
				<Fade duration={500}>
					<div className="bg-white container p-5 w-50 position-relative">
						<i
							className="icofont-close icofont-2x formClose"
							onClick={() => {
								cb(false);
							}}
						></i>
						<div className="form">
							<form>
								<p
									className="mb-1 pl-1"
									style={{ fontSize: "20px" }}
								>
									Writing solution of{" "}
									<strong>
										'Lorem ipsum dolor sit amet,
										consectetur'
									</strong>
								</p>
								<div className="form-outline">
									<textarea
										className="form-control"
										placeholder="Write down your solution"
										rows="10"
										name="solution"
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
														style={{
															objectFit: "cover",
														}}
													/>
												)}
												{file.type === "video" && (
													<div className="w-100 h-100 position-relative">
														<video
															src={file.data}
															className="img-fluid rounded w-100 h-100"
															title={file.name}
															style={{
																objectFit:
																	"cover",
															}}
														/>
														<i className="icofont-play-alt-1 icofont-3x videoPlayBtn text-white-50"></i>
													</div>
												)}
												{file.type ===
													"application" && (
													<i
														className="img-fluid rounded w-100 h-100 icofont-file-alt icofont-5x"
														title={file.name}
														style={{
															objectFit: "cover",
														}}
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
											className="icofont-image"
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
											className="icofont-ui-video-play"
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
											className="icofont-file-alt"
											onClick={(e) => {
												e.target.previousSibling.click();
											}}
										></i>
									</div>
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
				</Fade>
			</div>
		</div>
	);
}

export default SolutionForm;
